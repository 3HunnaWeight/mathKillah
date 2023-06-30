import React, { useEffect, useState } from 'react'
import '../styles/timer.css'
import { useDispatch, useSelector } from 'react-redux'
import { switchModalAction } from '../store/taskReducer'
import { useRef } from 'react'
export const Timer = () => {
  const reset = useSelector(state=>state.taskReducer.timerReset)
  const ansver = useSelector(state=>state.taskReducer.ansver)
  const dispatch = useDispatch()
  const [time, setTime] = useState(60);
  const intervalRef = useRef(null);
  const sec = () => {
    setTime((prevTime) => (prevTime > 0 ? prevTime - 20 : prevTime));
  };
  useEffect(()=>{
    if(reset===true||ansver===null){
      setTime(60)
    }
  },[reset,ansver])
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(sec, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(()=>{
    if(time===0){
      dispatch(switchModalAction())
    }
  },[time])
  return (
    <div className='timer'>
        {time}
    </div>
  )
}
