import React, { useState } from "react";

const MoreDetails = () => {
  const [data, setData] = useState({
    monthStart: "",
    monthEnd: "",
    extraDays: "",
    amountPaid: "",
    amountRemaining: "",
    dateOfPayment: "",
    meal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = () => {
    let now = new Date(data.monthStart);
    console.log(now);
    console.log("Today: " + now.toUTCString());
    let next30days = new Date(now.setDate(now.getDate() + 30));
    console.log("Next 30th day: " + next30days.toUTCString());
    data.monthStart = new Date(data.monthStart).toUTCString();
    data.monthEnd = next30days.toUTCString();
    setData(data);
    console.log(data);
  };

  return (
    <div>
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
                        + Add Entry
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
                              Add Entry
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
                                    type="date"
                                    className="form-control"
                                    id="inputNanme4"
                                    name="monthStart"
                                    onChange={handleChange}
                                    value={data.description}
                                    placeholder="Month Start"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="inputNanme4"
                                    name="meal"
                                    onChange={handleChange}
                                    value={data.meal}
                                    placeholder="1/2 time"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="number"
                                    name="amountPaid"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Amount Paid"
                                    onChange={handleChange}
                                    value={data.amount}
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    name="amountRemaining"
                                    onChange={handleChange}
                                    value={data.modeOfPayment}
                                    placeholder="Amount Remaining"
                                  />
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    name="modeOfPayment"
                                    onChange={handleChange}
                                    value={data.modeOfPayment}
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
                                    onChange={handleChange}
                                    name="dateOfPayment"
                                    value={data.dateOfPayment}
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
                              data-bs-dismiss="modal"
                              className="btn btn-success"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Entry</h5>
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Month Start</th>
                          <th scope="col">Month End</th>
                          <th scope="col">Leave</th>
                          <th scope="col">Amount Paid</th>
                          <th scope="col">Amount remaining</th>
                          <th scope="col">Mode of Payment</th>
                          <th scope="col">Date of Payment</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MoreDetails;
