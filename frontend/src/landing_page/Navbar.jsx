import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div style={{ height: "70px" }}></div>

      <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand ms-5" to="/">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ height: "22px", width: "auto" }}
            />
          </Link>

          {/* Toggle button (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
