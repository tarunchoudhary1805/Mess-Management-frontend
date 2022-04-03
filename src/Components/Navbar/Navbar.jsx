import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../redux/Auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const logoutFun = () => {
    console.log("data");
    dispatch(logout());
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
            <li className="nav-item dropdown pe-3">
              <NavLink
                to="/about"
                className="nav-link"
                activeclassname="active"
              >
                About us
              </NavLink>
            </li>
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

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{state.user.fullName}</h6>
                  <span>Room Number : {state.user.roomNumber}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    onClick={logoutFun}
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
