import { FaUserPlus } from "react-icons/fa";

function Register() {
  return (
    <>
      <h1 className="title">Register</h1>
      <div className="login-title">
        <div className="login login2">
          <FaUserPlus />
        </div>
        <div className="info-login">
          <h3 className="fix-login">Email</h3>
          <input className=" fix-login" type="text" />
          <h3 className="fix-login">Password</h3>
          <input className="fix-login" type="text" />
          <h3 className="fix-login">Confirm Password</h3>
          <input className=" fix-login" type="text" />
          <button className="button-login fix-login" type="button">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
