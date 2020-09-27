import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'

import Chart from './Chart'

const ChartInfo = ({ history }) => {
  let fullData = {
    totalConfirmed: [],
    discharged: [],
    deaths: [],
    dates: [],
  }
  const regionData = {}
  history.forEach(data => {
    fullData = {
      totalConfirmed: [...fullData.totalConfirmed, data.summary.total],
      discharged: [...fullData.discharged, data.summary.discharged],
      deaths: [...fullData.deaths, data.summary.deaths],
      dates: [...fullData.dates, format(new Date(data.day), 'dd MMM')],
    }

    data.regional.forEach(region => {
      const loc = region.loc.replace('#', '')
      if (regionData[loc] === undefined) {
        regionData[loc] = {
          totalConfirmed: [],
          discharged: [],
          deaths: [],
          dates: [],
        }
      }
      regionData[loc] = {
        totalConfirmed: [
          ...regionData[loc].totalConfirmed,
          region.totalConfirmed,
        ],
        discharged: [...regionData[loc].discharged, region.discharged],
        deaths: [...regionData[loc].deaths, region.deaths],
        dates: [...regionData[loc].dates, format(new Date(data.day), 'dd MMM')],
      }
    })
  })

  const [state, setState] = useState('India')
  const [chartData, setChartData] = useState(fullData)

  useEffect(() => {
    if (state === 'India') {
      setChartData(fullData)
    } else {
      setChartData(regionData[state])
    }
    // eslint-disable-next-line
  }, [state])

  return (
    <div className="mt-8 mx-auto text-center">
      <h2 className="font-serif font-bold text-2xl">COVID-19 Trends</h2>
      <form className="mt-2">
        <select onChange={e => setState(e.target.value)}>
          <option value="India">India</option>
          {Object.keys(regionData)
            .sort()
            .map(stateName => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
        </select>
      </form>
      <Chart data={chartData} />
    </div>
  )
}

export default ChartInfo
