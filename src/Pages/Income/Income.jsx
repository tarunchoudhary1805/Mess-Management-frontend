import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { api } from "../../config";

const endpoint = api.endPoint;

const Income = () => {
  const dispatch = useDispatch();
  const state1 = useSelector((state) => state.authReducer);
  console.log(state1);
  const [state, setState] = useState({
    name: "",
    amount: "",
    modeofpayment: "",
    dateofpayment: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`${endpoint}/api/user/getAllUsers`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state1.token}`,
        },
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
      console.log(response);
      // setData(response.users);
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
      dispatch({ type: "GET_STUDENT_LIST", payload: response });
    })();
  }, []);

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="container">
        <main id="main" className="main">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex mt-2 justify-content-end">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-success rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#disablebackdrop"
                      >
                        + Add Income
                      </button>
                    </div>
                    {/* modal */}
                    <div
                      className="modal fade"
                      id="disablebackdrop"
                      tabindex="-1"
                      data-bs-backdrop="false"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title text-success ">
                              Add Income
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="card-body">
                              <form className="row g-3">
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputNanme4"
                                    placeholder="Name / Description"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Amount"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder="Mode Of Payment"
                                  />
                                </div>
                                <div className="col-12">
                                  <label
                                    for="inputNanme4"
                                    className="form-label d-flex"
                                  >
                                    Date of Payment
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="Date"
                                  />
                                </div>
                                <div className="col-12 ">
                                  <div>
                                    <label
                                      for="inputNanme4"
                                      className="form-label d-flex"
                                    >
                                      Start Date
                                    </label>
                                    <input
                                      type="date"
                                      className="form-control"
                                      id="inputAddress"
                                      placeholder="Start Date"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button type="button" className="btn btn-success">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Income</h5>
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name/Description</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Mode of Payment</th>
                          <th scope="col">Date of Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Tarun Choudhary</td>
                          <td>2400</td>
                          <td>Online</td>
                          <td>2016-05-25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
};

export default Income;
