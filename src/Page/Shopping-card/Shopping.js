import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import images from "../../asset/image";
import "./Shopping.css";

function Shopping() {
  return (
    <>
      <Link to="/home" className="Link-css">
        <h1>데미안</h1>
      </Link>
      <h2>&lt; 장바구니</h2>
      <div className="shopping-container">
        <div className="Product">
          <img src={images.noImage} className="Product-img" />
          <div className="Product-info">
            <p className="Product-name">상품 이름</p>
            <p className="Product-price">상품 가격</p>
            <button type="button" className="Product-button">
              -
            </button>
            <input type="text" className="Product-input" />
            <button type="button" className="Product-button">
              +
            </button>
          </div>
        </div>
        <div className="Product">
          <img src={images.noImage} className="Product-img" />
          <div className="Product-info">
            <p className="Product-name">상품 이름</p>
            <p className="Product-price">상품 가격</p>
            <button type="button" className="Product-button">
              -
            </button>
            <input type="text" className="Product-input" />
            <button type="button" className="Product-button">
              +
            </button>
          </div>
        </div>
        <div className="Product">
          <img src={images.noImage} className="Product-img" />
          <div className="Product-info">
            <p className="Product-name">상품 이름</p>
            <p className="Product-price">상품 가격</p>
            <button type="button" className="Product-button">
              -
            </button>
            <input type="text" className="Product-input" />
            <button type="button" className="Product-button">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
