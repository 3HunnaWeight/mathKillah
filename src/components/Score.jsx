import React from 'react'
import '../styles/score.css'
import { useSelector } from 'react-redux'
export const Score = () => {
  const score = useSelector(state=>state.taskReducer.score)
  return (
    <div className='score'>
        Score {score}
    </div>
  )
}
