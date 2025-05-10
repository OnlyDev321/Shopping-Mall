import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import images from "../../asset/image";
import "./Shopping.css";
function Shopping() {
  return (
    <>
      <Link to="/home">
        <h1>데미안</h1>
      </Link>
      <div className="shopping-container">
        <h2>&lt; 장바구니</h2>
        <div className="shopping-card">
          <h3 className="card">01 옵션결제 &gt; </h3>
          <h3 className="card"> 02 장바구니 &gt; </h3>
          <h3 className="card">03 주문/결제 &gt; </h3>
          <h3 className="card">04 주문완료 </h3>
        </div>
      </div>
      <h2>2025.4.2 주문</h2>
      <div className="shopping-product-container-parent">
        <div className="shopping-product-container">
          <div className="shopping-product-left">
            <h3>배송완료 4/3(목)도착</h3>
            <div className="product-info">
              <img src={images.noImage} className="product-img" />
              <div className="product-details">
                <div className="product-name-title">
                  <h3 className="product-name">Product name</h3>
                  <button className="product-name-delete">삭제</button>
                </div>
                <p className="shopping-product-price">가격</p>
                <div className="shopping-product-quantity">
                  <button type="button">-</button>
                  <input type="text" className="shopping-text-quanlity"></input>
                  <button type="button">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shopping-product-right">
            <h3>주문 예상 금액</h3>
            <div className="total-product">
              <p>총 상품 가격</p>
              <p>19,250원</p>
            </div>
            <div className="total-discount">
              <p>총 할인</p>
              <p>-250원</p>
            </div>
            <div className="total-shipping">
              <p>총 배송비</p>
              <p>+0원</p>
            </div>
            <p className="shopping-right-product-price">19,250원</p>
            <button type="button" className="shopping-button">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopping;
