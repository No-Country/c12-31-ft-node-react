import React from 'react';
import { BiHelpCircle } from 'react-icons/bi'
import { NavBar } from '../NavBar';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';

export const TrasferenciasScreen = () => {
  return (
    <div className='h-screen'>
        <header className='flex justify-between px-10 py-5 items-center'>
            <div>
                <h1 className='text-xl'>Trasferencias</h1>
            </div>
            <div>
                <BiHelpCircle className='text-3xl'/>
            </div>
        </header>

        <div>
            <button className='btn mx-5 btn-sm mt-3'>Tu CVU</button>
        </div>

        <div className='w-full flex flex-col justify-center items-center my-10'>
            <button className='btn btn-wide rounded-full bg-gray-200'>Nueva Transferencia</button>
            <button className='btn btn-wide rounded-full my-2 border-black bg-gray-100'>Transferencias realizadas</button>
            <button className='btn btn-wide rounded-full border-black bg-gray-100'>Transferencias recibidas</button>
        </div>

        <h1 className='mx-10 mt-20'>Recientes</h1>
        <div className='px-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='w-14 h-14 rounded-full bg-gray-200'></div>
                    <div>
                        <h1>Transferencia recibida</h1>
                        <h1 className='text-gray-500'>de Sofia Negri</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-end'>
                    <h1 className='font-bold'>+$49.500</h1>     
                    <div className='flex justify-end'>
                    <p className='text-gray-500'>ayer</p>  
                    </div>
                </div>
            </div>
        </div>
        <div className='px-5 py-3'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='w-14 h-14 rounded-full bg-gray-200'></div>
                    <div>
                        <h1>Transferencia recibida</h1>
                        <h1 className='text-gray-500'>de Sofia Negri</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-end'>
                    <h1 className='font-bold'>+$49.500</h1>     
                    <div className='flex justify-end'>
                    <p className='text-gray-500'>ayer</p>  
                    </div>
                </div>
            </div>
        </div>
        <div className='px-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className='w-14 h-14 rounded-full bg-gray-200'></div>
                    <div>
                        <h1>Transferencia recibida</h1>
                        <h1 className='text-gray-500'>de Sofia Negri</h1>
                    </div>
                </div>

                <div className='flex flex-col justify-end'>
                    <h1 className='font-bold'>+$49.500</h1>     
                    <div className='flex justify-end'>
                    <p className='text-gray-500'>ayer</p>  
                    </div>
                </div>
            </div>
        </div>

        <div className='h-full'></div>

        <NavBarBottom />
    </div>
  )
}
