import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function DropDown( {ticker1, ticker2, period, setTicker1, setTicker2, setPeriod} ) {

  const handleChange1 = (event) => {
    setTicker1(event.target.value);
    getChartData();
    

  };

  const handleChange2 = (event) => {
    setTicker2(event.target.value);
    getChartData();
  };

  const handleChange3 = (event) => {
    setPeriod(event.target.value);
    getChartData();
  };
  
  const getChartData = () => {
    console.log('ticker1: ', ticker1, '   period: ', period);
    fetchStock(ticker1, period);
  }
  // This function fetches the closing price data of a stock in a set period of time from Alpha Vantage API
  const fetchStock = (stockSymbol, period) => {
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockSymbol}&apikey=${API_KEY}`;
    let xValues = [];
    let yValues = [];
    let chartData = {'xValues': xValues,'yValues': yValues};
    let timeSeries = {
        'daily': 'Time Series (Daily)',
        'weekly': 'Weekly Adjusted Time Series', 
        'monthly': 'Monthly Adjusted Time Series'
    };

    fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                
                for (var key in data[timeSeries[period]]) {
                    xValues.push(key);
                    yValues.push(data[timeSeries[period]][key]['4. close']);
                }
                console.log('chart data: ', chartData);
                return chartData;
            }
        )
  };

  // Fetch monthly values of Consumer Price Index
  const fetchCPI = () => {
    const pointerToThis = this;
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call = `https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=${API_KEY}`;
    let xValues = [];
    let yValues = [];
    
    fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                
                for (var i in data['data']) {
                    let obj = data['data'][i];
                    xValues.push(obj['date']);
                    yValues.push(obj['value']);
                }

                pointerToThis.setState({
                    chartXValues2: xValues,
                    chartYValues2: yValues,
                    chartName2: 'Consumer Price Index'
                });
            }
        )
  }



  return (
    <div>
      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Ticker Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ticker1}
          onChange={handleChange1}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'SPY'}>US SP500</MenuItem>
          <MenuItem value={'DIA'}>Dow Jones Industrial Average</MenuItem>
          <MenuItem value={'BTC'}>Bitcoin</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Ticker Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ticker2}
          onChange={handleChange2}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'M2'}>M2</MenuItem>
          <MenuItem value={'M3'}>M3</MenuItem>
          <MenuItem value={'M4'}>M4</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Period</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={period}
          onChange={handleChange3}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'daily'}>Daily</MenuItem>
          <MenuItem value={'weekly'}>Weekly</MenuItem>
          <MenuItem value={'monthly'}>Monthly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
