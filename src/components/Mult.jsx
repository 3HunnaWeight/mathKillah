import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseMultAction } from '../store/chooseReducer'

export const Mult = () => {
  const ref = useRef()
  let link=require('../audio/choose.mp3');
  const toggle = useSelector(state=>state.chooseReducer.mult)
  const dispatch = useDispatch()
  return (
    <div onClick={()=>{dispatch(chooseMultAction());ref.current.play()}}className={toggle?"operation mult choose":"operation mult"}>
        <audio ref={ref} src={link}></audio>
    </div>
  )
}
