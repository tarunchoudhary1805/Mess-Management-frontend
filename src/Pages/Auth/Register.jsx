import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { register } from "../../redux/Auth/auth.actions";

const Register = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log(state);

  const [userData, setUserData] = useState({
    fullName: "",
    roomNumber: "",
    contactNumber: "",
    department: "",
    email: "",
    password: "",
    userType: "Student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const response = await fetch("http://localhost:8080/api/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
    console.log(response);
    if (response.status == "ok") {
      Toastify({
        text: `${response.message}`,
        className: "info",
        close: true,
        style: {
          background: "green",
        },
      }).showToast();
    } else {
      Toastify({
        text: `${response.error}`,
        className: "info",
        close: true,
        style: {
          background: "#eec0c6",
        },
      }).showToast();
    }
    dispatch({ type: "REGISTER", payload: response });
  };
  if (state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <main>
          <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div class="d-flex justify-content-center py-4">
                      <a
                        href="index.html"
                        class="logo d-flex align-items-center w-auto"
                      >
                        <img src="assets/img/logo.png" alt="" />
                        <span class="d-none d-lg-block">HOSTEL MESS</span>
                      </a>
                    </div>

                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="pt-4 pb-2">
                          <h5 class="card-title text-center pb-0 fs-4">
                            Register
                          </h5>
                          <p class="text-center small">
                            Enter your credentials to create account
                          </p>
                        </div>

                        <form class="row g-3 needs-validation" novalidate>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="text"
                                name="fullName"
                                class="form-control"
                                id="yourUsername"
                                value={userData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="text"
                                name="roomNumber"
                                class="form-control"
                                id="yourUsername"
                                value={userData.roomNumber}
                                onChange={handleChange}
                                placeholder="Room Number i.e. A-1"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="text"
                                name="contactNumber"
                                class="form-control"
                                id="yourUsername"
                                value={userData.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="text"
                                name="department"
                                class="form-control"
                                id="yourUsername"
                                value={userData.department}
                                onChange={handleChange}
                                placeholder="Department"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                class="form-control"
                                id="yourUsername"
                                placeholder="email"
                                required
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <input
                              type="password"
                              name="password"
                              value={userData.password}
                              onChange={handleChange}
                              class="form-control"
                              id="yourPassword"
                              placeholder="Password"
                              required
                            />
                          </div>

                          <div class="col-12">
                            <button
                              class="btn btn-primary w-100"
                              onClick={submit}
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <div class="col-12">
                            <p class="small mb-0">
                              Already have account?{" "}
                              <Link to="/login">Login</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
};

export default Register;
