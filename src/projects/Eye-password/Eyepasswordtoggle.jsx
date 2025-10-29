import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Eyepassword.css"

function Eyepasswordtoggle() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div style={{textAlign:"center"}}>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        className="inputvalue"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={() => setShow(!show)}>
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default Eyepasswordtoggle;
