import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition = {type:'spring', duration: '3'}
    const mobile= window.innerWidth<=768?true:false;
  return (
    <div className='hero' id='home'>
{/* <div className="blur blur-f-2"></div> */}
        <div className="blur blur-h"></div>
        
        <div className="left-h">
        <div className="blur blur-f-1"></div>
        
            <Header />
            {/* The best add */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile?'178px':'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
                ></motion.div>
                <span>Product Hunt
                    #1 Product of the Day</span>
            </div>
            


            {/* Hero heading */}
            <div className="hero-text">
               <div>
                <span className='stroke-text'>Boost your customer </span>
                <br/>
                <span>support productivity with </span>
               </div>
               <div>
                <span>ChatGPT-4</span>
                </div>
               <div>
                <span>
                Smart chatbot based on the latest AI technology, that talks like a human, and creates CTA for your customers.
                </span>
               </div>
            </div>

            {/* Figures */}

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={92} postFix='%'></NumberCounter>
                    </span>
                    <span>Average response<br/> accuracy</span>
                </div>
                <div>
                    <span><NumberCounter end={88} preFix='+' postFix='%'></NumberCounter></span>
                    <span>Agent productivity</span>
                </div>
                <div>
                    <span><NumberCounter end={3} postFix='x'></NumberCounter></span>
                    <span>Reduce resolution times<br/>for general questions</span>
                </div>
            </div>

            {/* Heero buttons */}
            <div className="hero-buttons">
                <button className="btn">Free Trial</button>
                {/* <button className="btn">Learn More</button> */}
            </div>
        </div>

        {/* Right Side */}
        <div className="right-h">
            <button className='btn'>Contact Sales</button>


            <img src={hero_image} alt="" className='hero-img'/>
          
        </div>
    </div>
  )
}

export default Hero