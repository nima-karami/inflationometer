import React from 'react';
import './Chart.css';

import Plot from 'react-plotly.js';


function Chart ( {chartState, setChartState} ) {
    console.log('Chart.js Chart State:', chartState);
    let chartXValues1, chartYValues1 = 0;
    React.useEffect(() => {
        // setInterval(updateChartState, 1000);
    });

    const updateChartState = () => {
        console.log('update chart');
        chartXValues1 = chartState.chartXValues1;
        chartYValues1 = chartState.chartYValues1
    }

    return (
        <div className='chart-container'>
          <div className='chart-header'>
              <h4>Stock {chartState.ticker1}  Chart Y Values: {chartState.chartYValues1[0]}</h4>
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
                  layout= { {width: 1080, height: 720, title: '', showlegend: true} }
                  config= { {displaylogo: false} }
          
              />
          </div>
        </div>
    );
} 

export default Chart;
