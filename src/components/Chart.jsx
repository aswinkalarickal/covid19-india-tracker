import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ data }) => {
  const defaultOptions = {
    fill: false,
    lineTension: 0.1,
    pointBackgroundColor: '#fff',
    pointHoverBorderColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  }

  const lineData = {
    labels: data.dates,
    datasets: [
      {
        ...defaultOptions,
        label: 'Confirmed',
        borderColor: 'rgba(74,85,104,1)',
        pointBorderColor: 'rgba(74,85,104,1)',
        pointHoverBackgroundColor: 'rgba(74,85,104,1)',
        data: data.totalConfirmed,
      },
      {
        ...defaultOptions,
        label: 'Recovered',
        borderColor: 'rgba(104,211,145,1)',
        pointBorderColor: 'rgba(104,211,145,1)',
        pointHoverBackgroundColor: 'rgba(104,211,145,1)',
        data: data.discharged,
      },
      {
        ...defaultOptions,
        label: 'Deceased',
        borderColor: 'rgba(252,129,129,1)',
        pointBorderColor: 'rgba(252,129,129,1)',
        pointHoverBackgroundColor: 'rgba(252,129,129,1)',
        data: data.deaths,
      },
    ],
  }

  return (
    <div className="mt-2 max-w-xl mx-auto">
      <Line data={lineData} />
    </div>
  )
}

export default Chart
