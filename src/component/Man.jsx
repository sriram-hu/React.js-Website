import React, { useEffect } from 'react'
import '../App.css'
import Aos from 'aos';
import "aos/dist/aos.css";



const Man = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,

      easing: "ease-out-cubic"
    })
  })

  return (
    <div className='photo-div'>
      <img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/m07_0.webp?itok=pnZQiejh" alt width="1466" />
      <h1>MAN WEAR</h1>
      <div className='photo2-div'>
        <img data-aos="fade-right" data-aos-delay="800" src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/unbenannt-1.webp?itok=QOGFhc0K" alt width="450px" />
        <img data-aos="fade-left" data-aos-delay="800" src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/picturesandfootage.webp?itok=NF8DeaXV " alt width="450px" style={{ marginLeft: '400px' }} />
        <h1 style={{ color: 'black', marginLeft: '390px', marginTop: '-30px' }}>PUMA NEWS</h1>
        <p style={{ fontSize: '29px', marginTop: '10px' }}>To make sure you are among the first to know about what’s going on at PUMA, check out our corporate newsroom.</p>
           <div className='btn-div'>
           <button>EXPORE THE PUMA NEWS</button>

           </div>
           <div className='section1-div'>
           <img data-aos="fade-left"  data-aos-delay="950"src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/text-media/eventcalendar.webp?itok=BxnfANFB " alt width="450px"  style={{height:'360px'}}/>
           <h1  data-aos="fade-right"  data-aos-delay="950">NEWS CALENDER</h1>
           <p>Add PUMA events to your calendar and never miss out on<br></br> important releases anymore.</p>
           </div>

      </div>

    </div>

  )
}

export default Man