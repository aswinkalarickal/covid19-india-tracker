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
          {currentData.map((currentRegionData, index) => (
            <DataTableRow
              key={index}
              data={{
                ...currentRegionData,
                totalConfirmedDiff:
                  currentRegionData.totalConfirmed -
                  lastData[index].totalConfirmed,
                totalActiveDiff:
                  currentRegionData.totalConfirmed -
                  currentRegionData.discharged -
                  currentRegionData.deaths -
                  (lastData[index].totalConfirmed -
                    lastData[index].discharged -
                    lastData[index].deaths),
                dischargedDiff:
                  currentRegionData.discharged - lastData[index].discharged,
                deathsDiff: currentRegionData.deaths - lastData[index].deaths,
              }}
            />
          ))}
        </tbody>
      </table>
      <DataTableInfo />
    </>
  )
}

export default DataTable
