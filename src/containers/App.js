import './App.css';
import Chart from '../components/Chart';
import ControlPanel from '../components/ControlPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Inflationometer
        </h1>

      </header>

      <body className="App-body">
        <ControlPanel/>        
        <Chart/> 
      </body>

    </div>
  );
}

export default App;
