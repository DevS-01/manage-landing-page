import React from 'react'
import {ali} from "./index"
import {anisha} from "./index"
import {richard} from "./index"
import {shanai} from "./index"

export default function Testimonial() {

  return (
    <div className='testimonial'>
      <h2>What they've said?</h2>

      <div className='person'>

        <section className='person-1'>
            <img src={anisha} alt='Anisha Li' className='anisha-img'/>
            <h4>Anisha Ali</h4>
            <p>"Manage has supercharged our team's workflow. The ability to maintain
              visibility on larger milestones at all times keeps everyone motivated." 
            </p>
        </section>
          
        <section className='person-2'>
          <img src={ali} alt='Ali Bravo' className='ali-img'/>
          <h4>Ali Bravo</h4>
          <p>"We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and everyone
            is much more focused."
          </p>
        </section>
          
        <section className='person-3'>
          <img src={richard} alt='Richard Watts' className='richard-img'/>
          <h4>Richard Watts</h4>
          <p>"Manage allows us to provide structure and process. It keeps us
            organised and focused. I can't stop recommending them to everyone I
            talk to!"
          </p>
        </section>
          
        <section className='person-4'>
          <img src={shanai} alt='Shanai Gough' className='shanai-img'/>
          <h4>Shanai Gough</h4>
          <p>"Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without being
            intrusive." 
          </p>
        </section>

      </div>

      <button className='btn'>Get Started</button>
    </div>
  )
}
