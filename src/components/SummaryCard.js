import React from 'react'

const SummaryCard = ({ color, name, count }) => {
  return (
    <div
      className={
        'flex-1 md:max-w-xs m-4 rounded overflow-hidden shadow-lg py-4 border-t-4 border-' +
        color
      }
    >
      <h2 className={'font-serif text-xl text-' + color}>{name}</h2>
      <div className="text-3xl font-mono">{count}</div>
    </div>
  )
}

export default SummaryCard
