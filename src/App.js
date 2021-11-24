import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PropTypes from "prop-types";
import Textform from "./components/Textform/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert/Alert";

function App() {
  const [mode, setMode] = useState("Light");
  const toggle = () => {
    if (mode === "Dark") {
      setMode("Light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled");
    } else {
      setMode("Dark");
      document.body.style.backgroundColor = "darkblue";
      showAlert("Dark Mode has been enabled");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (text) => {
    setAlert({
      text:text
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  };
  return (
    <>
      <Navbar title="Textutils" toggle={toggle} mode={mode} />
      <Alert msg={alert} />
      <div className="container">
        <Textform
          title="Enter the text to analyze below"
          mode={mode}
          alert={showAlert}
        />
      </div>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
};
