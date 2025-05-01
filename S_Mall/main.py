from fastapi import FastAPI
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import requests
import time
import sqlite3
from fastapi.middleware.cors import CORSMiddleware
import threading
app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_URL = "https://books.toscrape.com/"

# SQLite DB 초기화 함수
def init_db():
    conn = sqlite3.connect("books.db")
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            price TEXT,
            availability TEXT,
            description TEXT,
            url TEXT,
            image_url TEXT
        )
    """)
    conn.commit()
    conn.close()

# 크롤링 상태 저장 변수
crawl_status = {"status": "초기화 중"}

# 크롤링 함수
def crawl_books_data():
    global crawl_status
    crawl_status["status"] = "로딩중"

    conn = sqlite3.connect("books.db")
    cur = conn.cursor()

    cur.execute("DELETE FROM books")
    conn.commit()

    for page_num in range(1, 51):
        page_url = urljoin(BASE_URL, f"catalogue/page-{page_num}.html")
        res = requests.get(page_url)
        soup = BeautifulSoup(res.text, "html.parser")

        for a_tag in soup.select(".product_pod h3 a"):
            relative_link = a_tag["href"]
            detail_url = urljoin(page_url, relative_link)

            try:
                detail_res = requests.get(detail_url)
                detail_soup = BeautifulSoup(detail_res.text, "html.parser")

                title = detail_soup.h1.text
                price = detail_soup.select_one(".price_color").text
                availability = detail_soup.select_one(".instock.availability").text.strip()
                desc_block = detail_soup.select_one("#product_description")
                if desc_block:
                    description = desc_block.find_next_sibling("p").text.strip()
                else:
                    description = ""
                image_url = urljoin(detail_url, detail_soup.select_one("img")["src"])

                cur.execute("""
                    INSERT INTO books (title, price, availability, description, url, image_url)
                    VALUES (?, ?, ?, ?, ?, ?)
                """, (title, price, availability, description, detail_url, image_url))
                conn.commit()

            except Exception as e:
                print(f"[ERROR] {detail_url} - {e}")
            time.sleep(0.1)

    conn.close()
    crawl_status["status"] = "완료됨"

# DB 초기화 + 크롤링 수행
init_db()
threading.Thread(target=crawl_books_data).start()

@app.get("/")
def root():
    return {"message": f"서버 실행중 - 현재 상태: {crawl_status['status']}"}

@app.get("/crawl")
def crawl_books():
    crawl_books_data()
    return {"message": "Crawling and saving completed."}

@app.get("/crawl/status")
def get_crawl_status():
    return crawl_status

@app.get("/books")
def get_books():
    conn = sqlite3.connect("books.db")
    cur = conn.cursor()
    cur.execute("SELECT id, title, price, availability, description, url, image_url FROM books")
    rows = cur.fetchall()
    conn.close()

    books = [
        {
            "id": row[0],
            "title": row[1],
            "price": row[2],
            "availability": row[3],
            "description": row[4],
            "url": row[5],
            "image_url": row[6]
        }
        for row in rows
    ]
    return {"books": books}

@app.get("/books/{id}")
def get_books_by_id(id: int):
    conn = sqlite3.connect("books.db")
    cur = conn.cursor()
    cur.execute("SELECT id, title, price, availability, description, url, image_url FROM books WHERE id = ?", (id,))
    row = cur.fetchone()
    conn.close()

    if row:
        book = {
            "id": row[0],
            "title": row[1],
            "price": row[2],
            "availability": row[3],
            "description": row[4],
            "url": row[5],
            "image_url": row[6]
        }
        return book
    else:
        return {"error": "Không tìm thấy sách với ID đã cho"}