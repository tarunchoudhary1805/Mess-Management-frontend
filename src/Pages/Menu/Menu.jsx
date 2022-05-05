import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { api } from "../../config";

const endpoint = api.endPoint;

const Menu = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log(state);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setState({ ...state, [name]: value });
  };

  const day = new Date().getDay();

  console.log(day);

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div>
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
            </section>
          </main>
        </div>
      </div>
    );
  }
};
export default Menu;
