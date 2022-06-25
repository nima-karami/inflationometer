import React from "react";
import './ControlPanel.css';
import DropDown from '../components/DropDown';


function ControlPanel({ticker1, ticker2, period, setTicker1, setTicker2, setPeriod}) {
    return (
        <div className="controlpanel-container">
            <h5 className ="controlpanel-header">Inflationometer</h5>
            <DropDown  ticker1 = {ticker1} ticker2 = {ticker2} period = {period} setTicker1 = {setTicker1} setTicker2 = {setTicker2} setPeriod = {setPeriod}/>
        </div>  
    )
}

export default ControlPanel;