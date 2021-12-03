import React from "react";
import { loginUrl } from "../../spotify";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__button">
        <a href={loginUrl}>
          Login
          <img className="logo" src="spotify_logo.png" alt="login" />
        </a>
      </div>
    </div>
  );
}

export default Login;
