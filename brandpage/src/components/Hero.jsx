import React from 'react'

function Hero() {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
            </div>

            <div className='shopping'>
                    <p>Also Available On</p>
            </div>
            <div className='brand-icons'>
                       <img src="img/flipkart.png" alt="flipkart-logo" /> 
                       <img src="img/amazon.png" alt="amazon-logo" /> 
            </div>
        </div>
        <div className='hero-image'>
            <img src="img/shoe_image.png" alt="hero-image" />
        </div>
    </main>
  )
}

export default Hero