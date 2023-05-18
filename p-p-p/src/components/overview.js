import React from 'react'
import {donutData} from '../data/donutData';
import donut from './donut'

const overview = () => {
  return (
    <div>
    <h1 className="title">Overview</h1>
    <div className="donuts">
        {data.map((donut, index) => (
            <donut category={donut.category} savings={donut.savings} percentage={donut.percentage} key={index}/>
        ))}
    </div>
</div>
  )
}

export default overview