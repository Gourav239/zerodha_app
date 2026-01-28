
import React from "react";

function Universe() {
  return (
    <div className="container text-center" style={{ marginTop: "5rem" }}>
      <div className="row ">
        <p className="fs-3">The Zerodha Universe</p>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-4 p-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            width={"65%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/streakLogo.png"
            width={"65%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/images/sensibullLogo.svg"
            width={"75%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            width={"75%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/images/dittoLogo.png"
            width={"40%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
          <img
            src="media/images/goldenpiLogo.png"
            width={"75%"}
            className="my-3"
          />
          <p style={{ fontSize: "12px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <button type="button" class="btn btn-primary my-4 px-5 py-2 ">
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
