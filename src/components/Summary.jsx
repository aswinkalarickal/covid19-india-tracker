import React from 'react'

import SummaryCard from './SummaryCard'

const Summary = ({ summary }) => {
  return (
    <div className="text-center sm:flex mx-auto mt-2 justify-center">
      <SummaryCard color="gray-700" name="CONFIRMED" count={summary.total} />
      <SummaryCard
        color="blue-400"
        name="ACTIVE"
        count={summary.total - summary.discharged - summary.deaths}
      />
      <SummaryCard
        color="green-400"
        name="RECOVERED"
        count={summary.discharged}
      />
      <SummaryCard color="red-400" name="DECEASED" count={summary.deaths} />
    </div>
  )
}

export default Summary
