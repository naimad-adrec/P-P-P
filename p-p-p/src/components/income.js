import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './income.css'
import Banner from './banner'

const income = () => {
  return (
    <>
        <div className='income'>
            <div>
                <div><h1 className="contentTitle">Income</h1></div>
                <div className='budgetChart'>
                    <PieChart
                        data={[
                            { title: 'Savings', value: 40, color: '#bee7e8' },
                            { title: 'Food', value: 25, color: '#a0d2db' },
                            { title: 'Personal', value: 20, color: '#7d8cc4' },
                            { title: 'Transportation', value: 5, color: '#726d88' },
                            { title: 'Medical', value: 5, color: '#665780' },
                            { title: 'Housing', value: 5, color: '#594157' },
                    ]}
                    />
                    <p>Savings: 40%</p>
                    <p>Food: 25%</p>
                    <p>Personal: 20%</p>
                    <p>Transportation: 5%</p>
                    <p>Medical: 5%</p>
                    <p>Housing: 5%</p>
                </div>
            </div>
            <Banner></Banner>
        </div>
    </>
  )
}

export default income