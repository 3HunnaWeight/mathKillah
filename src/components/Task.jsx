import React, { useEffect, useRef, useState } from 'react'
import '../styles/task.css'
import { useDispatch, useSelector } from 'react-redux'
import { addScoreAction, generateFirstAction, generateSecondAction, getAnsverAction } from '../store/taskReducer'
import { Modal } from './Modal'
export const Task = () => {
    const modal = useSelector(state=>state.taskReducer.modal)
    const link = require('../audio/win.mp3')
    let sound  = new Audio(link)
    const play = () =>{
      sound.play()
    }
    let firstRandom;
    let secondRandom
    const first = useSelector(state=>state.taskReducer.first)
    const signsArray = useSelector(state=>state.taskReducer.sign)
    const second = useSelector(state=>state.taskReducer.second)
    console.log(first)
    console.log(second)
    console.log(signsArray)
    const [sign,setSign] = useState('')
    console.log(sign)
    const ansver = useSelector(state=>state.taskReducer.ansver)
    console.log(ansver)
    const dispatch = useDispatch()
    const [input,setInput] = useState('')
    const score = useSelector(state=>state.taskReducer.score)
    const genSign = () => {
        setSign(signsArray[Math.floor(Math.random()*signsArray.length)])
    }
    const genRand=(min,max)=>{
        firstRandom = Math.floor(Math.random() * (max - min) + min)
        dispatch(generateFirstAction(firstRandom))
        secondRandom = Math.floor(Math.random() * (max - min) + min)
        dispatch(generateSecondAction(secondRandom))
    }
    const genAnsver = () => {
        if(sign=='+')dispatch(getAnsverAction(first+second))
        if(sign=='-')dispatch(getAnsverAction(first-second))
        if(sign=='*'){
            genRand(2,20)
            dispatch(generateFirstAction(firstRandom))
            dispatch(generateSecondAction(secondRandom))
            dispatch(getAnsverAction(firstRandom*secondRandom))
        }
        if(sign=='/'){
            let res = first/second
            if(Number.isInteger(res)&&first!==second){
                dispatch(getAnsverAction(first/second))
            }
            divisionRand()
            while(firstRandom==secondRandom){
                divisionRand()
            }
            dispatch(generateFirstAction(firstRandom))
            dispatch(generateSecondAction(secondRandom))
            dispatch(getAnsverAction(firstRandom/secondRandom))
        }
    }
    const divisionRand =() =>{
        firstRandom = Math.floor(Math.random()*100) + 2;
            while(firstRandom%secondRandom!==0&&firstRandom!==secondRandom){
                secondRandom = Math.floor(Math.random()*100)+2;
            }
    }
       
    useEffect(()=>{
        if(ansver===Number(input)){
            dispatch(addScoreAction())
            genRand(1,100)
            setInput('')
            play()
        }
    },[input])
    useEffect(()=>{
        if(score===0){
            genSign()
            genRand(1,100)
            
        }
    },[])
    useEffect(()=>{
        genSign()
        genAnsver()
    },[sign,score])

  return (
    <div className='taskWrapper'>
        {modal?<Modal/>:null}
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
