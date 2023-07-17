import React from 'react';
import { BiHelpCircle } from 'react-icons/bi'
import { NavBar } from '../NavBar';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { Link, useNavigate } from 'react-router-dom';
import { TransferenciasRecibidasComponent } from './TransferenciasComponent';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const data = [
    {
        user: 'Sofia Negri',
        amount: '49.500',
        date: 'ayer',
    },
    {
        user: 'Miguel',
        amount: '30.500',
        date: 'ayer',

    },
    {
        user: 'Juanma',
        amount: '19.500',
        date: 'ayer',

    },
];
export const TrasferenciasScreen = () => {
    
    const navigate = useNavigate()
    
    
    let initials = data.map(item => {
        const nameParts = item.user.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts[1] : '';
        const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
        return initials;
      });

  return (
    <div className='h-screen flex flex-col'>
        <header className='flex justify-between px-10 py-5 items-center bg-gradient-to-b from-green-400 via-green-200 to-green-600'>
            <div className='flex'>
            <Link to={"/dashboard"}>
                <AiOutlineArrowLeft className="w-7 h-7" />
            </Link>
                <h1 className='text-2xl ml-3'>Transferencias</h1>
            </div>
            <div>
                <BiHelpCircle className='text-3xl'/>
            </div>
        </header>


        <div>
            <button className='btn mx-5 btn-sm mt-3 text-[#3ED62B]'>Tu CVU</button>
        </div>

        <div className='w-full flex flex-col justify-center items-center my-10 text-[#FD7A09] '>
            <button onClick={() => navigate('/transferencias1')} className='btn btn-wide rounded-full bg-orange-600 bg-opacity-30'>Nueva Transferencia</button>
            <button onClick={() => navigate('/realizadas')} className='btn btn-wide rounded-full my-2 border-gray-500'>Transferencias realizadas</button>
            <button onClick={() => navigate('/recibidas')} className='btn btn-wide rounded-full border-gray-500'>Transferencias recibidas</button>
        </div>

        <h1 className='mx-8 mt-20 text-xl font-semibold'>Recientes</h1>
        <div className='mt-5'>
            {
                data.map((item, index) => (
                    <TransferenciasRecibidasComponent key={index} user={item.user} amount={`+$${item.amount}`} initials={initials[index]} date={item.date} />
                ))
            }
        </div>

        <div className='flex-grow'></div>
        <NavBarBottom />
    </div>
  )
}
