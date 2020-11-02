import React from "react";
import './DrawerToggleButton.css';

function DrawerToggleButton(props) {
    return (
        <button className="toggle-button" onClick={props.drawerToggleButtonClick}>
            <div className="toggle-button_line"/>
            <div className="toggle-button_line"/>
            <div className="toggle-button_line"/>
        </button>)
}

export default DrawerToggleButton;
