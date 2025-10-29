import React, { useState } from "react";
import "./Alert.css"
const Alert = () => {
  const [alert, setalert] = useState(false);

  function showAlert() {
    setalert(true);
  }

  function closeAlert() {
    setalert(false);
  }

  return (
    <div className="show">
      <button onClick={showAlert} className="showAlert">
        Let’s Test Your Curiosity 🤔
      </button>
      {alert && (
        <>
          <div className="Alert">
            <h1>Didn’t I tell you not to click?</h1>
            <button onClick={closeAlert}>close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Alert;
