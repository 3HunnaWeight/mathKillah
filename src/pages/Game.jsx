import React, { useEffect, useRef } from 'react'
import "../styles/task.css"
import { Task } from '../components/Task';
import { Score } from '../components/Score';
import { Timer } from '../components/Timer';
import { useDispatch } from 'react-redux';
import { arrayResetAction, scoreResetAction } from '../store/taskReducer';
export const Game = () => {
  const dispatch = useDispatch()
 useEffect(()=>{
  return () => {
    dispatch(arrayResetAction())
    dispatch(scoreResetAction())
  }
 })
  return (
    <div style={{flexDirection:'column'}} className='taskWrapper'>  
        <Timer/>
        <Task/>
        <Score/>
    </div>
  )
}
