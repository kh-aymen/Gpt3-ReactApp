import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="section join">
        <p className="title">
          Do you want to step in to the future before others
        </p>
        <button type="button">Request Early Access</button>
      </div>
      

      <br />

      
      <div className="section footer">
        <div className="left">
          <div className='logo'>
              <p className="subtitle">GPT-3</p>
              <p className="para">Crechterwoord K12 182 DK Alknjkcb,<br /> All Rights Reserved</p>
          </div>
          <div>
            <ul>
              <li>Links</li>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div>
            <ul>
              <li>Company</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Get in touch</li>
              <li>Algerai, Batna, Kechida</li>
              <li>+213675024524</li>
              <li>khalfi.aymen2021@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="para" style={{ 'textAlign': 'center' }}>© 2023 GPT-3. All rights reserved.By Khalfi Aymen</p>
    </>
  )
}

export default Footer