import Button from "../../components/Button.js";
import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";

import "./Category.css";

const CategoryArray = [
  "2만원 이하",
  "2만원 ~ 4만원",
  "4만원 ~ 6만원",
  "7만원 ~ 10만원",
];

function Category() {
  return (
    <>
      <Button />
      <div className="Category-title">
        <div className="Category-left">
          <h2 className="left-price">가격대</h2>
          {CategoryArray.map((item, index) => (
            <Link to={`/category/${index}`} key={index}>
              <button type="button" className="Category-button">
                {item}
              </button>
            </Link>
          ))}
          <div className="Category-button-min-title">
            <Link to="">
              <button type="button" className="Category-button-min">
                Min :
              </button>
            </Link>
            <input type="text" className="Category-text-min"></input>
          </div>
          <div className="Category-button-max-title">
            <Link to="">
              <button type="button" className="Category-button-max">
                Max :
              </button>
            </Link>
            <input type="text" className="Category-text-max"></input>
          </div>
        </div>
        <div className="Category-right">
          <h2 className="category-right-title">상품 목력</h2>
          <div className="Category-product">
            <AiFillPicture />
            <AiFillPicture />
            <AiFillPicture />
            <AiFillPicture />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
