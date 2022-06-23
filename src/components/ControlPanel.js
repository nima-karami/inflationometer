import React from "react";
import './ControlPanel.css';
import DropDown from '../components/DropDown';


function ControlPanel() {
    return (
        <div className="controlpanel-container">
            <h5 className ="controlpanel-header">Inflationometer</h5>
            <DropDown/>
        </div>  
    )
}

export default ControlPanel;