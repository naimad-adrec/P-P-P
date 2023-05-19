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
                <div className='rows'>
                    <div className='column'>
                        <div class="column">
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
                        </div>
                        <div class="column">
                            <div><p class="text">Savings: 40%</p></div>
                            <div><p class="text">Food: 25%</p></div>
                            <div><p class="text">Personal: 20%</p></div>
                            <p class="text"> Transportation: 5%</p>
                            <p class="text">Medical: 5%</p>
                            <p class="text">Housing: 5%</p>
                        </div>
                    </div>
                    <Banner></Banner>
                </div>
            </div>
        </div>
    </>
  )
}

export default income