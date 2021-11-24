import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./Textform.css";

export default function Textform(props) {
  const [text, setText] = useState("");
  function handleClickEvent() {
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("The text has been converted to Uppercase");
  }

  function handleLoClickEvent() {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("The text has been converted to Lowercase");
  }

  function handleClearText() {
    setText("");
    props.alert("The text has been cleared");
  }

  function handleOnChangeEvent(event) {
    setText(event.target.value);
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
    props.alert("The text has been copied");
  }

  function handleRemove() {
    let t = text.split(/[ ]+/);
    setText(t.join(" "));
    props.alert("Extra space has been removed from the text");
  }

  return (
    <>
      <div className="text-container">
        <h1 className={`text-${props.mode}`}>{props.title}</h1>
        <textarea
          onChange={handleOnChangeEvent}
          value={text}
          className={`textform-textarea textarea-${props.mode}`}
          rows="8"
        ></textarea>
        <div className="op-container">
          <button onClick={handleClickEvent}>Convert to Uppercase</button>
          <button onClick={handleLoClickEvent}>Convert to Lowercase</button>
          <button onClick={handleClearText}>Clear Text</button>
          <button onClick={handleCopy}>Copy Text</button>
          <button onClick={handleRemove}>Remove Extra Space</button>
        </div>
        <h2 className={`text-${props.mode}`}>Your text summary</h2>
        <p className={`text-${props.mode}`}> 
          {text.split(" ").filter((e) => {return e.length!==0}).length} words and {text.length} characters
        </p>
        <p className={`text-${props.mode}`}>{text.split(" ").length * 0.008} Minutes read</p>
        <h2 className={`text-${props.mode}`}>Preview</h2>
        <p className={`text-${props.mode}`}>{text}</p>
      </div>
    </>
  );
}
