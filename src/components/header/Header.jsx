import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import './header.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="header">
        <div className="navbar flexCenter">
          <p>GPT-3</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What is GPT-3</a></li>
            <li><a href="#">Open IA</a></li>
            <li><a href="#">Case  Studiens</a></li>
            <li><a href="#">Library</a></li>
          </ul>
        </div>

        <div className="buttons flexCenter">
          <button type="button" className='btn-Sign-in'>Sign in</button>
          <button type="button" className='btn-Sign-up'>Sign up</button>
        </div>
      </section>

      <section className='headerResponsvie'>
        <div className="shows">
          <p>GPT-3</p>
          <AiOutlineMenu onClick={() => setOpen(!open)} />
        </div>

        {open ?
          <div className="collaps">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">What is GPT-3</a></li>
              <li><a href="#">Open IA</a></li>
              <li><a href="#">Case  Studiens</a></li>
              <li><a href="#">Library</a></li>
            </ul>
            <div className="buttons flexCenter">
              <button type="button" className='btn-Sign-in'>Sign in</button>
              <button type="button" className='btn-Sign-up'>Sign up</button>
            </div>
          </div>
          :
          ''
        }
      </section>
    </>
  )
}

export default Header