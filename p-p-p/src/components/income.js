import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './income.css'
import Banner from './banner'

const income = () => {
  return (
    <>
        <div className='income'>
            <div>
                    <div className='columnleft'>
                        <div className='rows'>
                            <h1 className="contentTitle">Income</h1>
                        </div>
                        <div className='rows'>
                            <div class="columnleftleft">
                                <PieChart
                                    data={[
                                        { title: 'Savings', value: 40, color: '#bee7e8' },
                                        { title: 'Food', value: 15, color: '#a0d2db' },
                                        { title: 'Personal', value: 14, color: '#7d8cc4' },
                                        { title: 'Transportation', value: 5, color: '#726d88' },
                                        { title: 'Cudis Food', value: 1, color: '#665780' },
                                        { title: 'Housing', value: 25, color: '#594157' },
                                ]}
                                />
                            </div>
                            <div class="columnleftright">
                                <div><p class="text">Savings: 40%</p></div>
                                <div><p class="text">Food: 15%</p></div>
                                <div><p class="text">Personal: 14%</p></div>
                                <p class="text"> Transportation: 5%</p>
                                <p class="text">Cudis Food: 1%</p>
                                <p class="text">Housing: 25%</p>
                            </div>
                        </div>
                    </div>
                    <div className='columnright'>
                    <div className='banner'>
                        <div className='rows'>
                            <h1>Damian Stuff</h1>
                        </div>
                        <div className='rows'>
                            <h1>Naz Stuff</h1>  
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default income