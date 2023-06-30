import React, { useEffect, useState } from 'react'
import "../styles/modal.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {arrayResetAction, generateFirstAction, generateSecondAction, getAnsverAction, scoreResetAction, switchModalAction,timerResetAction } from '../store/taskReducer'
export const Modal = () => {
    const modal = useSelector(state=>state.taskReducer.modal)
    const modalAudioLink = require('../audio/modal.mp3')
    let modalAudio  = new Audio(modalAudioLink)
    useEffect(()=>{
        modalAudio.play()
    },[modal])
    const buttonClickAudioLink = require('../audio/start.mp3')
    let ButtonClickAudio  = new Audio(buttonClickAudioLink)
    const play = () =>{
        ButtonClickAudio.play()
    }
    const dispatch = useDispatch()
    const reset = () => {
        dispatch(generateFirstAction(0))
        dispatch(generateSecondAction(0))
        dispatch(getAnsverAction(null))
        dispatch(scoreResetAction())
        dispatch(switchModalAction())
        dispatch(arrayResetAction())
    }
    const tryAgain = () => {
        dispatch(timerResetAction())
        dispatch(scoreResetAction())
        dispatch(switchModalAction())
        setTimeout(() => {
           dispatch(timerResetAction()) 
        });
    }
  return (
    <div className={`modalWrapper`}>
        <div className='modal'>
            <div className="buttonsWrapper">
                <div className='btn'  onClick={()=>{tryAgain();play();}}>
                    Try again   
                </div>
                <Link to ='/mathKillah' className='btn' onClick={()=>{reset();play()}} >
                        Choose other signs 
                </Link>
            </div>
        </div>
    </div>
  )
}
