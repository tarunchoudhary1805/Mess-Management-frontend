import React from "react";
import scannerImage from "../assets/scanner.jpeg";

const Payment = () => {
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
};

export default Payment;
