import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token-user")) {
      localStorage.removeItem("token-user");
    }
    navigate("/login");
  };
  return (
    <>
      <div className="admin_header">
        <div className="row justify-content-between align-items-center">
          <div className="col-2 text-start">
            <Link className="logo" to="">
              <img src="../../assets/img/logo.png" alt="" />
            </Link>
          </div>
          <div className="col"></div>

          <Link
            to=""
            className="col-auto text-white"
            onClick={(e) => logout(e)}
          >
            <i className="fa fa-sign-out me-2"></i>Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
