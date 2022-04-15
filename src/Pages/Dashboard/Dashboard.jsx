import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { api } from "../../config";

const endpoint = api.endPoint;
const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const state1 = useSelector((state) => state.adminReducer);
  console.log(state);
  console.log(state1);
  let exp = 0;
  const [expense, setExpense] = useState(exp);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${endpoint}/api/admin/getExpense`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
      console.log(response.data);

      dispatch({ type: "GET_EXPENSE", payload: response.data });
    })();
  }, []);

  useEffect(() => {
    for (let index = 0; index < state1.expense.length; index++) {
      let element = state1.expense[index].amount;
      exp += element;
    }
    setExpense(exp);
  });

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        {" "}
        <main id="main" class="main">
          <div class="pagetitle ">
            <h1>Dashboard</h1>
          </div>{" "}
          <br />
          <br />
          <section class="section dashboard">
            <div class="row">
              <div class="col-lg-8 mx-auto  ">
                <div class="row">
                  <div class="col-xxl-4 col-md-6 ">
                    <div class="card info-card align-items-center revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Students</h5>

                        <div class="d-flex align-items-center">
                          <div class="">
                            <h6>112</h6>
                            <br />
                            <Link
                              to="/students"
                              className="text-white btn btn-success"
                            >
                              See List
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-6 ">
                    <div class="card info-card align-items-center revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Income</h5>

                        <div class="d-flex align-items-center">
                          <div class="">
                            <h6 className="text-success">Rs. 12112</h6>
                            <br />

                            <Link
                              to="/income"
                              className=" btn btn-success text-white"
                            >
                              Open
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-4 col-md-6 ">
                    <div class="card info-card align-items-center revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Expense</h5>

                        <div class="d-flex align-items-center">
                          <div class="">
                            <h6 className="text-danger">Rs. {expense}</h6>
                            <br />
                            <Link
                              to="/expense"
                              className="btn btn-success text-white"
                            >
                              Open List
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div class="col-xxl-4 col-md-6 ">
                    <div class="card info-card align-items-center revenue-card">
                      <div class="card-body">
                        <h5 class="card-title">Feedbacks</h5>

                        <div class="d-flex align-items-center">
                          <div class="">
                            <p className="text-danger">Get All feedbacks</p>

                            <Link
                              to="/feedbackList"
                              className="btn btn-success text-white"
                            >
                              Open List
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-xxl-4 col-md-6">
                  <div class="card info-card align-items-center revenue-card">
                    <div class="card-body">
                      <h5 class="card-title">Remaining</h5>

                      <div class="d-flex align-items-center">
                        <div class="">
                          <h6 className="">Rs. 1112</h6>
                          <br />
                          <button className="btn btn-success">Open</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>
        {/* <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer> */}
        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </>
    );
  }
};

export default Dashboard;
