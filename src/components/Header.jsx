import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const token = useSelector(s => s.token.value)
  return (
    <div className='p-6 flex gap-5 bg-slate-300'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
      {
        token ?
        <NavLink to={"/admin/create-product"}>Admin</NavLink>
        :
        <NavLink to={"/login"}>Login</NavLink>
      }
    </div>
  )
}

export default Header