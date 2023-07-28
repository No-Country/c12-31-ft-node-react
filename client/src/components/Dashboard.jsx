import { NavBar } from './NavBar'
import {AiOutlineCreditCard, AiOutlinePlus } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { BsPhone } from "react-icons/bs";
import { UserContext } from "../context/useUserContext";
import { useContext, useEffect, useState } from "react";
import { NavBarBottom } from './NavBarBottom/NavBarBottom';
import { Link } from 'react-router-dom';
import "../components/tarjetaDebito/style.css";
import { FiPlus } from 'react-icons/fi';
import {TransferenciasComponent} from './Transferencias/TransferenciasComponent'
import JSON from './dataMovimientos.json'
import { allTransation } from '../services/api';

// SLIDER DE LAS TARJETAS 
import SliderTarjetas from './Tarjetas/SliderTarjetas';

export const Dashboard = () => {
  function formatearFecha(fecha) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    // Agregar ceros iniciales si es necesario para obtener el formato "dd/mm/yyyy"
    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
  
    return `${diaFormateado}/${mesFormateado}/${anio}`;
  }
  const { user } = useContext(UserContext);
  console.log(user)


  const receiverTransactions = user.user.wallet.receiverTransactions;
  const senderTransactions = user.user.wallet.senderTransactions;
  

  const dataSplice = [
    ...(receiverTransactions || []),
    ...(senderTransactions || []),
  ];
  const dataShow = dataSplice.slice(0,3);


  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar className=''/>

      <div className='flex w-full pt-5 px-4 pb-8'>

        <div className=' w-2/4 '>
          <h1 className='text-xl mb-8'>Saldo actual</h1>
          <div className='flex justify-between'>

            <h1 className='text-3xl font-bold'>${user.user.wallet.balancePesos}</h1>

            {/* <h1 className='text-3xl font-bold'>${user.user.wallet.balanceDollars}</h1> */}

          </div>
        </div>
        {/* <div className='w-10'></div> */}
        <div className=' w-2/4 flex flex-col items-end'>
        <button className="btn btn-sm mb-8 text-[#3ED62B]">CVU</button>     
          <Link to={"/ingresarDinero"}>
          <button className="btn btn-sm w-full text-[#3ED62B]">Ingresar dinero</button>     
          </Link>
          
        </div>
        
      </div>

      <h1 className='text-2xl ml-5'>Mis tarjetas</h1>
      <div className="flex flex-col justify-center items-center w-full gap-[30px]">
      <div>
        {/* SLIDER TARJETAS  */}
        <div className=" bg-[#ffffff] rounded-xl h-[280px] w-[380px]  ">
          <SliderTarjetas/>
        </div>
      </div>
      
      <div className=" bg-[#ffffff] rounded-xl h-auto w-[380px] flex flex-col justify-between items-center m-5">
        <div className='flex justify-between items-start px-3 pt-3 w-full'>
          <p className='text-xl mb-5'>Ultimos Movimientos</p>
          <Link to={'/movimientos'}>
          <p className='flex items-center justify-center text-xl'>Ver <FiPlus className='h-7 w-7'/></p>
          </Link>
        </div>
        <div className='w-full'>
        {
               dataShow && dataShow.map((item, index) => (
                  // (item.amount > 0) ?<TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Recibida'/> : <TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Enviada'/>
                  (item.amount > 0) ?<TransferenciasComponent initials={item.senderName[0]} key={index} user={item.senderName} amount={item.amount} date={formatearFecha(new Date(item.creationDate))} type={"Transferencia"} final= 'Recibida'/> : <TransferenciasComponent initials={item.receiverName[0]} key={index} user={item.receiverName} amount={item.amount} date={formatearFecha(new Date(item.creationDate))} type={"Pago"} final= 'Enviada'/>            
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
              <div className='bg-[#fd7b0915]  rounded-full h-14 w-14 flex items-center justify-center'>
                <AiOutlineCreditCard className='text-3xl text-[#FD7A09]' />
              </div>
              <h5 className='text-center'>Pagos</h5>
            </Link>
            </div>

            <div className="flex flex-col items-center w-1/4 ">
              <Link to="/transferencias" className="flex flex-col items-center">
                <div className="bg-[#fd7b0915] rounded-full h-14 w-14 flex items-center justify-center">
                  <BiTransfer className="text-3xl text-[#FD7A09]" />
                </div>
                <h5>Transferencias</h5>
              </Link>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-[#fd7b0915] rounded-full h-14 w-14 flex items-center justify-center">
                <BsPhone className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Recargas</h5>
            </div>
          </div>
        </div>
        <div className="w-screen mb-10 text-[#FD7A09]">
          <div className="flex items-center justify-around mx-3 mt-8">
            <div className="flex flex-col items-center w-1/4 px-10">
              <div className="bg-[#fd7b0915] rounded-full h-14 w-14 flex items-center justify-center">
                <LiaPiggyBankSolid className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Inversiones</h5>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-[#fd7b0915] rounded-full h-14 w-14 flex items-center justify-center">
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
