import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { api } from "../../config";

const endpoint = api.endPoint;

const Students = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.adminReducer);
  const state1 = useSelector((statex) => statex.authReducer);
  console.log(state);
  console.log(state1);
  const [data, setData] = useState(state.list);
  console.log(data);
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
      setData(response.users);
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

  if (!state1.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="container">
        {" "}
        <main id="main" className="main">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex mt-2 justify-content-center">
                      {" "}
                      <h5 className="card-title">Students List</h5>
                    </div>
                    <table className="table datatable">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Room Number</th>
                          <th scope="col">Account Status</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item, x) => (
                          <tr key={item._id}>
                            <th scope="row">{x + 1}</th>
                            <td>{item.fullName}</td>
                            <td>{item.roomNumber}</td>
                            <td>
                              {item.accountStatus === "Active" ? (
                                <button className="btn btn-success">
                                  Active
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Inactive
                                </button>
                              )}
                            </td>
                            <td>
                              <button className="btn btn-secondary">
                                View More
                              </button>
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
        </main>
      </div>
    );
  }
};

export default Students;
