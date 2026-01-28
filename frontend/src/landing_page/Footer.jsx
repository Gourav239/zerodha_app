import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-muted mt-5">
      <hr />

      <div className="container py-5">
        {/* Top section */}
        <div className="row">
          {/* Logo + copyright */}
          <div className="col-md-3 mb-4 ms-md-5">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ height: "22px", width: "auto" }}
            />
            <p className="my-3" style={{ fontSize: "14px" }}>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Account */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="">Account</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#">Open demat account</a></li>
              <li className="footer-link"><a href="#">Minor demat account</a></li>
              <li className="footer-link"><a href="#">NRI demat account</a></li>
              <li className="footer-link"><a href="#">Commodity</a></li>
              <li className="footer-link"><a href="#">Dematerialisation</a></li>
              <li className="footer-link"><a href="#">Fund transfer</a></li>
              <li className="footer-link"><a href="#">MTF</a></li>
              <li className="footer-link"><a href="#">Referral program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="">Support</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#">Contact us</a></li>
              <li className="footer-link"><a href="#">Support portal</a></li>
              <li className="footer-link"><a href="#">File a complaint</a></li>
              <li className="footer-link"><a href="#">Complaint status</a></li>
              <li className="footer-link"><a href="#">Bulletin</a></li>
              <li className="footer-link"><a href="#">Circular</a></li>
              <li className="footer-link"><a href="#">Z-Connect blog</a></li>
              <li className="footer-link"><a href="#">Downloads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="">Company</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#">About</a></li>
              <li className="footer-link"><a href="#">Philosophy</a></li>
              <li className="footer-link"><a href="#">Press & media</a></li>
              <li className="footer-link"><a href="#">Careers</a></li>
              <li className="footer-link"><a href="#">Zerodha Cares</a></li>
              <li className="footer-link"><a href="#">Zerodha.tech</a></li>
              <li className="footer-link"><a href="#">Open source</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="col-md-2 col-6 mb-4">
            <h5 className="">Quick links</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#">Upcoming IPOs</a></li>
              <li className="footer-link"><a href="#">Brokerage charges</a></li>
              <li className="footer-link"><a href="#">Market holidays</a></li>
              <li className="footer-link"><a href="#">Economic calendar</a></li>
              <li className="footer-link"><a href="#">Calculators</a></li>
              <li className="footer-link"><a href="#">Markets</a></li>
              <li className="footer-link"><a href="#">Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <div className="small mt-4" style={{ fontSize: "10px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Registered Address: Bengaluru, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal with mandatory details.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>India's largest broker based on networth as per NSE.</p>

          <p>
            Prevent unauthorised transactions. Update your mobile number and
            email ID with your broker.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
