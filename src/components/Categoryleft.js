import { Link } from "react-router-dom";
import "../Page/Category/Category.css";
function Categoryleft() {
  return (
    <>
      <h2 className="Category-left-title">Name</h2>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
      <Link to="/outer" className="Category-left-product Link-css">
        <p>아우터</p>
      </Link>
    </>
  );
}
export default Categoryleft;
