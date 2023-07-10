import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs'

export const TransferirDinero = () => {
  return (
    <div>
        <header>
            <div className='flex mx-10 items-center mt-5'>
                <BsArrowLeftShort className='text-4xl'/>
                <h1 className='text-l font-bold mx-5'>Transferir Dinero</h1>
            </div>
        </header>

        <div className='flex justify-between px-8 py-10'>
            <h1 className='font-bold'>Disponilbe para transferir</h1>
            <h1 className='font-bold bg-gray-300 p-1 rounded-lg'>$12.58</h1>
        </div>

        <div className='w-full px-10'>
            <button className='btn btn-wide w-full justify-start text-xs'>Con celular (lista de contactos)</button>
            <button className='btn btn-wide w-full justify-start text-xs my-2'>Con CBU, CVU o Alias</button>
        </div>

        <div>
            <h1 className='px-10 pt-5'>Contactos recientes</h1>
            <div className=' px-10'>
                <div className='flex pt-8 border-b-2 border-b-gray-500 pb-3'>
                    <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                    <h1 className='ps-5'>Mami</h1>
                </div>
            </div>
            <div className=' px-10'>
                <div className='flex pt-3 border-b-2 border-b-gray-500 pb-3'>
                    <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                    <h1 className='ps-5'>Papelera</h1>
                </div>
            </div>
            <div className='px-10'>
                <div className='flex pt-3 border-b-2 border-b-gray-500 pb-3'>
                    <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                    <h1 className='ps-5'>AguaLider.SA</h1>
                </div>
            </div>
            <div className='px-10'>
                <div className='flex pt-3 border-b-2 border-b-gray-500 pb-3'>
                    <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                    <h1 className='ps-5'>Tito</h1>
                </div>
            </div>
            
        </div>
        
        <div className='w-full flex justify-center my-20'>
            <button className='btn btn-wide rounded-full bg-gray-300'>Siguiente</button>
        </div>
    </div>
  )
}
