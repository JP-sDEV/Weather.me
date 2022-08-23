// @ts-nocheck

import React, { useRef, useContext } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import {AppContext, StoreContext} from '../Context/global'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.family = "'Press Start 2P'"
ChartJS.defaults.color = 'black'


type Props = {}

const WChart = (props: Props) => {
  const chartRef = useRef<ChartJS>(null);

  const {chartData, option} = useContext(AppContext) as StoreContext
  
  const labels = chartData.time

  const selectColor = () => {
    if (option === "temp") {
      return 'rgb(255, 99, 132)'
    } else if (option === "precip") {
      return 'rgb(33, 33, 204)'
    } else {
      return 'rgb(34, 181, 52)'
    }
  }

  const optionData = {
    labels,
    datasets:[
      {
        label: option![0].toUpperCase() + option!.slice(1).toLowerCase(),
        data: `chartData.${option}`,
        borderColor: selectColor(),
        backgroundColor: selectColor()
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        },
      tooltip: {
        callbacks: {
          label: function(context: any) {
              let label = context.dataset.label || '';
  
              if (label) {
                  label += ': ';
              }
              if (context.parsed.y !== null && context.dataset.label == "temp")  {
                  label += `${context.parsed.y}°C`

              }
  
              if (context.parsed.y !== null  && context.dataset.label == "precip") {
                label += `${context.parsed.y}mm`
              }
  
            if (context.parsed.y !== null  && context.dataset.label == "wind") {
              label += `${context.parsed.y}km/h`
            }
              return label;
          }
        }
      },   
    },
  
    scales: {
      y: {
        title: {
          display: true,
          text: function() {
            let label =  '';

            if (label) {
                label += ': ';
            }
            if (option == "temp")  {
                label += "Temp(°C)"
            }

            if ( option == "precip") {
              label += `Precip.(mm)`
            }

          if ( option == "wind") {
            label += `Wind(km/h)`
          }
            return label;
          },
        }
      },
      x: {
        title: {
          display: true,
          text: "Time",
          padding: 0
        },
        ticks: {
          padding:1
        }
      }
      
    },
    
  };

  return (
    <div className='m-auto h-full w-full md:w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/3'>
       <Chart type="line" options={options} data={optionData}  ref={chartRef} />
    </div>
  )
}

export default WChart