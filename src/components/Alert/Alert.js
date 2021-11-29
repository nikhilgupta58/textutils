import React, { useContext } from "react";
import "./Alert.css";
import AlertContext from "../../context/AlertContext";

export default function Alert(props) {
  const alert = useContext(AlertContext);
  return (
    alert.alert && (
      <>
        <div className="alert">
          <p>Success: {alert.alert.text}</p>
        </div>
      </>
    )
  );
}
