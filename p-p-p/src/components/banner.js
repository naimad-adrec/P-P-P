import React from 'react'
const banner = () => {
  return (
    <div className='banner'>
        <Slider>HELLO</Slider>
        <h2 id='title'>Rectangle banner</h2>
        <p className='content'>This is a rectangle banner.</p>
        <p className='Income Sources'>Income Sources</p>
        <p className='Amount'>Amount</p>
        <p className='Job Name'></p>
        <a className='Sources Link' href='/add'>Click to add source</a>
        <h2 className='Categories'>Categories</h2>
        <p className='Text'>Shopping</p> 
        <p className='Text'>Savings</p>
        <p className='Text'>Food</p>
        <p className='Text'>Personal</p>
        <p className='Text'>Transportation</p>
        <p className='Text'>Medical</p>
        <p className='Text'>Housing</p>
    </div>
  )
}

export default banner