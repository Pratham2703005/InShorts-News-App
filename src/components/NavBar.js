import React from 'react'
import './NavBar.css';
import HamDrawer from './HamDrawer';

const NavBar = ({setcategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamDrawer setcategory={setcategory}/>
        </div>
        <img 
        src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' height="120%"
        style={{cursor: "pointer"}}
        alt="logo"/>

      
    </div>
  )
}

export default NavBar
