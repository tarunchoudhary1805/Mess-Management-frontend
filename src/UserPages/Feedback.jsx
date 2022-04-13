import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Feedback = () => {
  const [userData, setUserData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(userData);
    // dispatch(register(userData));
  };
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
                        <p class="text-center small">Provide your feedback.</p>
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
                            Submit Feedback Form
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
};

export default Feedback;
