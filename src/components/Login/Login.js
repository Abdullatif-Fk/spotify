import React from "react";
import { loginUrl } from "../../spotify";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>
        <div className="login__button">
          Login
          <img className="logo" src="spotify_logo.png" alt="login" />
        </div>
      </a>
    </div>
  );
}

export default Login;
