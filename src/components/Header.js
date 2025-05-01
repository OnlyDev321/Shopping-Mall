import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      {/* <a className="logo" href="#">
        데미안
      </a> */}
      {/* left-side */}
      <div className="left-side">
        <Link to="">
          <FaArrowLeft></FaArrowLeft>
        </Link>
        <Link to="/home">
          <IoHome></IoHome>
        </Link>
        <Link to="">
          <FaArrowRight></FaArrowRight>
        </Link>
      </div>
      {/* Right-side */}
      <div className="right-side">
        <Link to="/category">
          <BiSolidCategory></BiSolidCategory>
        </Link>
        <Link to="/shopping">
          <MdShoppingCart></MdShoppingCart>
        </Link>
        <Link to="/account">
          <MdAccountCircle></MdAccountCircle>
        </Link>
        {/* category icon */}
      </div>
    </header>
  );
}

export default Header;
