import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import'../App.css'

const Woman = () => {
  useEffect(()=>{
    Aos.init({
      duration: 800,

      easing: "ease-out-cubic"
    })
  })
  return (
    <div className='img5-div'>
        <img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/m-06-2-1-stage-corpnews-fallback-10.webp?itok=g1xsmbOZ" alt width="1400px" style={{marginLeft:'30px'}} />
        <h1 data-aos="fade-right" data-aos-delay="800">ENVIRONMENT</h1>
          <p data-aos="fade-right" data-aos-delay="800" >At PUMA, we play by the rules. We have not received any environmental fines within the last decade.<br></br> The purpose of our environmental efforts is to<br></br> ensure that PUMA and its suppliers are in full environmental compliance<br></br> and any negative impact on the environment is minimized. In this way,<br></br> we want to leave an impression on the track and the market,<br></br> in the hearts of our athletes and consumers</p>
          <div className='cards-div'>
           <img data-aos="fade-left" data-aos-delay="1000"  src="https://about.puma.com/sites/default/files/styles/dd_teaser/public/media/teaser/images/m-23-codesandhandbooks.jpeg?itok=guJoo6Y2" alt width="800px" />
           <img data-aos="fade-right" data-aos-delay="1000" src="https://about.puma.com/sites/default/files/styles/dd_teaser/public/media/teaser/images/m09-sustainable-collection.jpg?itok=TcgA-CBo" alt width="500px" style={{marginLeft:'900px',marginTop:'-390px',height:'300px'}} />
           <h2>CODES AND HANDBOOKS</h2>
           <p >We believe that as the Fastest Sports Brand in the world we have the responsibility to ensure that our products are manufactured in decent workplaces where human rights are respected.</p>
           <div className='cards2-div'>
            <img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/foreverbetter-teaser.webp?itok=RRzbmu-r" alt width="1400px" style={{height:'650px',marginTop:'-1px'}} />
            <h1 style={{fontSize:'80px'}}>EXPLORE FOREVER. BETTER.</h1>
            <p style={{marginLeft:'60px',color:'white'}}>AS A SPORTS BRAND, WE KNOW A THING OR TWO ABOUT PUSHING OURSELVES TO BE BETTER.<br></br> WE APPROACH SUSTAINABILITY IN MUCH THE SAME WAY.
 </p>
 <div className='dummy-div'>

 </div>
           </div>
          </div>
        </div>
   
  )
}

export default Woman