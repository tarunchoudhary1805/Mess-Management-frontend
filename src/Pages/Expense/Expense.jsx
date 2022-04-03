import React, { useEffect, useState } from "react";

const Expense = () => {
  const [data, setData] = useState({
    description: "",
    amount: "",
    mode: "",
    date: "",
  });
  const [resData, setResData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    let x = [...resData];
    x.push(data);
    setResData(x);

    console.log(data);
    console.log("resssssssssss ", resData);
  };
  console.log("resssssssssss ", resData);
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
                                  name="mode"
                                  value={data.mode}
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
                                  value={data.date}
                                  name="date"
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
                          {resData.map((item, i) => (
                            <tr>
                              <td>{i + 1}</td>
                              <td>{item.description}</td>
                              <td>{item.amount}</td>
                              <td>{item.mode}</td>
                              <td>{item.date}</td>
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
};

export default Expense;
