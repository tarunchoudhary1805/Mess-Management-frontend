import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div className="container">
      {" "}
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
                      + Add Student
                    </button>
                    <p>fiter lagana h name / room number</p>
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
                            Add Students
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
                                  type="text"
                                  className="form-control"
                                  id="inputNanme4"
                                  placeholder="Room No."
                                />
                              </div>
                              <div className="col-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputNanme4"
                                  placeholder="contact Number"
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
                  <h5 className="card-title">Students List</h5>
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name <br /> /Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Remaining <br /> Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Tarun Choudhary</td>
                        <td>2400</td>
                        <td>0</td>
                        <td>
                          {/* <div class="accorion-item"> */}
                          <h2 class="accordion-headr" id="headingOne">
                            <a
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              See More
                            </a>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body"></div>
                          </div>
                          {/* </div> */}
                        </td>
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
};

export default Students;
