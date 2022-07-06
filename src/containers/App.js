import * as React from 'react';
import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, Toolbar, Box, AppBar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link } from '@mui/material/';
import { Menu, ChevronLeft, Notifications } from '@mui/icons-material/';
import Chart from '../components/Chart';
import ControlPanel from '../components/ControlPanel';

const initialChartState = {
  revision: 0,
  chartName: '',
  ticker1: 'SPY',
  chartXValues1: [],
  chartYValues1: [],
  tracerName1: '',
  ticker2: '',
  chartXValues2: [],
  chartYValues2: [],
  tracerName2: [],
  period: 'monthly'
};


function App() {
  const [chartState, setChartState] = React.useState(initialChartState);
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          Inflationometer
        </h1>

      </header> */}

      <body className="App-body">
          <ControlPanel chartState = {chartState} setChartState = {setChartState} />
          <Chart chartState = {chartState} setChartState = {setChartState} />

      </body>
    </div>
  );
}

export default App;
