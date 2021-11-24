import React from "react";
import './Navbar.css'

export default function NavBar(props) {
  return (
    <>
    <nav className={`nav-container nav-${props.mode}`}>
        <div className="item1">
          <a href="/" className={`item ${props.mode}`}>{props.title}</a>
          <a href="/" className={`item item2 ${props.mode}`}>Home</a>
        </div>
        <button onClick={props.toggle} className={`item item3 ${props.mode}`}>Enable {props.mode==='Light'?'Dark':'Light'}Mode</button>
    </nav>
    </>
  );
}
