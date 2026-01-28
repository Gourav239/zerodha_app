import React from "react";

function Pricing() {
  return (
    <div className="container text-muted">
      <div className="row">
        <div className="col-4 ms-5 ps-5">
          <h3>Unbeatable pricing </h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing
          </a>
        </div>

        <div className="col-6 ms-5">
          <div className="row">
            <div className="col p-1 ms-5 ">
              <img src="media/images/pricing0.svg" style={{ width: "60%" }} />
              <p> Free account opening</p>
            </div>
            <div className="col p-1">
              <img src="media/images/pricing0.svg" style={{ width: "60%" }} />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-1 me-5">
              <img
                src="media/images/intradayTrades.svg"
                style={{ width: "60%" }}
              />
              <p> Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
