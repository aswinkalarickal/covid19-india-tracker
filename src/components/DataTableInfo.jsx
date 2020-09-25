import React from 'react'

const DataTableInfo = () => {
  return (
    <ul className="max-w-md mx-auto mt-2 text-center">
      <li>
        <span className="font-bold text-gray-700 font-serif">C</span>
        <> = Confirmed</>
      </li>
      <li>
        <span className="font-bold text-blue-400 font-serif">A</span>
        <> = Active</>
      </li>
      <li>
        <span className="font-bold text-green-400 font-serif">R</span>
        <> = Recovered</>
      </li>
      <li>
        <span className="font-bold text-red-400 font-serif">D</span>
        <> = Deceased</>
      </li>
    </ul>
  )
}

export default DataTableInfo
