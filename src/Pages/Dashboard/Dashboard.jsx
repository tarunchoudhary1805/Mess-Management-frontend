import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
                <div class="col-xxl-4 col-md-6">
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
                <div class="col-xxl-4 col-md-6">
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
                <div class="col-xxl-4 col-md-6">
                  <div class="card info-card align-items-center revenue-card">
                    <div class="card-body">
                      <h5 class="card-title">Expense</h5>

                      <div class="d-flex align-items-center">
                        <div class="">
                          <h6 className="text-danger">Rs. 1112</h6>
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
};

export default Dashboard;
