import React from 'react'
import { NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className='flex w-full items-center justify-end gap-5 p-8 bg-black text-white'>
      <div className='mr-auto text-4xl font-thin'>Navigation</div>
      <NavLink to={'/'} className={(args) => `${args.isActive ? 'text-yellow-300' : ''} font-medium`} >Home</NavLink>
      <NavLink to={'/about'} className={(args) => `${args.isActive ? 'text-yellow-300' : ''} font-medium`} >About</NavLink>
      <NavLink to={'/login'} className={(args) => `${args.isActive ? 'text-yellow-300' : ''} font-medium`} >Login</NavLink>
    </nav>
  )
}

export default NavComponent
