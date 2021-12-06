import React from "react";
import { useStateValue } from "../../DataLayer";
import "./LogOut.css";
function LogOut() {
  const [, dispatch] = useStateValue();

  const removeTokenhandler = () => {
    dispatch({
      type: "REMOVE_TOKEN",
    });
  };
  return (
    <div className="logout">
      <button onClick={removeTokenhandler}>Log Out</button>
    </div>
  );
}

export default LogOut;
