// BarChart.js

import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      const maxValueIndex = data.values.indexOf(Math.max(...data.values));
      
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Data',
            data: data.values,
            backgroundColor: data.values.map((value, index) =>
              index === maxValueIndex ? 'rgba(90, 45, 254, 0.6) ' : 'rgba(247, 174, 252, 0.2)'
            ),
            borderColor: data.values.map((value, index) =>
              index === maxValueIndex ? 'rgba(0, 0, 0, 0.2)' : 'rgba(75, 192, 192, 1)'
            ),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Value'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas className="border bg-white" ref={chartContainer} style={{ maxWidth: '800px', maxHeight: '200px' }} />;
};

export default BarChart;
