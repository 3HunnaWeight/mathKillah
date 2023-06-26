import React, { useRef } from 'react'
import '../styles/operations.css'
import { useDispatch, useSelector } from 'react-redux'
import { choosePlusAction } from '../store/chooseReducer'
export const Plus = () => {
  const ref = useRef()
  let link=require('../audio/choose.mp3');
  const toggle = useSelector(state=>state.chooseReducer.plus)
  const dispatch = useDispatch()
  return (
    <div onClick={()=>{dispatch(choosePlusAction());ref.current.play()}} className={toggle?"operation plus choose":"operation plus"}>
        <audio ref={ref} src={link}></audio>
    </div>
  )
}
