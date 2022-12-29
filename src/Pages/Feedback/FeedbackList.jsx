import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { api } from "../../config";

const endpoint = api.endPoint;

const FeedbackList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const state1 = useSelector((state) => state.adminReducer);
  console.log(state);
  const [loading, setLoading] = useState(false);

  console.log(state1);
  const [feedbackby, setFeedbackBy] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(`${endpoint}/api/feedback/getAllFeedbacks`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((data) => data.json())
        .catch((err) => console.log(err));
      console.log(response.response);
      setLoading(false);
      dispatch({ type: "GET_FEEDBACK", payload: response.response });
    })();
  }, []);

  const deleteFeedback = async (id) => {
    const response = await fetch(
      `${endpoint}/api/feedback/deleteFeedback/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }
    )
      .then((data) => data.json())
      .catch((err) => console.log(err));
    console.log(response.data);
    setLoading(false);
    dispatch({ type: "DELETE_FEEDBACK", payload: response.data });
  };

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        {" "}
        <div className="container">
          <main id="main" className="main">
            <section className="section">
              {loading ? (
                <Loader />
              ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">FeedBacks </h5>
                        <table className="table datatable">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Room Number</th>
                              {/* <th scope="col">Title</th>
                              <th scope="col">Description</th> */}
                              <th scope="col">Read</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {state1?.feedbacks?.map((item, x) => (
                              <tr>
                                <th scope="row">{x + 1}</th>
                                <td>{item.postedBy.fullName}</td>
                                <td>{item.postedBy.roomNumber}</td>
                                {/* <td>{item.title}</td>
                                <td>{item.description}</td> */}
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-success rounded-pill"
                                    data-bs-toggle="modal"
                                    data-bs-target="#disablebackdrop"
                                    onClick={() => setFeedbackBy(item)}
                                  >
                                    Read
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-danger rounded-pill"
                                    // data-bs-toggle="modal"
                                    // data-bs-target="#disablebackdrop"
                                    onClick={() => deleteFeedback(item._id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
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
                              Feedback by :{" "}
                              <span className="text-danger">
                                {feedbackby?.postedBy?.fullName}&nbsp; | &nbsp;
                                {feedbackby?.postedBy?.roomNumber}
                              </span>
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
                              <div className="">
                                <h3 className="bold">{feedbackby?.title}</h3>
                                <p> {feedbackby?.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </main>
        </div>
      </>
    );
  }
};

export default FeedbackList;
