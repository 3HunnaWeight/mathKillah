import React from 'react'
import { Operations } from '../components/Operations'
import { CheckBox } from '../components/GoButton'
import '../styles/homePage.css'
export const Home = () => {
  return (
    <div className='home'>
      <Operations/>
      <CheckBox/>
    </div>
  )
}
