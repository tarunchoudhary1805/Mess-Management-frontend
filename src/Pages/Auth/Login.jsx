import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Auth/auth.actions";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log(state);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/user/signin", {
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
          background: "red",
        },
      }).showToast();
    }
    dispatch({ type: "LOGIN", payload: response });
  };

  if (state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
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
                          Login to Your Account
                        </h5>
                        <p class="text-center small">
                          Enter your email & password to login
                        </p>
                      </div>

                      <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12">
                          <div class="input-group has-validation">
                            <input
                              type="email"
                              name="email"
                              class="form-control"
                              id="yourUsername"
                              placeholder="Email"
                              value={userData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="yourPassword"
                            value={userData.password}
                            placeholder="Password"
                            onChange={handleChange}
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
                            Don't have account?{" "}
                            <Link to="/register">Create an account</Link>
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
        {/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}
      </main>
    );
  }
};

export default Login;
