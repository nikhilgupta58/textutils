import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PropTypes from "prop-types";
import Textform from "./components/Textform/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import modeStatus from "./context/modeStatus";
import AlertContext from "./context/AlertContext";

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
      text: text,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <Router>
      <modeStatus.Provider value={{ mode: mode }}>
        <Navbar title="Textutils" toggle={toggle} />
        <AlertContext.Provider value={{ alert, showAlert }}>
          <Alert />{" "}
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  <Textform title="Enter the text to analyze below">
                    <h3>Enter the text below</h3>
                  </Textform>
                </div>
              }
            />
          </Routes>
        </AlertContext.Provider>
      </modeStatus.Provider>
    </Router>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
};
