import React, { useState } from "react";
import { useNavigate } from "react-router";

import styles from "./signup.module.css";

const Signup = () => {
  const navigate = useNavigate();
  var signupArr = JSON.parse(localStorage.getItem("signup")) || [];

  const [signupform, setsignupform] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handform = (e) => {
    let { name, value } = e.target;
    setsignupform({ ...signupform, [name]: value });
  };

  const handlesub = (e) => {
    e.preventDefault();
    signupArr.push(signupform);
    localStorage.setItem("signup", JSON.stringify(signupArr));
    navigate("/login");
  };

  return (
    <div className="max-width">
      <h4 className={styles.hhhdiv}>Sign-Up</h4>

      <div style={{ display: "flex" }}>
        <div className={styles.fddiv}>
          <form onSubmit={handlesub}>
            <div class="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
                placeholder="Enter First Name"
                style={{ width: "300px" }}
                onChange={handform}
                name="fname"
                value={signupform.fname}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName2"
                aria-describedby="emailHelp"
                placeholder="Enter Last Name"
                style={{ width: "300px" }}
                onChange={handform}
                name="lname"
                value={signupform.lname}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ width: "300px" }}
                onChange={handform}
                name="email"
                value={signupform.email}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ width: "300px" }}
                onChange={handform}
                name="password"
                value={signupform.password}
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label
                class="form-check-label"
                for="exampleCheck1"
                style={{ marginTop: "5px" }}
              >
                Check me out
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div>
          <img
            style={{ width: "600px", marginLeft: "60px" }}
            src="https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239_960_720.png"
            alt="loginbg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
