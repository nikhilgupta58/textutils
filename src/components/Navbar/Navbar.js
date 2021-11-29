import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import modeStatus from "../../context/modeStatus";
import { useContext } from "react";


export default function NavBar(props) {
  let mode = useContext(modeStatus);

  mode = mode.mode;
  return (
    <>
      <nav className={`nav-container nav-${mode}`}>
        <div className="item1">
          <Link to="/" className={`item ${mode}`}>
            {props.title}
          </Link>
          <Link to="/" className={`item item2 ${mode}`}>
            Home
          </Link>
        </div>
        <button onClick={props.toggle} className={`item item3 ${mode}`}>
          Enable {mode === "Light" ? "Dark" : "Light"}Mode
        </button>
      </nav>
    </>
  );
}
