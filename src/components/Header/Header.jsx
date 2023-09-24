import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-scroll';
const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const[menuOpened, setMenuOpened]= useState(false);
  return (
    <div className='Header'>
        <img src={Logo} alt="" className='logo'/>
        {menuOpened===false && mobile===true ? (
          <div
          style={{backgroundColor:'var(--appColor)',
          padding:'0.5rem',
          borderRadius:'5px',
        marginLeft: '24.5rem',
      marginTop:'-3rem',
      position: 'fixed'}}
          onClick={()=>setMenuOpened(true)}
          >
          </div>
        ) : (
        <ul className='header-menu'>
        <div className="blur blur-f-2"></div>
        <li onClick={()=>setMenuOpened(false)}>
          <Link>Features</Link>
        </li>
        <li><Link>Resources</Link></li>
      <li><Link
        onClick={()=>setMenuOpened(false)}
        to='reasons'
        span={true}
        smooth={true}
        >Pricing</Link></li>
        <li><Link>FAQ</Link></li>
        

    </ul>
    )}
      
    </div>
  );
;}

export default Header