<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");
    setUsername("");
    setPassword("");
    try {
      if (!isLogin) {
        
        const res = await axios.post("http://localhost:8000/signup", {
          email,
          username,
          password,
        });

        alert(res.data);
        
      } else {
        
        console.log("Login clicked");
        //navigate("/dashboard");
        window.location.href=" http://localhost:5174";
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      {/* Heading */}
      <div className="row text-center my-5">
        <h3>
          {isLogin
            ? "Login to your trading account"
            : "Open a free demat and trading account online"}
        </h3>
        <p className="fs-5 text-muted">
          {isLogin
            ? "Welcome back! Login to continue"
            : "Start investing brokerage free and join a community of investors"}
        </p>
      </div>

      <div className="row align-items-center my-5">
        {/* Image */}
        <div className="col-md-6 text-center">
          <img src="media/images/signup.png" alt="img" className="img-fluid" />
        </div>

        {/* Form */}
        <div className="col-md-5 offset-md-1">
          <form
            className="p-4 border rounded shadow-sm bg-white"
            onSubmit={handleSubmit}
          >
            <h4 className="mb-4">{isLogin ? "Login" : "Signup Now"}</h4>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Username (Signup only) */}
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              {isLogin ? "Login" : "Create Account"}
            </button>

            {/* Toggle */}
            <p className="text-center text-muted mt-3 mb-0">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
=======
import React from 'react';
=======
import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
>>>>>>> 6a323044 (Frontend dashboard work)

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
export default Signup;
>>>>>>> 728a61b6 (home and about part is done for frontend)
=======
  //let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");
    setUsername("");
    setPassword("");
    try {
      if (!isLogin) {
        
        const res = await axios.post("http://localhost:8000/signup", {
          email,
          username,
          password,
        });

        alert(res.data);
        
      } else {
        
        console.log("Login clicked");
        //navigate("/dashboard");
        window.location.href=" http://localhost:5174";
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      {/* Heading */}
      <div className="row text-center my-5">
        <h3>
          {isLogin
            ? "Login to your trading account"
            : "Open a free demat and trading account online"}
        </h3>
        <p className="fs-5 text-muted">
          {isLogin
            ? "Welcome back! Login to continue"
            : "Start investing brokerage free and join a community of investors"}
        </p>
      </div>

      <div className="row align-items-center my-5">
        {/* Image */}
        <div className="col-md-6 text-center">
          <img src="media/images/signup.png" alt="img" className="img-fluid" />
        </div>

        {/* Form */}
        <div className="col-md-5 offset-md-1">
          <form
            className="p-4 border rounded shadow-sm bg-white"
            onSubmit={handleSubmit}
          >
            <h4 className="mb-4">{isLogin ? "Login" : "Signup Now"}</h4>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Username (Signup only) */}
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              {isLogin ? "Login" : "Create Account"}
            </button>

            {/* Toggle */}
            <p className="text-center text-muted mt-3 mb-0">
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
>>>>>>> 6a323044 (Frontend dashboard work)
