import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const TransferenciaCelular = () => {

    const navigate = useNavigate()

  return (
    <div>
        <header>
            <div className='flex mx-10 items-center mt-10'>
                <BsArrowLeftShort onClick={()=> navigate('/transferencias1')} className='text-4xl'/>
                <h1 className='text-xl mx-5'>Completá los datos</h1>
            </div>
        </header>


        <div className='flex mx-10 bg-gray-200 rounded-lg p-2 mt-10 shadow-xl'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-sm'>Celular</p>
                <p className='text-sm'>+549</p>
            </div>
            <input type="text" name="" id="" className='w-full outline-none bg-gray-200 rounded-lg border-b-2 border-[#3ED62B] mx-5' />  
        </div>

        <div className='w-full flex justify-end'>
            <p className='mx-10 mt-3 text-sm'>Ingresar código de área sin el 0</p>
        </div>

        <div className='flex justify-center mt-40'>
            <button className='btn bg-[#FD7A09] rounded-full' onClick={() => navigate('/contactoNuevo')}>Nuevo contacto</button>
        </div>
    </div>
  )
}
