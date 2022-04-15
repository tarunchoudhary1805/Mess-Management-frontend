import React from "react";
import scannerImage from "../assets/scanner.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log(state);

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        {" "}
        <main>
          <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <img
                src={scannerImage}
                className="img img-responsive"
                style={{ height: "80vh" }}
              />
            </section>
          </div>
        </main>
      </>
    );
  }
};

export default Payment;
