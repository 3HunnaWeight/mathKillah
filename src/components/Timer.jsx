import React, { useEffect, useState } from 'react'
import '../styles/timer.css'
import { useDispatch, useSelector } from 'react-redux'
import { switchModalAction } from '../store/taskReducer'
import { useRef } from 'react'
export const Timer = () => {
  const ansver = useSelector(state=>state.taskReducer.ansver)
  const [toggle,setToggle] = useState(true)
  const dispatch = useDispatch()
  const [time, setTime] = useState(60);
  const intervalRef = useRef(null);
  const sec = () => {
    setTime((prevTime) => (prevTime > 0 ? prevTime - 10 : prevTime));
  };
  useEffect(()=>{
    if(ansver===null){
      setTime(60)
    }
  },[ansver])
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
