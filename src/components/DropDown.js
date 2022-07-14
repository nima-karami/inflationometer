import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function DropDown() {
    
    const handleChange1 = (event) => {
        let newTicker = event.target.value;
        
       
    console.log('handle change chart State: ', chartState);
  };

  const handleChange2 = (event) => {
    let newIndicator = event.target.value;
    
  };

  const handleChange3 = (event) => {

    
  };
  
  const getChartData = () => {
    console.log('ticker1: ', chartState.ticker1, '   period: ', chartState.period);
    let chartData = fetchStock(chartState.ticker1, chartState.period);
    return chartData;
  }

  // This function fetches the closing price data of a stock in a set period of time from Alpha Vantage API
 function fetchStock(stockSymbol, period) {
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call_functions = {
        daily: 'TIME_SERIES_DAILY',
        weekly: 'TIME_SERIES_WEEKLY_ADJUSTED',
        monthly: 'TIME_SERIES_MONTHLY_ADJUSTED'
    }
    let API_Call = `https://www.alphavantage.co/query?function=${API_Call_functions[period]}&symbol=${stockSymbol}&apikey=${API_KEY}`;
    let xValues = [];
    let yValues = [];
    let timeSeries = {
        'daily': 'Time Series (Daily)',
        'weekly': 'Weekly Adjusted Time Series', 
        'monthly': 'Monthly Adjusted Time Series'
    };
   
    console.log ('API CALL: ', API_Call);
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
                
                setChartState({
                    ...chartState,
                    ticker1: stockSymbol,
                    chartXValues1: xValues,
                    chartYValues1: yValues,
                });
                
            }
        )
  };

  // Fetch monthly values of Consumer Price Index
  const fetchIndicator = (indicator) => {
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call_functions = {
        'GDP': 'function=REAL_GDP&interval=quarterly',
        'GDP per Capita': 'function=REAL_GDP_PER_CAPITA',
        'Federal Funds Rate': 'function=FEDERAL_FUNDS_RATE&interval=monthly',
        'CPI': 'function=CPI&interval=monthly',
        'Inflation': 'function=INFLATION',
        'Inflation Expecation': 'function=INFLATION_EXPECTATION',
        'Consumer Sentiment': 'function=CONSUMER_SENTIMENT',
        'Retail Sales': 'function=RETAIL_SALES',
        'Durable Goods Orders': 'function=DURABLES',
        'Unemployment Rate': 'function=UNEMPLOYMENT'
    }

    let API_Call = `https://www.alphavantage.co/query?${API_Call_functions[indicator]}&apikey=${API_KEY}`;
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

                setChartState({
                    ...chartState,
                    ticker2: indicator,
                    chartXValues2: xValues,
                    chartYValues2: yValues,
                    chartName2: data['name']
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
          value={chartState.ticker1}
          onChange={handleChange1}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'SPY'}>US SP500</MenuItem>
          <MenuItem value={'DIA'}>Dow Jones Industrial Average</MenuItem>
          <MenuItem value={'AAPL'}>Apple</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Ticker Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={chartState.ticker2}
          onChange={handleChange2}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'GDP'}>GDP</MenuItem>
          <MenuItem value={'GDP per Capita'}>GDP per Capita</MenuItem>
          <MenuItem value={'CPI'}>CPI</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Period</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={chartState.period}
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
