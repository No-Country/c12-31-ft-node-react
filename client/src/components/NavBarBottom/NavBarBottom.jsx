import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'
import { BsGraphDown } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {HiOutlineCreditCard} from 'react-icons/hi'
import {PiProhibitBold} from 'react-icons/pi'
import {TbWorld} from 'react-icons/tb'
import {CgArrowsExchangeAlt} from 'react-icons/cg'

import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom'




export const NavBarBottom = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const selectedButtonRef = useRef(null);

    const navigate = useNavigate()


    useEffect(() => {
      const selectedButton = localStorage.getItem('selectedButton');
      if (selectedButton) {
        setSelectedButton(selectedButton);
        selectedButtonRef.current = selectedButton;
      }
    }, []);

  return (
    <div className="btm-nav z-50 sticky bottom-0 items-center bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09]">
        <button
              className={selectedButton === 'inicio' ? 'active bg-transparent' : ''}
              onClick={() => {
                setSelectedButton('inicio');
                selectedButtonRef.current = 'inicio';
                localStorage.setItem('selectedButton', 'inicio');
                navigate('/dashboard');
              }}
            >
            <AiOutlineHome className='text-2xl'/>
            <p className='text-sm'>Inicio</p>
        </button>

        <button 
          className={selectedButton === 'mis finanzas' ? 'active bg-transparent' : ''}
          onClick={() => {
            setSelectedButton('mis finanzas');
            selectedButtonRef.current = 'mis finanzas';
            localStorage.setItem('selectedButton', 'mis finanzas');
            
          }}>
            <BsGraphDown className='text-2xl'/>
            <p className='text-sm'>Mis finanzas</p>
        </button>


        <div className="dropdown dropdown-top flex justify-center items-center">
        <button tabIndex={0} className='flex flex-col justify-center items-center'>
            <HiOutlineCreditCard className='text-2xl'/>
            <p className='text-sm'>Debito</p>
        </button>
          <ul tabIndex={0} className="dropdown-content z-[1]  p-2 shadow bg-[#D9D9D9] rounded-t-xl w-screen -translate-x-[12.5%]">
            
              <li className='flex justify-right items-center gap-2 m-2'>
                <Link  to={"/denunciarTarjeta"} className='flex justify-right items-center gap-2' >
                  <PiProhibitBold className='text-3xl'/><p className='text-xl text-bold'>Denunciar tarjeta</p>
                </Link>
              </li>

            <li className='flex justify-right items-center gap-2 m-2'>
              <Link  to={"/limiteDiario"} className='flex justify-right items-center gap-2' >
              <CgArrowsExchangeAlt className='text-3xl'/><p className='text-xl text-bold'>Cambiar el limite diario</p>
              </Link>
            </li>
            <li className='flex justify-right items-center gap-2 m-2'><TbWorld className='text-3xl'/><p className='text-xl text-bold'>Dar aviso de viaje</p></li>
          </ul>
        </div>

        <button 
          className={selectedButton === 'ajustes' ? 'active bg-transparent' : ''}
          onClick={() => {
            setSelectedButton('ajustes');
            selectedButtonRef.current = 'ajustes';
            localStorage.setItem('selectedButton', 'ajustes');
            navigate('/ajustes');
          }}>
            <AiOutlineSetting className='text-2xl'/>
            <p className='text-sm'>Ajustes</p>
        </button>

    </div>
  )
}
