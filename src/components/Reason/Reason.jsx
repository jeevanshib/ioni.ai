import React from 'react';
import './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import f2 from '../../assets/f3.svg';
import f4 from '../../assets/f4.svg';
import f5 from '../../assets/f5.svg';

const Reason = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className="left-r">
        <img src={image2} alt="" />
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        {/* <img src={image4} alt="" /> */}
        </div>
        <div className='right-r'>
            <span> Three easy steps to get started exploring Ioni</span>
            <div>
                <span className='stroke-text'>How does </span>
                <span>ioni work?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={f2} alt="" />
                        <span>ADD DATA</span>
                        
                        
                    </div>
                    <div>
                        <img src={f4} alt="" />
                        <span>Create AI Assistance</span>
                    </div>
                    <div>
                        <img src={f5} alt="" />
                        <span>Analyze conversations</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Reason