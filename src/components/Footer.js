import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts App made by - 
            <a href="https://www.linkedin.com/in/pratham-israni-a6b672275/" > Pratham Israni</a>
        </span>
        <hr style={{width: "90%"}}/>
        <div className='iconContainer'>
            <a href='https://www.instagram.com/pk2732004/' target='_blank' rel="noreferrer noopener">
            <i className="fa-brands fa-instagram"></i>
            </a>

            <a href='https://github.com/Pratham2703005' target='_blank' rel="noreferrer noopener">
            <i class="fa-brands fa-github"></i>         
            </a>

            <a href='https://x.com/Pratham85477378' target='_blank' rel="noreferrer noopener">
            <i className="fa-brands fa-twitter"></i>
            </a>
        </div>
      
    </div>
  )
}

export default Footer
