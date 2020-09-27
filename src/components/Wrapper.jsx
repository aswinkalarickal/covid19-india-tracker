import React from 'react'
import Moment from 'moment'

import Summary from './Summary'
import DataTable from './DataTable'
import ChartInfo from './ChartInfo'

const Wrapper = ({ data }) => {
  const history = data.data

  return data.success ? (
    <>
      <section id="data-info">
        <h2 className="text-center mx-auto mt-2">
          <>Data updated on </>
          <span className="font-serif px-2 py-1 bg-gray-200 rounded inline-block">
            {Moment(data.lastOriginUpdate).format('LLLL')}
          </span>
        </h2>
      </section>

      <section id="summary">
        <Summary summary={history[history.length - 1].summary} />
      </section>

      <section id="state-table">
        <DataTable
          currentData={history[history.length - 1].regional}
          lastData={history[history.length - 2].regional}
        />
      </section>

      <section id="chart">
        <ChartInfo history={history} />
      </section>
    </>
  ) : (
    <p className="text-2xl text-center mx-auto mt-8 text-red-400">
      Unable to load data!
    </p>
  )
}

export default Wrapper
