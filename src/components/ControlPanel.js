import React from "react";
import './ControlPanel.css';
// import DropDown from '../components/DropDown';
import Copyright from "./Copyright";

function ControlPanel() {
    return (
        <div className="controlpanel-container">
            <h5 className ="controlpanel-header">Inflationometer</h5>
            

            <Copyright/>
        </div>  
    )
}

export default ControlPanel;