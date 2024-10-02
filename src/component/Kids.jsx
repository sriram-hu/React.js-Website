import React, { useEffect } from 'react'
import'../App.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const Kids = () => {
 useEffect((()=>{
  Aos.init({
    duration: 800,

    easing: "ease-out-cubic"
  })
 }))
  return (
    <div className='img7-div'>
     <img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/m-06-stage-innovation-home.webp?itok=JaKint7F" alt width="1470px"style={{marginLeft:'0px'}} />
     <h1>CULTURE OF FIRSTS</h1>
     <p style={{color:'white',fontSize:'30px',marginLeft:'20px'}}>FOREVER FASTER IS ALWAYS FIRST, NEVER SECOND,<br></br> NEVER THIRD.
We strive to al</p>
<div className='img8-div'>
  <img  data-aos="fade-right" data-aos-delay="800" src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/m-18-legacy-brushspike-2.webp?itok=1sS7DU5e" alt width="500px" />
  <h1   data-aos="fade-left" data-aos-delay="800" >INNOVATING FOR PERFORMANCE</h1>
  <p  data-aos="fade-left" data-aos-delay="800" >"Has anyone done it before? Is it a first?" That's the principle that guides Innovation at PUMA. Constantly being the first to do something has always been motivating us. 

</p>
 <div className='img9-div'>
  <img  data-aos="fade-left" data-aos-delay="1000" src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/m-18-preview-picture-long-video.webp?itok=PrGESi7c" alt width="600px" />
  <h1   data-aos="fade-right" data-aos-delay="1000" >INNOVATING FOR PERFORMANCE</h1>
  <p  data-aos="fade-right" data-aos-delay="1000" >"Has anyone done it before? Is it a first?"<br></br> That's the principle that guides Innovation at PUMA<br></br>. Constantly being the first to do something has<br></br> always been motivating us. 
</p>

 </div>
    </div>
    </div>
  )
}

export default Kids