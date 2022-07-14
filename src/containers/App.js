import * as React from 'react';
import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, Toolbar, Box, AppBar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link } from '@mui/material/';
import { Menu, ChevronLeft, Notifications } from '@mui/icons-material/';
import ControlPanel from '../components/ControlPanel';
import ChartEconIndicator from '../components/ChartEconIndicator';

function App() {
   
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          Inflationometer
        </h1>

      </header> */}

      <body className="App-body">
          <ControlPanel />
          <div className="App-charts-container">
            {/* <ChartEconIndicator indicator = {'GDP'}/>
            <ChartEconIndicator indicator = {'GDP per Capita'}/>
            <ChartEconIndicator indicator = {'Federal Funds Rate'}/> */}
            <ChartEconIndicator indicator = {'CPI'}/>
            {/* <ChartEconIndicator indicator = {'Inflation'}/>
            <ChartEconIndicator indicator = {'Inflation Expecation'}/> */}
            {/* <ChartEconIndicator indicator = {'Consumer Sentiment'}/>
            <ChartEconIndicator indicator = {'Retail Sales'}/>
            <ChartEconIndicator indicator = {'Durable Goods Orders'}/>
            <ChartEconIndicator indicator = {'Unemployment Rate'}/> */}
          </div>
          
      </body>
    </div>
  );
}

export default App;
