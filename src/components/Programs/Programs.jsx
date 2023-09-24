import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/* Headers */}

        <div className="programs-header">
            {/* <span className='stroke-text'>Explore our</span> */}
            <span className='stroke-text'>Features</span>
            {/* <span className='stroke-text'>to shape you</span> */}
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Learn More</span><img src={rightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs