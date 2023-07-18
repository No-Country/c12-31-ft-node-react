import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

export const TransferirDinero = () => {

    const navigate = useNavigate()

  return (
    <div>
        <header>
            <div className='flex mx-10 items-center mt-5'>
                <BsArrowLeftShort onClick={()=> navigate('/transferencias')} className='text-4xl'/>
                <h1 className='text-l font-bold mx-5'>Transferir Dinero</h1>
            </div>
        </header>

        <div className='flex justify-between px-8 py-10'>
            <h1 className='font-bold'>Disponilbe para transferir</h1>
            <h1 className='font-bold bg-gray-300 p-1 rounded-lg border-green-400 border-1'>$12.58</h1>
        </div>

        <div className='w-full px-10'>
            <button className='btn btn-wide w-full justify-start text-xs border-green-400 border-1 bg-gray-200'>Con celular (lista de contactos)</button>
            <button className='btn btn-wide w-full justify-start text-xs my-2 border-green-400 border-1 bg-gray-200'>Con CBU, CVU o Alias</button>
        </div>

        <div>
            <h1 className='px-10 pt-5'>Contactos recientes</h1>
            <div className=' px-10'>
                <div className='flex pt-8 border-b-2 border-green-600 border-opacity-20 pb-3 items-center'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-green-400 bg-opacity-30 to-green-400 bg-opacity-30 via-green-200 bg-opacity-30'>M</div>
                    <h1 className='ps-2'>Mami</h1>
                </div>
            </div>
            <div className=' px-10'>
                <div className='flex pt-3 border-b-2 border-green-600 border-opacity-20 pb-3 items-center'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-green-400 bg-opacity-30 to-green-400 bg-opacity-30 via-green-200 bg-opacity-30'>P</div>
                    <h1 className='ps-2'>Papelera</h1>
                </div>
            </div>
            <div className='px-10'>
                <div className='flex pt-3 border-b-2 border-green-600 border-opacity-20 pb-3 items-center'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-green-400 bg-opacity-30 to-green-400 bg-opacity-30 via-green-200 bg-opacity-30'>A</div>
                    <h1 className='ps-2'>AguaLider.SA</h1>
                </div>
            </div>
            <div className='px-10'>
                <div className='flex pt-3 border-b-2 border-green-600 border-opacity-20 pb-3 items-center'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-green-400 bg-opacity-30 to-green-400 bg-opacity-30 via-green-200 bg-opacity-30'>T</div>
                    <h1 className='ps-2'>Tito</h1>
                </div>
            </div>
            
        </div>
        
        <div className='w-full flex justify-center my-20'>
            <button className='btn btn-wide rounded-full text-[#FD7A09] border-none text-lg'>Siguiente</button>
        </div>
    </div>
  )
}
