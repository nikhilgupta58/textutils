import React from 'react'
import "./Alert.css"

export default function Alert(props){
    return(
        props.msg &&
        <>
            <div className="alert">
                <p>Success: {props.msg.text}</p>
            </div>
        </>
    );
}