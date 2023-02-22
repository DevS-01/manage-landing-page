import React from 'react'
import {intro} from "./index"

export default function Stats() {
  return (
    <div className='stats'>

      <section className='stats-info'>
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day to day tasks
            while keeping the larger team goals in view.
        </p>
        <button className='btn'>Get Started</button>
      </section>

        <img src={intro} alt='intro' className='intro-img'/>
    </div>
  )
}
