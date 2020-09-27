import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import Wrapper from './components/Wrapper'

function App() {
  const { isLoading, error, data } = useQuery('fetchData', () =>
    axios('https://api.rootnet.in/covid19-in/stats/history')
  )

  return (
    <div className="container mx-auto">
      <header className="text-center mt-4">
        <h1 className="font-serif font-bold text-3xl md:text-5xl">
          COVID-19 India Tracker
        </h1>
      </header>

      <main>
        {isLoading ? (
          <h2 className="text-3xl text-center mx-auto mt-20">Loading...</h2>
        ) : error ? (
          <p className="text-2xl text-center mx-auto mt-8 text-red-400">
            Error occurred on loading data!
          </p>
        ) : (
          <Wrapper data={data.data} />
        )}
      </main>

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
