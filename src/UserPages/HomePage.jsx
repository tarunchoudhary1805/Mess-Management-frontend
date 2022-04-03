import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const [menu, setMenu] = useState([
    {
      day: "SUNDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG SUM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG SUE"],
    },
    {
      day: "MONDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG MM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG ME"],
    },
    {
      day: "TUESDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG TM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG TE"],
    },
    {
      day: "WEDNESDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG WM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG WE"],
    },
    {
      day: "THRUSDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG THM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG THE"],
    },
    {
      day: "FRIDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG FM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG FE"],
    },
    {
      day: "SATURDAY",
      morningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG SAM"],
      eveningMeal: ["DAL", "CHAVAL", "RAITA", "PARATHE", "MIX VEG SAE"],
    },
  ]);
  const [studentData, setStudentData] = useState([
    {
      monthStart: "",
      monthEnd: "",
      extraDays: "",
      paymentStatus: true,
      paidAmount: "",
      remainingAmount: "",
      modeOfPayment: "",
    },
  ]);
  const day = new Date().getDay();

  console.log(day);

  if (!state.isAuthenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="container">
        <main id="main" className="main">
          <section className="section">
            <section class="section">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card table-responsive">
                    <div class="card-body">
                      <div class="accordin-item">
                        <span class="accordison-header" id="flush-headingOne">
                          <button
                            class="accordion-button p-0  collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <h5 class="card-title">Today's Menu</h5>
                          </button>
                        </span>

                        <div
                          id="flush-collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            <table class="table ">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Day</th>
                                  <th scope="col">Morning Meal</th>
                                  <th scope="col">Evening Meal</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>{menu[day].day}</td>
                                  <td>
                                    {menu[day].morningMeal.map((item) => (
                                      <h6>{`${item} ,`}</h6>
                                    ))}
                                  </td>
                                  <td>
                                    {menu[day].eveningMeal.map((item) => (
                                      <h6>{`${item} ,`}</h6>
                                    ))}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Default Table --> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card table-responsive">
                    <div class="card-body">
                      <h5 class="card-title">Student Details</h5>
                      <table class="table ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Month Start</th>
                            <th scope="col">Month End</th>
                            <th scope="col">
                              Extra Days <br /> (included in Month)
                            </th>
                            <th scope="col">
                              Amount <br /> Paid
                            </th>
                            <th scope="col">
                              Amount <br /> Remaining
                            </th>
                            <th scope="col">
                              Mode of <br /> Payment
                            </th>
                            <th scope="col">
                              Payment <br /> Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {studentData.map((item, x) => (
                            <tr>
                              <td>{x + 1}</td>
                              <td>{item.monthStart}</td>
                              <td>{item.monthEnd}</td>
                              <td>{item.extraDays}</td>
                              <td>{item.paidAmount}</td>
                              <td>{item.remainingAmount}</td>
                              <td>{item.modeOfPayment}</td>
                              <td>
                                {item.paymentStatus ? (
                                  <button className="btn btn-success">
                                    Done
                                  </button>
                                ) : (
                                  <button className="btn btn-danger">
                                    Pending
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <p
              className="text-center"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              For any further Queries , Contact us on Whatsapp :{" "}
              {/* <i class="h1 text-center bx bxl-whatsapp"> */}
              <a
                href="https://wa.me/qr/R6SHSY5F7DQJG1"
                class="h1 text-center bx bxl-whatsapp"
                target="_blank"
              ></a>
              {/* </i> */}
            </p>
          </section>
        </main>
      </div>
    );
  }
};

export default HomePage;
