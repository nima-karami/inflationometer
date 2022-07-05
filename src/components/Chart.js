import React, { PureComponent } from 'react';
import './Chart.css';

import Plot from 'react-plotly.js';

const initialState = {
  chartXValues1: [],
  chartYValues1: [],
  chartName1: '',
  chartXValues2: [],
  chartYValues2: [],
  chartName2: [],
};


// function Chart ( {ticker1, ticker2, period} ) {
//     const [chartState, setChartState] = React.useState(initialState);
// } 

// export default Chart;

export default class Chart extends PureComponent {

  constructor( {ticker1, ticker2, period} ) {
    super( {ticker1, ticker2, period} );
    const initialState = {
        ticker1: ticker1,
        chartXValues1: [],
        chartYValues1: [],
        chartName1: '',
        ticker2: ticker2,
        chartXValues2: [],
        chartYValues2: [],
        chartName2: [],
        period: period
      };
    this.state = initialState;
  }

  componentDidMount() {
    this.fetchCPI();
    this.fetchStock(this.state.ticker1, 'monthly');
  }

  fetchCPI() {
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

  

// This function fetches the closing price data of a stock in a set period of time from Alpha Vantage API
  fetchStock(stockSymbol, period) {
    const pointerToThis = this;
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockSymbol}&apikey=${API_KEY}`;
    let xValues = [];
    let yValues = [];
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

                pointerToThis.setState({
                    chartXValues1: xValues,
                    chartYValues1: yValues,
                    chartName1: stockSymbol
                });
            }
        )
  }


  render() {
    
    return (
      <div className='chart-container'>
        <div className='chart-header'>
            <h4>Stock {this.ticker1}</h4>
        </div>

        <div className='chart-body'>
            <Plot
                data={[
                    {
                        x: this.state.chartXValues1,
                        y: this.state.chartYValues1,
                        name: this.state.chartName1,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'green'},
                    },
                    {
                        x: this.state.chartXValues2,
                        y: this.state.chartYValues2,
                        name: this.state.chartName2,
                        type: 'scatter',
                        mode: 'lines',
                        // fill: 'tozeroy',
                        // fillcolor :'rgba(120, 120, 120, 0.4)',
                        marker: {color: 'red'}, 
                    }
                ]}
                layout={ {width: 1080, height: 720, title: '', showlegend: true} }
                config= { {displaylogo: false} }
        
            />
        </div>
      </div>
    );
  }
}
