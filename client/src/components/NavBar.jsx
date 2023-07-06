import React from 'react';
import { BiUserCircle } from 'react-icons/bi'

export const NavBar = () => {
  return (
    <div className="navbar bg-zinc-300 h-10">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Hola Usuario</a>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <BiUserCircle className='text-3xl'/>
            </button>
        </div>
    </div>
  )
}
