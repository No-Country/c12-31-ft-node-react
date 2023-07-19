import { NavBar } from './NavBar'
import {AiOutlineCreditCard, AiOutlinePlus } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { BsPhone } from "react-icons/bs";
import { UserContext } from "../context/useUserContext";
import { useContext } from "react";
import { NavBarBottom } from './NavBarBottom/NavBarBottom';
import { Link } from 'react-router-dom';
import "../components/tarjetaDebito/style.css";
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import {TransferenciasComponent} from './Transferencias/TransferenciasComponent'
import JSON from './dataMovimientos.json'

// SLIDER DE LAS TARJETAS 
import SliderTarjetas from './Tarjetas/SliderTarjetas';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  
  const data = JSON;

  const dataSplice = [...data];
  const dataShow = dataSplice.splice(0,3);

  let initials = data.map(item => {
    const nameParts = item.user.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[1] : '';
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    return initials;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar className=''/>

      <div className='flex w-full pt-5 px-4 pb-8'>

        <div className=' w-2/4 '>
          <h1 className='text-xl mb-8'>Saldo actual</h1>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>$28.500</h1>
          </div>
        </div>
        {/* <div className='w-10'></div> */}
        <div className=' w-2/4 flex flex-col items-end'>
        <button className="btn btn-sm mb-8 text-[#3ED62B]">TU CVU</button>     
          <Link to={"/ingresarDinero"}>
          <button className="btn btn-sm w-full text-[#3ED62B]">Ingresar dinero</button>     
          </Link>
          
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-[50px]">
      <div>
        {/* SLIDER TARJETAS  */}
        <div className=" bg-[#ffffff] rounded-xl h-[280px] w-[380px]  ">
          <SliderTarjetas/>
        </div>
      </div>
      
      <div className=" bg-[#ffffff] rounded-xl h-[320px] w-[380px] flex flex-col justify-between items-center m-5">
        <div className='flex justify-between items-start px-3 pt-3 w-full'>
          <p className='text-xl '>Ultimos Movimientos</p>
          <Link to={'/movimientos'}>
          <p className='flex items-center justify-center text-xl'>Ver <FiPlus className='h-7 w-7'/></p>
          </Link>
        </div>
        <div className='w-full'>
        {
                dataShow.map((item, index) => (
                  (item.amount > 0) ?<TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Recibida'/> : <TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Enviada'/>      
          ))
            }
        </div>
      </div>
      
      </div>

      <div className='flex flex-col justify-center items-center min-h-full'>
        <div className='w-screen'>

          <div className='flex items-center justify-around px-3 pt-3 text-[#FD7A09]'>

            <div className='flex flex-col items-center w-1/4'>
              <Link to='/servicioPagar'>
              <div className='bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center'>
                <AiOutlineCreditCard className='text-3xl text-[#FD7A09]' />
              </div>
              <h5 className='text-center'>Pagos</h5>
            </Link>
            </div>

            <div className="flex flex-col items-center w-1/4 ">
              <Link to="/transferencias" className="flex flex-col items-center">
                <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                  <BiTransfer className="text-3xl text-[#FD7A09]" />
                </div>
                <h5>Transferencias</h5>
              </Link>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <BsPhone className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Recargas</h5>
            </div>
          </div>
        </div>
        <div className="w-screen mb-10 text-[#FD7A09]">
          <div className="flex items-center justify-around mx-3 mt-8">
            <div className="flex flex-col items-center w-1/4 px-10">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <LiaPiggyBankSolid className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Inversiones</h5>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <AiOutlinePlus className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Movimientos</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>

      <NavBarBottom />
    </div>
  );
};
