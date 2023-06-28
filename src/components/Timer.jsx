import React, { useEffect, useState } from 'react'
import '../styles/timer.css'
export const Timer = () => {
    
  const [time,setTime] = useState(60)
  const sec = ()=>{
    setTime(prev=>prev-=1)
  }
  let interval;
  const startTimer = () => {
    clearInterval(interval)
    interval  = setInterval(sec,1000)
  }
  useEffect(()=>{
    startTimer()
  },[])
  return (
    <div className='timer'>
        {time}
    </div>
  )
}
