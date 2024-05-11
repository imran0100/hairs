import React from 'react'
import "./Trust.css"
// import { HiSpeakerWave } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
function Trust() {
  return (
  <>
    <div className='trust-container container'>
    <div className='trust'>
      <div><FcGoogle size={50} /></div>
        <div>
       
            <div>2455 +</div>
            <div className='trust-text'>Google reviews</div>
        </div>
        </div>
        <div className='trust'>
            <div><img alt='hair' src='/uploads/r-icon2.png'/></div>
            <div><div>Published in</div><div className='trust-text'>5000+ Channels</div></div>
            


        </div>
        <div className='trust'> <div><img alt='hair' src='/uploads/r-icon3.png'/></div>
            <div><div>1000+</div><div className='trust-text'>Happy Clients</div></div>
            </div>
        <div className='trust'> <div><img alt='hair' src='/uploads/r-icon4.png'/></div>
            <div><div>100%</div><div className='trust-text'>Guaranteed Result</div></div>
            </div>
          
    </div>
    <hr></hr>
  
  </>
  )
}

export default Trust