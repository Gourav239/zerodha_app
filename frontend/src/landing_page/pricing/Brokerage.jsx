import React from "react";
import OpenAccount from "../OpenAccount";
function Brokerage() {
  return (
    <>
      <div className="container " style={{ marginTop: "10rem" }}>
        <div className="brokerage row text-center mx-5">
          <div className="col ">
            <img
              src="media/images/pricing0.svg"
              style={{ width: "70%", marginBottom: "3rem" }}
            />
            <h3>Free equity delivery</h3>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "70%", marginBottom: "3rem" }}
            />
            <h3>Intraday and F&O trades</h3>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col ">
            <img
              src="media/images/pricing0.svg"
              style={{ width: "70%", marginBottom: "3rem" }}
            />
            <h3>Free direct MF</h3>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
      <OpenAccount />
      <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage calculator</h3>
            </a>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
              className="text-mut"
            >
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-4 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">List of charges</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
