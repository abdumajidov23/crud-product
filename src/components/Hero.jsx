import React from 'react'
import { useDispatch } from 'react-redux'
import { inc, reset } from '../redux/slices/counter-slice'

const Hero = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Hero</h2>
        <button onClick={()=> dispatch(inc())}>increment 1</button>
        <button onClick={()=> dispatch(inc(10))}>increment 10</button>
        <button onClick={()=> dispatch(inc(100))}>increment 100</button>
        <button onClick={()=> dispatch(reset())}>reset</button>
    </div>
  )
}

export default Hero