import React from 'react'

import DataTableRow from './DataTableRow'
import DataTableInfo from './DataTableInfo'

const DataTable = ({ currentData, lastData }) => {
  return (
    <>
      <table className="table-auto max-w-xl mx-auto mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2 font-serif">State / UT</th>
            <th className="px-4 py-2 font-serif text-gray-700">C</th>
            <th className="px-4 py-2 font-serif text-blue-400">A</th>
            <th className="px-4 py-2 font-serif text-green-400">R</th>
            <th className="px-4 py-2 font-serif text-red-400">D</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map(currentRegionData => {
            const loc = currentRegionData.loc.replace('#', '')
            let lastRegionData = {
              totalConfirmed: 0,
              discharged: 0,
              deaths: 0,
            }
            for (let i = 0; i < lastData.length; i++) {
              if (lastData[i].loc.replace('#', '') === loc) {
                lastRegionData = lastData[i]
              }
            }
            return (
              <DataTableRow
                key={loc}
                data={{
                  ...currentRegionData,
                  totalConfirmedDiff:
                    currentRegionData.totalConfirmed -
                    lastRegionData.totalConfirmed,
                  totalActiveDiff:
                    currentRegionData.totalConfirmed -
                    currentRegionData.discharged -
                    currentRegionData.deaths -
                    (lastRegionData.totalConfirmed -
                      lastRegionData.discharged -
                      lastRegionData.deaths),
                  dischargedDiff:
                    currentRegionData.discharged - lastRegionData.discharged,
                  deathsDiff: currentRegionData.deaths - lastRegionData.deaths,
                }}
              />
            )
          })}
        </tbody>
      </table>
      <DataTableInfo />
    </>
  )
}

export default DataTable
