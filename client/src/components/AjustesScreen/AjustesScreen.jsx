import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';

export const AjustesScreen = () => {
  return (
    <div className='flex flex-col h-screen'>
        <header className='flex w-full items-center mt-10 mx-10 '>
            <AiOutlineSearch className='text-3xl'/>
            <h1 className='text-2xl mx-5'>Ajustes</h1>
        </header>


        <main className='mt-20'>
            <div className='flex justify-between mx-8'>
                <h1 className='text-xl'>Activar notificaciones</h1>
                <IoIosArrowDown className='text-2xl'/>
            </div>

            <div className='mt-20 mx-8'>
                <h1 className='text-xl mb-8'>Permisos</h1>
                <h1 className='text-xl'>Términos y condiciones</h1>
            </div>

            <div className='mt-20 h-5'></div>



            <div className='flex flex-col mx-8 mt-20'>
                <hi className='text-xl mb-8'>Cambiar contraseña</hi>
                <hi className='text-xl'>Cerrar cuenta</hi>
            </div>
        </main>

        <div className='flex-grow'></div>

        <NavBarBottom />
    </div>
  )
}
