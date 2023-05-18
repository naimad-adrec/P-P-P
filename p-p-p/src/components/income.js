import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './income.css'

const income = () => {
  return (
    <div className='income'>
        <h1 className="title">Income</h1>
        <div className="donuts">
            <div className='budgetChart'>
                <PieChart
            data={[
                { title: 'Savings', value: 40, color: '#E38627' },
                { title: 'Food', value: 25, color: '#C13C37' },
                { title: 'Personal', value: 20, color: '#C13C37' },
                { title: 'Transportation', value: 5, color: '#C13C37' },
                { title: 'Medical', value: 5, color: '#C13C37' },
                { title: 'Housing', value: 5, color: '#C13C37' },
            ]}
                />
            </div>
        </div>
    </div>
  )
}

export default income