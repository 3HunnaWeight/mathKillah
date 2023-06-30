import React, { useRef } from 'react'
import '../styles/go.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pushSignAction } from '../store/taskReducer'
export const CheckBox = () => {
  const link = require('../audio/start.mp3')
  let sound  = new Audio(link)
  const play = () =>{
      sound.play()
  }
  const dispatch = useDispatch()
  const plus = useSelector(state=>state.chooseReducer.plus)
  const minus = useSelector(state=>state.chooseReducer.minus)
  const mult = useSelector(state=>state.chooseReducer.mult)
  const division = useSelector(state=>state.chooseReducer.division)
  const arrSigns = useSelector(state=>state.taskReducer.sign)
  const pushSign = ()=> {
    if(plus)dispatch(pushSignAction("+"));
    if(minus)dispatch(pushSignAction("-"));
    if(mult)dispatch(pushSignAction("*"));
    if(division)dispatch(pushSignAction("/"));
  }
  return (
    <div className="goWrapper">
      <Link className={plus||minus||mult||division?'choosen':''} to ={plus||minus||mult||division?'/game':'/'} onClick={()=>{play();pushSign()}}>
          GO
      </Link>
    </div>
  )
}
