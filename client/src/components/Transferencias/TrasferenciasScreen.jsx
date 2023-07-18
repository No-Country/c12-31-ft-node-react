import { BiHelpCircle } from 'react-icons/bi'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import JSON from '../data.json';
import { TransferenciasComponent } from './TransferenciasComponent';





export const TrasferenciasScreen = () => {
    
    const data = [];
    const movimientos = JSON;

    movimientos.filter (i => { 
      if(i.type === 'Transferencia'){
        data.push(i)
      }
    })
    
    const dataSplice = [...data];
    const dataShow = dataSplice.splice(0,4);

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

        <div className='w-full flex flex-col justify-center items-center my-10 text-[#FD7A09] gap-4 '>
            <button onClick={() => navigate('/transferencias1')} className='btn btn-wide rounded-full bg-orange-600 bg-opacity-30'>Nueva Transferencia</button>
            <button onClick={() => navigate('/realizadas')} className='btn btn-wide rounded-full my-2 border-gray-500'>Resumen de Transferencias</button>
            {/* <button onClick={() => navigate('/recibidas')} className='btn btn-wide rounded-full border-gray-500'>Transferencias recibidas</button> */}
        </div>

        <h1 className='mx-8 mt-14 text-xl font-semibold'>Recientes</h1>
        <div className='mt-5'>
            {
                dataShow.map((item, index) => (
                  (item.amount > 0) ?<TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Recibida'/> : <TransferenciasComponent initials={initials[index]} key={index} user={item.user} amount={item.amount} date={item.date} type={item.type} final= 'Enviada'/>      
          ))
            }
        </div>

        <div className='flex-grow'></div>
        <NavBarBottom />
    </div>
  )
}
