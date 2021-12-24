import React from "react";
import { useStateValue } from "../../DataLayer";
import "./LogOut.css";
function LogOut() {
  const [, dispatch] = useStateValue();

  const removeTokenhandler = () => {
    dispatch({
      type: "REMOVE_TOKEN",
    });
    localStorage.removeItem("token");
  };
  return (
    <div className="logout">
      <button onClick={removeTokenhandler}>Log Out</button>
    </div>
  );
}

export default LogOut;
