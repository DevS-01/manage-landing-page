import React from 'react'

export default function Keypoints() {
  return (
    <div className='keypoints'>

      <section className='keypoints-qs'>
        <h2>What's different about Manage?</h2>
        <p>Manage provides all the functionality your team needs,
            without the complexity. Our software is tailor-made for
            modern digital project teams.
        </p>
      </section>

      <section className='points'>

        <div className='firstPoint'>
            <span>01</span>
            <div className='firstPoint-detail'>
                <h3>Track company-wide progress</h3>
                <p>See how your day-to-day fit into the wide version.
                    Go from tracking progress at the milestone level all
                    the way done to the smallest of details. Never loose sight
                    of the bigger picture again.
                </p>
            </div>
        </div>

        <div className='secondPoint'>
            <span>02</span>
            <div className='secondPoint-detail'>
                <h3>Advanced built-in reports</h3>
                <p>Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                </p>
            </div>
        </div>

        <div className='thirdPoint'>
            <span>03</span>
            <div className='thirdPoint-detail'>
                <h3>Everything you need in one place</h3>
                <p>Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                </p>
            </div>
        </div>

      </section>
    </div>
  )
}
