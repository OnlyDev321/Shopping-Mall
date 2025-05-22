import { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Product() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const { addToCart } = useContext(CartContext);

  const id = searchParams.get("id");
  console.log(id);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/books/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  console.log(book);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="Product-title">
      <div className="product-info-left">
        <img className="product-iamge" src={book.image_url} alt={book.title} />
      </div>
      <div className="product-info-right">
        <h3>{book.title}</h3>
        <h2 className="product-price2">{book.price}</h2>
        <button
          type="button"
          className="info-button"
          onClick={() => addToCart(book)}
        >
          장바구니 담기
        </button>
        <h3>제품에 대한 상세 설명</h3>
        <p className="product-font">{book.description}</p>
      </div>
    </div>
  );
}

export default Product;
