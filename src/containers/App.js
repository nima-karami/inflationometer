import * as React from 'react';
import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, Toolbar, Box, AppBar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link } from '@mui/material/';
import { Menu, ChevronLeft, Notifications } from '@mui/icons-material/';
import Chart from '../components/Chart';
import ControlPanel from '../components/ControlPanel';
import Copyright from '../components/Copyright';


function App() {
  const [ticker1, setTicker1] = React.useState('ticker1');
  const [ticker2, setTicker2] = React.useState('ticker2');
  const [period, setPeriod] = React.useState('daily');
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          Inflationometer
        </h1>

      </header> */}

      <body className="App-body">
          <ControlPanel ticker1 = {ticker1} ticker2 = {ticker2} period = {period} setTicker1 = {setTicker1} setTicker2 = {setTicker2} setPeriod = {setPeriod} />
          <Chart ticker1 = {ticker1} ticker2 = {ticker2} period = {period} />
      </body>
      <Copyright/>
    </div>
  );
}

export default App;
