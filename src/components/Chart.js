import React from 'react';
import './Chart.css';

import Plot from 'react-plotly.js';


function Chart ( {chartState, setChartState} ) {
    console.log('Chart.js Chart State:', chartState);
    return (
        <div className='chart-container'>
          <div className='chart-header'>
              <h4>Stock {chartState.ticker1}</h4>
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
                  layout={ {width: 1080, height: 720, title: '', showlegend: true} }
                  config= { {displaylogo: false} }
          
              />
          </div>
        </div>
    );
} 

export default Chart;
