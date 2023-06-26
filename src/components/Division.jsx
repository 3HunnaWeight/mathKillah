import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseDivisionAction } from '../store/chooseReducer'

export const Division = () => {
  const toggle = useSelector(state=>state.chooseReducer.division)
  const dispatch = useDispatch()
  const ref = useRef()
  let link=require('../audio/choose.mp3');
  return (
    <div onClick={()=>{dispatch(chooseDivisionAction());ref.current.play()}} className={toggle?"operation division choose":"operation division"}>
        <audio ref={ref} src={link}></audio>
    </div>
  )
}
