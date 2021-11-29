import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
import "./Textform.css";
import AlertContext from "../../context/AlertContext";
import modeStatus from "../../context/modeStatus";

export default function Textform(props) {
  const alert = useContext(AlertContext);
  let mode = useContext(modeStatus);
  mode = mode.mode;
  const [text, setText] = useState("");
  const {
    title: mytitle,
    children: mychild,
    mode: mymode,
    ...otherProps
  } = props;
  function handleClickEvent() {
    let newText = text.toUpperCase();
    setText(newText);
    alert.showAlert("The text has been converted to Uppercase");
  }

  function handleLoClickEvent() {
    let newText = text.toLowerCase();
    setText(newText);
    alert.showAlert("The text has been converted to Lowercase");
  }

  function handleClearText() {
    setText("");
    alert.showAlert("The text has been cleared");
  }

  function handleOnChangeEvent(event) {
    setText(event.target.value);
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    alert.showAlert("The text has been copied");
  }

  function handleRemove() {
    let t = text.split(/[ ]+/);
    setText(t.join(" "));
    alert.showAlert("Extra space has been removed from the text");
  }

  return (
    <>
      <div {...otherProps} className="text-container">
        <h1 className={`text-${mymode}`}>{mychild}</h1>
        <textarea
          onChange={handleOnChangeEvent}
          value={text}
          className={`textform-textarea textarea-${mode}`}
          rows="8"
        ></textarea>
        <div className="op-container">
          <button onClick={handleClickEvent}>Convert to Uppercase</button>
          <button onClick={handleLoClickEvent}>Convert to Lowercase</button>
          <button onClick={handleClearText}>Clear Text</button>
          <button onClick={handleCopy}>Copy Text</button>
          <button onClick={handleRemove}>Remove Extra Space</button>
        </div>
        <h2 className={`text-${mode}`}>Your text summary</h2>
        <p className={`text-${mode}`}>
          {
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className={`text-${mode}`}>
          {text.split(" ").length * 0.008} Minutes read
        </p>
        <h2 className={`text-${mode}`}>Preview</h2>
        <p className={`text-${mode}`}>{text}</p>
      </div>
    </>
  );
}
