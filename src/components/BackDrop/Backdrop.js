import React from "react";
import './Backdrop.css'

function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.clickBackdrop}/>
    )
}

export default Backdrop;
