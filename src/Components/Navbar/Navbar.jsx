import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { logout } from "../../redux/Auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const logoutFun = () => {
    console.log("data");
    dispatch({ type: "LOGOUT", payload: "" });
    Toastify({
      text: "Logout Successfully ",
      className: "danger",
      close: true,
      style: {
        background: "red",
      },
    }).showToast();
  };
  return (
    <div>
      {" "}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-non d-lg-block">Hostel Mess</span>
          </Link>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <NavLink to="/" className="nav-link" activeclassname="active">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown pe-3">
              <NavLink
                to="/about"
                className="nav-link"
                activeclassname="active"
              >
                About us
              </NavLink>
            </li> */}
            <li className="nav-item dropdown pe-3">
              <NavLink
                to="/payment"
                className="nav-link"
                activeclassname="active"
              >
                Payment
              </NavLink>
            </li>
            <li className="nav-item dropdown pe-3">
              <NavLink
                to="/feedback"
                className="nav-link"
                activeclassname="active"
              >
                Feedback Form
              </NavLink>
            </li>
            {state.user.userType === "Admin" && (
              <li className="nav-item dropdown pe-3">
                <NavLink
                  to="/adminDashboard"
                  className="nav-link"
                  activeclassname="active"
                >
                  Admin
                </NavLink>
              </li>
            )}
            <li className="nav-item dropdown pe-3">
              <NavLink
                to="/extraDays"
                className="nav-link"
                activeclassname="active"
              >
                Extra Days Request
              </NavLink>
            </li>

            <li>
              <a
                onClick={logoutFun}
                className="dropdown-item d-flex align-items-center"
                href="#"
              >
                <i className="bi bi-box-arrow-right"></i> &nbsp;
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
