import React from 'react'
import { logo } from './index'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
export default function Newsletter() {
  return (
    <div className='newsletter'>
      <div className='newsletter-main'>

        <section className='socials'>
          <img src={logo} alt='logo' className='logo newsletter-logo'/>
          <div className='social-links'>
            <AiFillFacebook className='fb'/>
            <AiFillYoutube className='youtube'/>
            <AiOutlineTwitter className='twitter'/>
            <FaPinterest className='pin'/>
            <AiOutlineInstagram className='insta'/>
          </div>
        </section>

        <section className='newsletter-items'>
          <ul className='newsletter-link'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Community</a></li>
            <li><a href='#'>Privacy Policy</a></li>
          </ul>
        </section>

        <section className='updates'>
            <form className='subscribe'>
              <input className='inp'
                placeholder='Updates in your inbox...' required/>
              <button className='btn'>Go</button>
            </form>

          <p className='copyright'>Copyright 2020.All rights reserved.</p>
        </section>
      </div>

      <p className='copyright-end'>Copyright 2020.All rights reserved.</p>
    </div>
  )
}
