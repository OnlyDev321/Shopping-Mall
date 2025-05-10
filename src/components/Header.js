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
function Header() {
  const [visibe, setVisible] = useState(false);
  return (
    <header className="header">
      {/* left-side */}
      <div className="left-side">
        <Link to="" className="Link-css">
          <FaArrowLeft></FaArrowLeft>
        </Link>
        <Link to="/home" className="Link-css">
          <IoHome></IoHome>
        </Link>
        <Link to="" className="Link-css">
          <FaArrowRight></FaArrowRight>
        </Link>
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
                <Link to="/category" className="Link-css">
                  <span className="menu-item">의류</span>
                </Link>
                <Link to="/category" className="Link-css">
                  <span className="menu-item">전자제품</span>
                </Link>
                <Link to="/category" className="Link-css">
                  <span className="menu-item">가공식품</span>
                </Link>
                <Link to="/category" className="Link-css">
                  <span className="menu-item">책</span>
                </Link>
                <Link to="/category" className="Link-css">
                  <span className="menu-item">신발</span>
                </Link>
              </div>
            </div>
          )}
        >
          <div onMouseEnter={() => setVisible(true)}>
            <Link
              className="Link-css"
              to="/category"
              onClick={() => setVisible(false)}
            >
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
