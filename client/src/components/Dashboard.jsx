import React from 'react'
import { NavBar } from './NavBar'
import { AiOutlineEye } from "react-icons/ai";
import { NavBarBottom } from './NavBarBottom/NavBarBottom';



export const Dashboard = () => {
  return (
    <div>
        <NavBar />

        <div className='flex w-full bg-gray-200'>
            <div className='p-8 w-2/4'>
                <h1 className='text-xl'>Saldo actual</h1>
                <AiOutlineEye className='text-4xl'/>
                <h1 className='text-3xl font-bold'>$28.48</h1>
            </div>
            <div className='w-20'></div>
            <div className='px-4 w-2/4 flex flex-col justify-center items-end'>
                <button className="btn btn-sm w-full px-2 mb-2">Ingresar dinero</button>
                <button className="btn btn-sm w-full px-2">Extraer dinero</button>
            </div>
        </div>

        <NavBarBottom />
    </div>
  )
}
