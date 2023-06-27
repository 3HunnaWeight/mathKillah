import React, { useRef } from 'react'
import '../styles/go.css'
import { Link } from 'react-router-dom'
export const CheckBox = () => {
  const link = require('../audio/start.mp3')
  let sound  = new Audio(link)
  const play = () =>{
      sound.play()
  }
  return (
    <div className="goWrapper">
      <Link to ='/game' onClick={()=>play()}>
        <div className='go'> 
          GO
        </div>
      </Link>
    </div>
  )
}
