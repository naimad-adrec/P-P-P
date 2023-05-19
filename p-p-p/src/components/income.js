import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './income.css'
import { MDBBtn } from "mdb-react-ui-kit";

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
                                <div class='Legend'>
                                <div><p class="Savingstext">Savings: 40%</p></div>
                                <div><p class="Foodtext">Food: 15%</p></div>
                                <div><p class="Personaltext">Personal: 14%</p></div>
                                <p class="Transportationtext"> Transportation: 5%</p>
                                <p class="Cudistext">Cudis Food: 1%</p>
                                <p class="Housingtext">Housing: 25%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='columnright'>
                    <div className='banner'>
                        <div className='rows'>
                            <div className='rows'>
                                <div className='columnleft'>
                                    <div>
                                        <h2 className='bannerIncomeTitle'>Income Sources</h2>
                                    </div>
                                    <div className='rows'><p className='bannerIncomeText'>Unity Developer:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Parents:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>BHTS Prize Money:</p></div>
                                </div>
                                <div className='columnright'>
                                    <h2 className='bannerAmountTitle'>Amount</h2>
                                    <div className='rows'><p className='bannerAmountText'>$4000</p> </div>
                                    <div className='rows'><p className='bannerAmountText'>$999</p></div>
                                    <div className='rows'><p className='bannerAmountText'>$1</p></div>
                                </div>
                            </div>
                            <div className='rows'>
                                <MDBBtn className="square-md">Add Income Source</MDBBtn>
                            </div>
                        </div>
                        <div className='rows'>
                            <div className='rows'>
                                <h2 className='bannerIncomeTitle'>Categories</h2>
                            </div>
                            <div className='rows'>
                            <div className='columnleft'>
                                    <div className='rows'><p className='bannerIncomeText'>Savings:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Food:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Personal:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Transportation:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Cudis' Food:</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>Housing:</p></div>
                                </div>
                                <div className='columnright'>
                                    <h2 className='bannerAmountTitle'></h2>
                                    <div className='rows'><p className='bannerIncomeText'>40%</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>15%</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>14%</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>5%</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>1%</p></div>
                                    <div className='rows'><p className='bannerIncomeText'>25%</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default income