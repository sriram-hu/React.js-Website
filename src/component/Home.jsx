import React from 'react'
import '../App.css'
import { Button } from 'bootstrap'
const Home= () => {
  return (
    <div className='class-div'>
 <img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/m-06-run-puma.webp?itok=1TT9uT6G" alt width="1490px"style={{height:'650px'}} />
 <h1 className='head-div'>KEEP PUSHING FORWARD</h1>
 <h1 className='head2-div'>FOREVER. FASTER.</h1>
 <p className='para-div'>How do you push yourself? By setting goals.<br></br> For PUMA, it’s to be the Fastest Sports Brand in the world.<br></br> For someone ready to change the game,<br></br> our values are easy to relate to: Be brave. Be confident<br></br>. Be determined. Be joyful.</p>
 <button>Experience PUMA</button>
 <div className='img-div'>
<img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/new-header-foreverbetter-alternate.webp?itok=ebkWqHbT" alt width="1490px" style={{height:'650px',marginTop:'200px'}}/>
<h1>THERE IS ONLY ONE FOREVER - LET'S MAKE IT BETTER</h1>
<h2>FOREVER. BETTER.</h2>
<p>Across our business, we are taking action for people and the planet. And we'll never stop holding ourselves accountable and finding ways to do more.</p>
<button>READ MORE ABOUT FOREVER.BETTER</button>
 </div>
 <h1 className='our-div'>OUR LATEST NEWS
</h1>
<div className='img2-div'>
<img src="https://about.puma.com/sites/default/files/styles/dd_hero_ultra/public/media/hero/images/m21-rudolfdassler-landingpage.webp?itok=f6NhAAQo" alt width="1490px"  style={{height:'650px'}}/>
<h1>MAKERS OF HISTORY, MAKERS OF THE FUTURE</h1>
<h2>PUMA HISTORY</h2>
<p>Since 1948, innovations made by PUMA have been at the center of athletes writing sports history. Moments charged with emotion, powered by science</p>
<button>GO BACK IN A TIME</button>
</div>
<div className='img3-div'>
  <img src="https://about.puma.com/sites/default/files/styles/dd_text_media/public/media/images/m-17_portrait_stefano_0986.webp?itok=jap2QkGd" alt width="500px" style={{marginTop:'120px',marginLeft:'850px'}} />
  <h1>GET OFF THE BENCH, START PLAYING</h1>
  <p>Make your move: advance to the next level with PUMA and explore our job opportunities.</p>
  <button>JOIN PUMA</button>

</div>
    </div>
  )
}

export default Home