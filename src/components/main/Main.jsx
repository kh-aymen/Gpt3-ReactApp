import React from 'react'
import './main.css'
import Header from '../header/Header'
import Sponsor from '../sponsor/Sponsor'

const Main = () => {
  return (
    <>
      <section className='section mainS'>
        <Header />
        <div className="container flexCenter">
          <div className="flexColSide content">
            <h1 className='title'>
              Let's Build Something
              amazing with GPT-3
              OpenAI
            </h1>
            <p className='para'>
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <form>
              <input type="email" placeholder='Your Email Address' required />
              <button type="submit" className='btn-Sign-up'>Get Started</button>
            </form>
            <div className="people">
              <img src="./assets/people.png" alt="" />
              <p className='para'>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>

          <div className="flexColSide">
            <img src="./assets/ai.png" alt="" />
          </div>
        </div>
      </section>
      <Sponsor/>
    </>
  )
}

export default Main