import React from 'react'
import {logo} from "./index"
import { hamburger, close } from './index'
export default function Navbar() {

  const [toggle, setToggle] = React.useState(false)

  function handleChange(){
    setToggle(prev => !prev)
    
  }
  
  const slide ={
    inset: !toggle ? '0 0 0 100%' : '0 0 0 50%'
  }
  return (
    <nav>
        <img src={logo} alt='logo' className='logo'/>

        <div className='nav-items'>
            <ul className='list-items' style={slide}>
              <li><a href='#'>Pricing</a></li>
              <li><a href='#'>Product</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Community</a></li>
            </ul>
        </div>

        <button className='btn nav-btn'>Get Started</button>
        {!toggle ? <img src={hamburger}  className='hamburger' alt='hamburger_icon'
          onClick={() => handleChange()}/> : 

          <img src={close} className='hamburger' alt='hamburger_icon'
          onClick={() => handleChange()}/>}
    </nav>
  )
}
