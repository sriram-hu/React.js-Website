import React from 'react'

import'../App.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function Navagation() {
  return (
  
    <div className='Navabar-div'>
        <img src="https://static.wixstatic.com/media/17fb60_8a73d1ac89d741238e21d5df93a8cbd4~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg" alt width="80px" />
<div className='Links-div'>
        <ul >
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/kids'}>Kids</Link></li>
          <li><Link to={'/Man'}>Man</Link></li>
          <li><Link to={'/Woman'}>Woman</Link></li>
        </ul>
        <div>
          <div className='btns'>
            <Button><Link to={'/signin'}>SignIn</Link></Button>
          </div>
    </div>
        </div>
        </div>
  )
}

export default Navagation