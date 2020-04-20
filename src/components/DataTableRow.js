import React from 'react'

const DataTableRow = ({ data }) => {
  const currentActive = data.totalConfirmed - data.discharged - data.deaths

  return (
    <tr>
      <td className="border px-2 py-1">{data.loc}</td>
      <td className="border px-2 py-1 font-mono">
        {currentActive}
        {data.totalActiveDiff !== 0 && (
          <span
            className={
              'text-sm ml-1 ' +
              (data.totalActiveDiff > 0 ? 'text-green-400' : 'text-red-400')
            }
          >
            {(data.totalActiveDiff > 0 ? '↑' : '↓') +
              Math.abs(data.totalActiveDiff)}
          </span>
        )}
      </td>
      <td className="border px-2 py-1 font-mono">
        {data.discharged}
        {data.dischargedDiff !== 0 && (
          <span
            className={
              'text-sm ml-1 ' +
              (data.dischargedDiff > 0 ? 'text-green-400' : 'text-red-400')
            }
          >
            {(data.dischargedDiff > 0 ? '↑' : '↓') +
              Math.abs(data.dischargedDiff)}
          </span>
        )}
      </td>
      <td className="border px-2 py-1 font-mono">
        {data.deaths}
        {data.deathsDiff !== 0 && (
          <span
            className={
              'text-sm ml-1 ' +
              (data.deathsDiff > 0 ? 'text-green-400' : 'text-red-400')
            }
          >
            {(data.deathsDiff > 0 ? '↑' : '↓') + Math.abs(data.deathsDiff)}
          </span>
        )}
      </td>
    </tr>
  )
}

export default DataTableRow
