import React, { useRef } from 'react'
import "../styles/task.css"
import { Task } from '../components/Task';
import { Score } from '../components/Score';
import { Timer } from '../components/Timer';
export const Game = () => {
  
  return (
    <div style={{flexDirection:'column'}} className='taskWrapper'>  
        <Timer/>
        <Task/>
        <Score/>
    </div>
  )
}
