import { Link } from "react-router-dom";
import "../Page/Category/Category.css";

function Categoryleft({ data }) {
  return (
    <>
      <h2 className="Category-left-title">{data?.name}</h2>
      {data?.list?.map((item) => (
        <Link to={`?filter=${item}`} className="Category-left-product Link-css">
          <p>{item}</p>
        </Link>
      ))}
    </>
  );
}
export default Categoryleft;
