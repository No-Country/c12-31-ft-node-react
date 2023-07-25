import { BiHelpCircle } from 'react-icons/bi';
import { BsArrowLeftShort, BsFilter } from 'react-icons/bs';
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { useNavigate } from 'react-router-dom';
import JSON from '../dataMovimientos.json'
import { TransferenciasComponent } from './TransferenciasComponent';
import { allTransation } from '../../services/api';
import { useEffect, useState } from 'react';


export const TransferenciasRealizadas = () => {
  const [transactionData, setTransactionData] = useState([]);
  // const data = [];
  // const movimientos = JSON;
  // movimientos.filter (i => { 
  //   if(i.type === 'Transferencia'){
  //     data.push(i)
  //   }
  // })

  let initials = transactionData.map(item => {
    const nameParts = item.receiverName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[1] : '';
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    return initials;
  });

  const navigate = useNavigate()

  const dataTransaction = async () => {
    try {
      const data = await allTransation();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = await dataTransaction();
      setTransactionData(transactionData);
    };
    fetchData();
  }, []);




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
  
          <h1 className='mt-10 mx-5 text-lg'>{transactionData.length} resultados</h1>
  
  
          <main>
              {
                  transactionData.map((item, index) => (
                    (item.amount > 0) ?<TransferenciasComponent initials={initials[index]} key={index} user={item.receiverName} amount={item.amount} date={item.date} type={item.type} final= 'Recibida'/> : <TransferenciasComponent initials={initials[index]} key={index} user={item.receiverName} amount={item.amount} date={item.date} type={item.type} final= 'Enviada'/>            
                  ))
              }
          </main>
  
          <div className='flex-grow'></div>
  
  
          <NavBarBottom />
  
      </div>
    
  )
}

