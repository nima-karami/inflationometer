import React from "react";
import './ControlPanel.css';
import DropDown from '../components/DropDown';
import Copyright from "./Copyright";

function ControlPanel( {chartState, setChartState} ) {
    return (
        <div className="controlpanel-container">
            <h5 className ="controlpanel-header">Inflationometer</h5>
            <DropDown  chartState = {chartState} setChartState = {setChartState} />
            <p>
                ticker1: {chartState.ticker1},
                ticker2: {chartState.ticker2},
                period: {chartState.period}
            </p>
            <Copyright/>
        </div>  
    )
}

export default ControlPanel;