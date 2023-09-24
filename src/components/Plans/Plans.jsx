import React from 'react';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plan.css'
const Plans = () => {
  return (
    <div className="plans-container" id='plan'>

        <div className='blur blur-p-1'></div>
        <div className='blur blur-p-2'></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>Pricing plans</span>
            {/* <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span> */}
        </div>
            
        {/* Plans Cards */}

        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* <div><span>See more benefits -{'>'} </span></div> */}
                    <button className='btn'>Free Trial</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans