import React, { PureComponent } from 'react';
import './Chart.css';

import Plot from 'react-plotly.js';

const initialState = {
  ChartXValues1: [],
  ChartYValues1: [],
  ChartName1: '',
  ChartXValues2: [],
  ChartYValues2: [],
  ChartName2: [],
};

export default class Example extends PureComponent {

  constructor( {ticker1, ticker2, period} ) {
    super( {ticker1, ticker2, period} );
    this.state = initialState;
  }

  componentDidMount() {
    this.fetchCPI();
    this.fetchStock('SPY')
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
                    ChartXValues2: xValues,
                    ChartYValues2: yValues,
                    ChartName2: 'Consumer Price Index'
                });
            }
        )
  }

  


  fetchStock(stockSymbol) {
    const pointerToThis = this;
    const API_KEY = '3NYUROJPFE549POK';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockSymbol}&apikey=${API_KEY}`;
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
                
                for (var key in data['Monthly Adjusted Time Series']) {
                    xValues.push(key);
                    yValues.push(data['Monthly Adjusted Time Series'][key]['4. close']);
                }

                pointerToThis.setState({
                    ChartXValues1: xValues,
                    ChartYValues1: yValues
                });
            }
        )
  }


  render() {
    
    return (
      <div className='chart-container'>
        <div className='chart-header'>
            <h4>Stock</h4>
        </div>

        <div className='chart-body'>
            <Plot
                data={[
                    {
                        x: this.state.ChartXValues1,
                        y: this.state.ChartYValues1,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'green'},
                    },
                    {
                        x: this.state.ChartXValues2,
                        y: this.state.ChartYValues2,
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'red'}, 
                    }
                ]}
                layout={ {width: 1080, height: 720, title: 'A Fancy Plot', showlegend: true} }
                displayLogo = {false}
        
            />
        </div>
      </div>
    );
  }
}
