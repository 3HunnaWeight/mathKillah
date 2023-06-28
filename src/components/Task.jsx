import React, { useEffect, useRef, useState } from 'react'
import '../styles/task.css'
import { useDispatch, useSelector } from 'react-redux'
import { addScoreAction, generateFirstAction, generateSecondAction, getAnsverAction } from '../store/taskReducer'
export const Task = () => {
    const link = require('../audio/win.mp3')
    let sound  = new Audio(link)
    const play = () =>{
      sound.play()
    }
    const first = useSelector(state=>state.taskReducer.first)
    const sign = useSelector(state=>state.taskReducer.sign)
    const second = useSelector(state=>state.taskReducer.second)
    const ansver = useSelector(state=>state.taskReducer.ansver)
    console.log(ansver)
    const dispatch = useDispatch()
    const [input,setInput] = useState('')
    const score = useSelector(state=>state.taskReducer.score)
    console.log(score)
    console.log(input)
    const genRand=()=>{
        let first = Math.floor(Math.random() * (100 - 1) + 1)
        dispatch(generateFirstAction(first))
        let second = Math.floor(Math.random() * (100 - 1) + 1)
        dispatch(generateSecondAction(second))
        dispatch(getAnsverAction(first+second))

    }
    useEffect(()=>{
        if(ansver===Number(input)){
            dispatch(addScoreAction())
            genRand()
            setInput('')
            play()
        }
    },[input])
    useEffect(()=>{
        if(score===0){
            genRand()
        }
    },[])
  return (
    <div className='taskWrapper'>
        <div className='partOfTask'>
            <div className="sign">
                {first}
            </div>
        </div>
        <div className='partOfTask'>
            <div className="signOperation">
                {sign}
            </div>
        </div>
        <div className='partOfTask'>
            <div className="sign">
                {second}
            </div>
        </div>
        <div className='partOfTask'>
            <div className="signEqual">
                =
            </div>
        </div>
        <div className='partOfTask'>
            <input onChange={event=>setInput(event.target.value)} value={input} type="text" autoFocus={true} onBlur={({ target }) => target.focus()}  className='inputValue'/>
        </div>
    </div>
  )
}
