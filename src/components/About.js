import React from 'react'
import './style.css'

function About() {
  return (
    <div className='about'>
          <div class="root1">
            <div className="about-text">
                <h1>We are Largest IT Institute In Satara</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem eaque accusantium blanditiis illo dolorem unde nihil dolore numquam nesciunt, quod consectetur corporis? Ad qui voluptas, ipsum voluptate consectetur odio!</p>
                {/* //eslint-disable-next-line */}
                <a href='www.google.com' class="btn-2">EXPLORE NOW</a>
            </div>
            <div className='About-Us'>
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aut omnis natus temporibus quo, cupiditate asperiores itaque nam perspiciatis reprehenderit ad ex officiis provident ullam.</p>
              <h4>Made With CodeGen Technologies</h4>
            </div>
        </div>
    </div>
  )
}

export default About