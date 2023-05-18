import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const overview = () => {
  return (
    <div>
    <h1 className="title">Overview</h1>
    <div className="donuts">
        <div className='savingsChart'>
            <PieChart
        data={[
            { title: 'Savings', value: 40, color: '#E38627' },
            { title: 'Spendings', value: 60, color: '#C13C37' },
        ]}
        />
        </div>
    </div>
</div>
  )
}

export default overview