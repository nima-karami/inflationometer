import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Drawer, Toolbar, Box, AppBar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Link } from '@mui/material/';
import { Menu, ChevronLeft, Notifications } from '@mui/icons-material/';
import Chart from '../components/Chart';
import ControlPanel from '../components/ControlPanel';
import Copyright from '../components/Copyright';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          Inflationometer
        </h1>

      </header> */}

      <body className="App-body">
        <ControlPanel/>        
        <Chart/>
      </body>
      <Copyright/>
    </div>
  );
}

export default App;
