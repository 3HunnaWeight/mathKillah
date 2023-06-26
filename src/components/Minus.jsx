import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseMinusAction } from '../store/chooseReducer'

export const Minus = () => {
  const ref = useRef()
  let link=require('../audio/choose.mp3');
  const toggle = useSelector(state=>state.chooseReducer.minus)
  const dispatch = useDispatch()
  return (
    <div onClick={()=>{dispatch(chooseMinusAction());ref.current.play()}} className={toggle?"operation minus choose":"operation minus"}>
        <audio ref={ref} src={link}></audio>
    </div>
  )
}
