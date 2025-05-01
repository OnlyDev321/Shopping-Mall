import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import "./Account.css";

function Account() {
  return (
    <>
      <h1 className="title">로그인</h1>
      <div className="login-title">
        <div className="login">
          <CiLogin />
        </div>
        <div className="info-login">
          <h3 className="fix-login">Email</h3>
          <input className=" fix-login" type="text" />
          <h3 className="fix-login">Password</h3>
          <input className="fix-login" type="text" />
          <button className="button-login fix-login" type="button">
            Sign In
          </button>
          <Link to="/register" className="register-login fix-login">
            For Register?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Account;
