import React from 'react';
import { BiHelpCircle } from 'react-icons/bi'
import { NavBar } from '../NavBar';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { useNavigate } from 'react-router-dom';
import { TransferenciasComponent } from './TransferenciasComponent';

const data = [
    {
        user: 'Sofia Negri',
        amount: '49.500',
        date: 'ayer'
    },
    {
        user: 'Miguel',
        amount: '30.500',
        date: 'ayer'
    },
    {
        user: 'Juanma',
        amount: '19.500',
        date: 'ayer'
    },
];

export const TrasferenciasScreen = () => {

    const navigate = useNavigate()


  return (
    <div className='h-screen flex flex-col'>
        <header className='flex justify-between px-10 py-5 items-center'>
            <div>
                <h1 className='text-xl'>Transferencias</h1>
            </div>
            <div>
                <BiHelpCircle className='text-3xl'/>
            </div>
        </header>


        <div>
            <button className='btn mx-5 btn-sm mt-3'>Tu CVU</button>
        </div>

        <div className='w-full flex flex-col justify-center items-center my-10'>
            <button onClick={() => navigate('/transferencias1')} className='btn btn-wide rounded-full bg-gray-200'>Nueva Transferencia</button>
            <button className='btn btn-wide rounded-full my-2 border-black bg-gray-100'>Transferencias realizadas</button>
            <button className='btn btn-wide rounded-full border-black bg-gray-100'>Transferencias recibidas</button>
        </div>

        <h1 className='mx-8 mt-20 text-xl font-semibold'>Recientes</h1>
        <div className='mt-5'>
            {
                data.map((item, index) => (
                    <TransferenciasComponent key={index} user={item.user} amount={item.amount} date={item.date} />
                ))
            }
        </div>

        <div className='flex-grow'></div>
        <NavBarBottom />
    </div>
  )
}
