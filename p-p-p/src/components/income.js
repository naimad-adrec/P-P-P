import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './income.css'
import Banner from './banner'

const income = () => {
  return (
    <>
        <div className='income'>
            <div className='content'>
                <div><h1 className="title">Income</h1></div>
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
            <Banner></Banner>
        </div>
    </>
  )
}

export default income