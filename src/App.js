import React, { useState, useEffect } from 'react'
import Moment from 'moment'

import Summary from './components/Summary'
import DataTable from './components/DataTable'

Moment.locale('en')

function App() {
  const [history, setHistory] = useState({})
  const [currentData, setCurrentData] = useState([])
  const [lastData, setLastData] = useState([])
  const [lastRefreshDate, setLastRefreshDate] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.rootnet.in/covid19-in/stats/history')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setLastRefreshDate(Moment(data.lastRefreshed).format('LLLL'))
          setHistory(data.data)
          setIsLoading(false)
        }
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setCurrentData(history[history.length - 1])
    setLastData(history[history.length - 2])
  }, [history])

  return (
    <div className="container mx-auto m-4">
      <h1 className="font-serif font-bold text-3xl md:text-5xl text-center">
        COVID-19 India Tracker
      </h1>
      {isLoading ? (
        <h2 className="text-3xl text-center mx-auto mt-20">Loading...</h2>
      ) : (
        <div>
          <h2 className="text-center mx-auto mt-2">
            Data refreshed last on{' '}
            <span className="font-serif px-2 py-1 bg-gray-200 rounded inline-block">
              {lastRefreshDate}
            </span>
            <Summary summary={currentData.summary} />
          </h2>
          <DataTable
            currentData={currentData.regional}
            lastData={lastData.regional}
          />
        </div>
      )}
    </div>
  )
}

export default App
