import React from 'react'
import { BiHelpCircle } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import { TransferenciasComponent } from './TransferenciasComponent';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';

export const TransferenciasRecibidas = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <header className='flex justify-between px-5 py-5 items-center'>
            <div>
                <h1 className='text-lg'>Transferencias recibidas</h1>
            </div>
            <div>
                <BiHelpCircle className='text-3xl'/>
            </div>
        </header>

        <div className='flex justify-between w-full items-center px-5'>
            <input type="text" placeholder="Buscar" className="input input-bordered h-10 w-3/4 rounded-full bg-gray-200 text-lg" />
            <BsFilter className='text-4xl '/>
        </div>

        <h1 className='mt-10 mx-5 text-lg'>5 resultados</h1>


        <main>
            <TransferenciasComponent />
        </main>

        <div className='flex-grow'></div>


        <NavBarBottom />

    </div>
  )
}
