import React from 'react'

import DataTableRow from './DataTableRow'

const DataTable = ({ currentData, lastData }) => {
  return (
    <>
      <table className="table-auto max-w-xl mx-auto mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2 font-serif">State / UT</th>
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
                dischargedDiff:
                  currentRegionData.discharged - lastData[index].discharged,
                deathsDiff: currentRegionData.deaths - lastData[index].deaths,
              }}
            />
          ))}
        </tbody>
      </table>
      <ul className="max-w-md mx-auto mt-2 text-center">
        <li>
          <span className="font-bold text-blue-400 font-serif">A</span> = Active
        </li>
        <li>
          <span className="font-bold text-green-400 font-serif">R</span> =
          Recovered
        </li>
        <li>
          <span className="font-bold text-red-400 font-serif">D</span> =
          Deceased
        </li>
      </ul>
    </>
  )
}

export default DataTable
