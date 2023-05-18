import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const donut = ({category, savings, percentage}) => {
  return (
    <div className="donut">
            <PieChart
    data={[
        { title: 'Savings', value: 40, color: '#E38627' },
        { title: 'Food', value: 15, color: '#C13C37' },
        { title: 'Entertainment', value: 20, color: '#6A2135' },
    ]}
    />
    <p className="donutCategory">{category}</p>
    <p className="donutSavings">{savings}</p>
    <p className="donutPercentage">{percentage}</p>
</div>
  )
}

export default donut