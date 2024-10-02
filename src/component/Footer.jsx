import React from 'react'
import'../App.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='Footer-div'>
<img src="https://about.puma.com/themes/custom/dreist/src/assets/images/logo-puma-footer.svg" alt="" />

<Button  style={{marginLeft:'380px',marginTop:'-30px', color:'white'}}  size='large' endIcon={<InstagramIcon/>}></Button>
<Button  style={{marginLeft:'30px',marginTop:'-30px', color:'white'}} size=' large'endIcon={<YouTubeIcon/>}></Button>
<Button style={{marginLeft:'30px',marginTop:'-30px', color:'white'}} size=' large'  endIcon={<FacebookIcon/>}></Button>
<Button style={{marginLeft:'30px',marginTop:'-30px', color:'white'}} size=' large'  endIcon={<LinkedInIcon/>}></Button>
<Button style={{marginTop:'-50px', backgroundColor:'white',color:'black'}}>Shop it PUMA</Button>
<div className='Footer2-div'>

</div>

    </div>
  )
}

export default Footer