import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../AuthContext";
import styles from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const { setisAuth } = useContext(AuthContext);

  const [loginform, setloginform] = useState({
    email: "",
    password: "",
  });

  const handchange = (e) => {
    const { name, value } = e.target;
    setloginform({ ...loginform, [name]: value });
  };

  var signupArr = JSON.parse(localStorage.getItem("signup"));

  const loginhandle = (e) => {
    e.preventDefault();
    console.log(signupArr);
    for (var i = 0; i < signupArr.length; i++) {
      if (
        loginform.email === signupArr[i].email &&
        loginform.password === signupArr[i].password
      ) {
        alert("Login Success !........");
        setisAuth(true);
        navigate("/cart");
      }
    }
  };

  const navv = () => {
    navigate("/signup");
  };
  return (
    <div className="max-width">
      <h1 className={styles.h11div}>Login</h1>
      <div className={styles.dddiv}>
        <div className={styles.ddiv}>
          <form onSubmit={loginhandle}>
            <div class="form-group">
              <label for="exampleInputEmail1" className={styles.labelddiv}>
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ width: "300px" }}
                name="email"
                value={loginform.email}
                onChange={handchange}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" className={styles.labelddiv}>
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ width: "300px" }}
                name="password"
                value={loginform.password}
                onChange={handchange}
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
                className={styles.labelddiv}
              >
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>

            <p
              style={{ color: "white", marginTop: "20px", textAlign: "center" }}
            >
              If new to Licious-{">"}{" "}
              <a
                style={{
                  textDecoration: "underline",
                  fontStyle: "bold",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={navv}
                href="#"
              >
                Click Here
              </a>
            </p>
          </form>
        </div>
        <div>
          <img
            style={{ width: "600px" }}
            src="https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239_960_720.png"
            alt="loginbg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
