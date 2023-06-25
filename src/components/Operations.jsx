import React from 'react'
import '../styles/operations.css'
import { Plus } from './Plus'
import { Minus } from './Minus'
import { Mult } from './Mult'
import { Division } from './Division'
export const Operations = () => {
  return (
    <div className='opreationsWrapper'>
            <Plus/>
            <Minus/>
            <Mult/>
            <Division/>
    </div>
  )
}
