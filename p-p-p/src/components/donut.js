import React from 'react'

const donut = ({category, savings, percentage}) => {
  return (
    <div className="donut">
    <p className="donutCategory">{category}</p>
    <p className="donutSavings">{savings}</p>
    <p className="donutPercentage">{percentage}</p>
</div>
  )
}

export default donut