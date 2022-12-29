import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Loader from "../Components/Loader/Loader";
import { api } from "../config";

const endpoint = api.endPoint;

const Feedback = () => {
  const dispatch = useDispatch();

  const state1 = useSelector((state) => state.authReducer);
  const state = useSelector((state) => state.adminReducer);

  const [loading, setLoading] = useState(false);
  console.log(state);
  const [userData, setUserData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(userData);
    setLoading(true);

    if (!userData.description || !userData.title) {
      setLoading(false);
      return Toastify({
        text: `All Fields are required`,
        className: "info",
        close: true,
        style: {
          background: "red",
        },
      }).showToast();
    }
    e.preventDefault();

    const response = await fetch(`${endpoint}/api/feedback/addFeedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state1.token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
    console.log(response.data);

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
    dispatch({ type: "ADD_FEEDBACK", payload: response.data });
    setUserData({ title: "", description: "" });
    // dispatch(register(userData));
    setLoading(false);
  };

  if (!state1.isAuthenticated) {
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
                        {/* <img src="assets/img/logo.png" alt="" /> */}
                        {/* <span class="d-none d-lg-block">HOSTEL MESS | FEEDBACK FORM</span> */}
                      </a>
                    </div>

                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="pt-4 pb-2">
                          <h5 class="card-title text-center pb-0 fs-4">
                            FEEDBACK FORM
                          </h5>
                          <p class="text-center small">
                            Provide your feedback.
                          </p>
                        </div>

                        <form class="row g-3 needs-validation" novalidate>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <input
                                type="text"
                                name="title"
                                class="form-control"
                                id="yourUsername"
                                value={userData.title}
                                onChange={handleChange}
                                placeholder="Enter the Title"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="input-group has-validation">
                              <textarea
                                type="text"
                                // cols={30}
                                rows={5}
                                name="description"
                                class="form-control"
                                id="yourUsername"
                                value={userData.description}
                                onChange={handleChange}
                                placeholder="Description"
                                required
                              />
                            </div>
                          </div>

                          <div class="col-12">
                            <button
                              class="btn btn-primary w-100"
                              onClick={submit}
                              type="submit"
                            >
                              {loading ? <Loader /> : "Submit Feedback Form"}
                            </button>
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

export default Feedback;
