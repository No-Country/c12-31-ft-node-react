import { BiHelpCircle } from 'react-icons/bi';
import { BsArrowLeftShort, BsFilter } from 'react-icons/bs';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { useNavigate } from 'react-router-dom';
import { TransferenciasComponent } from './TransferenciasComponent';
import { allTransation } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/useUserContext';



export const TransferenciasRealizadas = () => {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()


  const receiverTransactions = user.user.wallet.receiverTransactions;
  const senderTransactions = user.user.wallet.senderTransactions;
  

  
  const dataSplice = [
    ...(receiverTransactions || []),
    ...(senderTransactions || []),
  ];
  
  let initials = dataSplice.map(item => {
    const nameParts = item.senderName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[1] : '';
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    return initials;
  });


  return (

      <div className='min-h-screen flex flex-col'>
          <header className='flex justify-between px-5 py-5 items-center'>
              <div className='flex items-center'>
                  <BsArrowLeftShort onClick={()=> navigate('/transferencias')} className='text-4xl mx-3'/>
                  <h1 className='text-lg'>Resumen</h1>
              </div>
              <div>
                  <BiHelpCircle className='text-3xl'/>
              </div>
          </header>
  
          <div className='flex justify-between w-full items-center px-5'>
              <input type="text" placeholder="Buscar" className="input input-bordered h-10 w-3/4 rounded-full bg-gray-200 text-lg" />
              <BsFilter className='text-4xl '/>
          </div>
  
          <h1 className='mt-10 mx-5 text-lg'>{dataSplice.length} resultados</h1>
  
  
          <main>
              {
                  dataSplice.map((item, index) => (
                    (item.amount > 0) ?<TransferenciasComponent initials={initials[index]} key={index} user={item.senderName} amount={item.amount} date={item.date} type={item.type} final= 'Recibida'/> : <TransferenciasComponent initials={initials[index]} key={index} user={item.receiverName} amount={item.amount} date={item.date} type={item.type} final= 'Enviada'/>            
                  ))
              }
          </main>
  
          <div className='flex-grow'></div>
  
  
          <NavBarBottom />
  
      </div>
    
  )
}

