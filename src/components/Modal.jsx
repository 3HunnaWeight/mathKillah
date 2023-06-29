import React from 'react'
import "../styles/modal.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {arrayResetAction, generateFirstAction, generateSecondAction, getAnsverAction, scoreResetAction, switchModalAction } from '../store/taskReducer'
export const Modal = () => {
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
        dispatch(getAnsverAction(null))
        dispatch(scoreResetAction())
        dispatch(switchModalAction())
    }
    /*first:0,
    sign:[],
    second:0,
    score:0,
    ansver:null,
    modal:false,*/ 
  return (
    <div className='modalWrapper'>
        <div className='modal'>
            <div className="buttonsWrapper">
                <div className="btn" onClick={()=>{tryAgain()}}>
                    Try again   
                </div>
                <Link to ='/' className='btn' onClick={()=>reset()} >
                        Choose other signs 
                </Link>
            </div>
        </div>
    </div>
  )
}
