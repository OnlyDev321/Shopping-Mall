import Button from "../../components/Button.js";
import { Link } from "react-router-dom";
import images from "../../asset/image";
import Categoryleft from "../../components/Categoryleft.js";
import "./Category.css";

const CategoryArray = [
  "2만원 이하",
  "2만원 ~ 4만원",
  "4만원 ~ 6만원",
  "7만원 ~ 10만원",
];

const array = [
  {
    id: 1,
    name: "의류",
    list: [
      {
        id: 1,
        name: "상의",
        image: images.noImage,
      },
      {
        id: 2,
        name: "하의",
        image: images.noImage,
      },
      {
        id: 3,
        name: "신발",
        image: images.noImage,
      },
    ],
  },
];

// get params in url
// compare to array
// get list of array
// render list of array

// <Component name={name} list={list}/>
// <div>
//   <h2>{name}</h2>
//   <div className="Category-product">
//     {list.map((item) => (
//       <div key={item.id} className="Category-product-item">{item.name}</div>
//     ))}
//   </div>
// </div>

function Category() {
  return (
    <>
      <Button />
      <div className="Category-title">
        <div className="Category-left">
          <Categoryleft />
        </div>
        <div className="Category-right">
          <h2 className="category-right-title">상품 목력</h2>
          <div className="Category-product">
            <div className="category-product-info">
            <img src={images.noImage} className="category-product-image" />
            <p className="category-product-name">상품 이름</p>
            <p className="category-product-price">상품 가격</p>
            </div>
            <div className="category-product-info">
            <img src={images.noImage} className="category-product-image" />
            <p className="category-product-name">상품 이름</p>
            <p className="category-product-price">상품 가격</p>
            </div>
            <div className="category-product-info">
            <img src={images.noImage} className="category-product-image" />
            <p className="category-product-name">상품 이름</p>
            <p className="category-product-price">상품 가격</p>
            </div>
            <div className="category-product-info">
            <img src={images.noImage} className="category-product-image" />
            <p className="category-product-name">상품 이름</p>
            <p className="category-product-price">상품 가격</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
