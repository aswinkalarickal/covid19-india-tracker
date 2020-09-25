import React, { useState, useEffect } from 'react'
import Moment from 'moment'

import Summary from './components/Summary'
import DataTable from './components/DataTable'
import ChartInfo from './components/ChartInfo'

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
          setLastRefreshDate(Moment(data.lastOriginUpdate).format('LLLL'))
          setHistory(data.data)
          setIsLoading(false)
        }
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setCurrentData(history[history.length - 1])
    setLastData(history[history.length - 2])
  }, [history])

  return (
    <div className="container mx-auto">
      <header className="text-center mt-4">
        <h1 className="font-serif font-bold text-3xl md:text-5xl">
          COVID-19 India Tracker
        </h1>
      </header>

      {isLoading ? (
        <main>
          <h2 className="text-3xl text-center mx-auto mt-20">Loading...</h2>
        </main>
      ) : (
        <main>
          <section id="data-info">
            <h2 className="text-center mx-auto mt-2">
              <>Data updated on </>
              <span className="font-serif px-2 py-1 bg-gray-200 rounded inline-block">
                {lastRefreshDate}
              </span>
            </h2>
          </section>

          <section id="summary">
            <Summary summary={currentData.summary} />
          </section>

          <section id="state-table">
            <DataTable
              currentData={currentData.regional}
              lastData={lastData.regional}
            />
          </section>

          <section id="chart">
            <ChartInfo history={history} />
          </section>
        </main>
      )}

      <footer className="text-center text-sm my-8">
        <p>
          <>Get this project at </>
          <span className="text-gray-500">
            <a href="https://github.com/aswinkalarickal/covid19-india-tracker">
              aswinkalarickal/covid19-india-tracker
            </a>
          </span>
        </p>
        <p>
          <>Data from </>
          <span className="text-gray-500">
            <a href="https://github.com/amodm/api-covid19-in">
              amodm/api-covid19-in
            </a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default App
