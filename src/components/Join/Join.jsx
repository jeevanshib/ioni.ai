import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css'
const Join = () => {
    const form= useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gyoqmlk', 'template_8f092qe', form.current, 'eDRwYdQYUNXcEeOPB')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Start your</span>
                <span>  AI journey</span>
            </div>
            <div>
                <span> with us!</span>
                {/* <span className='stroke-text'> Today</span> */}
            </div>
        </div>
        <div className="right-j">
        <button className='btn btn-j'>Join Us</button>
          
        </div>
    </div>
  )
}

export default Join