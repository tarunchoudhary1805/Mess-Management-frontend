import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { api } from "../../config";

const endpoint = api.endPoint;

const Expense = () => {
  const dispatch = useDispatch();
  const state1 = useSelector((state) => state.authReducer);
  const state = useSelector((state) => state.adminReducer);
  // console.log(state1);
  // console.log(state);
  const [data, setData] = useState({
    description: "",
    amount: "",
    modeOfPayment: "",
    dateOfPayment: "",
  });

  const [resData, setResData] = useState(state.expense);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${endpoint}/api/admin/getExpense`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state1.token}`,
        },
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
      // console.log(response.data);
      setResData(response.data);
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
      dispatch({ type: "GET_EXPENSE", payload: response.data });
    })();
  }, []);

  const submit = async (e) => {
    if (
      !data.description ||
      !data.amount ||
      !data.dateOfPayment ||
      !data.modeOfPayment
    )
      return Toastify({
        text: `All Fields are required`,
        className: "info",
        close: true,
        style: {
          background: "red",
        },
      }).showToast();
    e.preventDefault();

    const response = await fetch(`${endpoint}/api/admin/addExpense`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state1.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .catch((err) => console.log(err));
    console.log(response.response);

    if (response.status == "ok") {
      let x = [...resData];
      x.push(response.response);
      setResData(x);
      // setResData(response.response);
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
    dispatch({ type: "ADD_EXPENSE", payload: resData });

    // console.log("resssssssssss ", resData);
  };
  console.log("resssssssssss ", resData);

  if (!state1.isAuthenticated) {
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
                        className="btn btn-danger rounded-pill"
                        data-bs-toggle="modal"
                        data-bs-target="#disablebackdrop"
                      >
                        + Add Expense
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
                              Add Expense
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
                                    name="description"
                                    value={data.description}
                                    className="form-control"
                                    id="inputNanme4"
                                    onChange={handleChange}
                                    placeholder="Name / Description"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="inputEmail4"
                                    name="amount"
                                    onChange={handleChange}
                                    value={data.amount}
                                    placeholder="Amount"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    name="modeOfPayment"
                                    value={data.modeOfPayment}
                                    className="form-control"
                                    id="inputPassword4"
                                    onChange={handleChange}
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
                                    value={data.dateOfPayment}
                                    name="dateOfPayment"
                                    onChange={handleChange}
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="Date"
                                  />
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
                            <button
                              type="button"
                              onClick={submit}
                              className="btn btn-success"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Expense</h5>
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
                        {resData?.length > 0 ? (
                          <>
                            {resData?.map((item, i) => (
                              <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.modeOfPayment}</td>
                                <td>{item.dateOfPayment}</td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <p className="text-center">No </p>
                        )}
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

export default Expense;
