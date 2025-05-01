import React, { useEffect, useState } from "react";

function ProductList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched books:", data.books);
        setBooks(data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <ul className="products">
      {books.map((book) => (
        <li className="product" key={book.id}>
          <a
            className="productCard"
            href={`/product-detail/?id=${book.id}`}
            target="_blank"
          >
            <div className="thumbnail-wrap">
              <img
                className="thumbnail"
                src={book.image_url}
                alt={book.title}
              />
            </div>
            <p className="product-name">{book.title}</p>
            <p className="product-price">
              {book.price} <span className="discount">20%</span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
