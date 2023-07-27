import React from 'react'
import './style.css'

function contact() {
  
  return (
   <div className='contact'>
        <div className='contact1'>
            <h1>Contact</h1>
            <p>Submit the form Below to get in Touch with me</p>
        </div>
        <div className='form'>
            <form>
                <div><input type="text" placeholder='Enter Your Name' className='Forms' id='form-1'/></div>
                <div><input type="text" placeholder='Enter Your Email' className='Forms' id='form-2'/></div>
                <div><input type="text" placeholder='Enter Your Message'className='Forms' id='form3'/></div>
                <button className='btn'>Lets Talk</button>
            </form>
        </div>
        <div className='About-Us'>
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aut omnis natus temporibus quo, cupiditate asperiores itaque nam perspiciatis reprehenderit ad ex officiis provident ullam.</p>
              <h4>Made With CodeGen Technologies</h4>
        </div>
   </div>
  )
}

export default contact