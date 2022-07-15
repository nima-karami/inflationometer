import React, { useEffect } from 'react';
import './Chart.css';
import Plot from 'react-plotly.js';

const initialChartState = {
    chartName: '',
    interval: 'monthly',
    ticker1: '',
    chartXValues1: [],
    chartYValues1: [],
    tracerName1: '',
    ticker2: '',
    chartXValues2: [],
    chartYValues2: [],
    tracerName2: [],
  };


function ChartEconIndicator ( {indicator} ) {
    const [chartState, setChartState] = React.useState(initialChartState);
    console.log('indicator:', indicator)
    
//Need to finish this function to read data from files or a personal API
function readEconData (symbol) {
    
}

function fetchEconData_IEX (symbol) {
    const API_KEY = 'pk_2b717dfe67a243b69e843f2c32aa9853';
    const API_TEST_KEY = 'Tpk_a6644a5d84174727ac166958b0bcc0b3';
    let test = 'https://cloud.iexapis.com/stable/time-series/ECONOMIC/CPIAUCSL/?from=1950-01-01&token=pk_2b717dfe67a243b69e843f2c32aa9853'
    let API_Call = `https://cloud.iexapis.com/stable/stock/IBM/financials?token=${API_KEY}&period=annual`;
    let API_Test_Call = `https://sandbox.iexapis.com/stable/time-series/ECONOMIC/${symbol}/?from=1950-01-01&token=${API_TEST_KEY}`;
    
    fetch(API_Test_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log('IEX API CALL DATA: ', data);
            }
        )
}

  // Fetch monthly values of Consumer Price Index
  const fetchEconData_AV = (symbol) => {
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

    let API_Call = `https://www.alphavantage.co/query?${API_Call_functions[symbol]}&apikey=${API_KEY}`;
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
                console.log('Alpha Vantage API Call data:', data);
                for (var i in data['data']) {
                    let obj = data['data'][i];
                    xValues.push(obj['date']);
                    yValues.push(obj['value']);
                }

                setChartState({
                    ...chartState,
                    ticker1: indicator,
                    chartXValues1: xValues,
                    chartYValues1: yValues,
                    chartName1: data['name']
                });
            }
        )
        
  }

    useEffect(() => {
        fetchEconData_AV(indicator);
        fetchEconData_IEX();
        console.log('Chart.js Chart State:', chartState);
    }, [])
    // 
    
    
    return (
        <div className='chart-container'>
          <div className='chart-header'>
              <h4>{chartState.ticker1}   Period: {chartState.period}  Last price: {chartState.chartYValues1[0]}</h4>
          </div>
  
          <div className='chart-body'>
              <Plot
                  data={[
                      {
                          x: chartState.chartXValues1,
                          y: chartState.chartYValues1,
                          name: chartState.tracerName1,
                          type: 'scatter',
                          mode: 'lines',
                          marker: {color: 'green'},
                      },
                      {
                          x: chartState.chartXValues2,
                          y: chartState.chartYValues2,
                          name: chartState.tracerName2,
                          type: 'scatter',
                          mode: 'lines',
                          // fill: 'tozeroy',
                          // fillcolor :'rgba(120, 120, 120, 0.4)',
                          marker: {color: 'red'}, 
                      }
                  ]}
                  revision= {chartState.revision}
                  layout= { {width: 600, height: 400, title: '', showlegend: true} }
                  config= { {displaylogo: false} }
          
              />
          </div>
        </div>
    );
} 

export default ChartEconIndicator;
