import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { categories } from "../configs/ui-config/categoryData";
function Header() {
  const [visibe, setVisible] = useState(false);
  return (
    <header className="header">
      {/* left-side */}
      <div className="left-side">
        {/* <Link to="" className="Link-css">
          <FaArrowLeft></FaArrowLeft>
        </Link> */}
        <Link to="/home" className="Link-css">
          <IoHome></IoHome>
        </Link>
        {/* <Link to="" className="Link-css">
          <FaArrowRight></FaArrowRight>
        </Link> */}
      </div>
      {/* Right-side */}
      <div className="right-side">
        <Tippy
          interactive
          visible={visibe}
          placement="bottom"
          onClickOutside={() => setVisible(false)}
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              <div className="menu" onClick={() => setVisible(false)}>
                {categories.map((item) => (
                  <Link
                    key={item.name}
                    to={`/category/${item.name}`}
                    className="Link-css"
                  >
                    <span className="menu-item">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        >
          <div onMouseEnter={() => setVisible(true)}>
            <Link className="Link-css" onClick={() => setVisible(false)}>
              <BiSolidCategory></BiSolidCategory>
            </Link>
          </div>
        </Tippy>
        <Link to="/shopping" className="Link-css">
          <MdShoppingCart></MdShoppingCart>
        </Link>
        <Link to="/account" className="Link-css">
          <MdAccountCircle></MdAccountCircle>
        </Link>
        {/* category icon */}
      </div>
    </header>
  );
}

export default Header;
