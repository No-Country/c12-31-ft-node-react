import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';

export const AQuien = () => {
  return (
    <div>
         <header>
            <div className='flex mx-10 items-center mt-5'>
                <BsArrowLeftShort className='text-4xl'/>
                <h1 className='text-l font-bold mx-5'>¿A quien deseas transferir? </h1>
            </div>
        </header>

        <div className='flex w-full justify-center mt-20 '>
            <button className='btn btn-wide rounded-full bg-gray-300'>Nuevo Contacto</button>
        </div>

        <div className='mt-20 flex w-full justify-center '>
            <select name="Guardado" id="" className='flex justify-between w-full mx-20 font-bold'>
                <option value="">Contacto guardado</option>
                <option value="">Contacto 1</option>
                <option value="">Contacto 2</option>
                <option value="">Contacto 3</option>
                <option value="">Contacto 4</option>
            </select>
        </div>
    </div>
  )
}
