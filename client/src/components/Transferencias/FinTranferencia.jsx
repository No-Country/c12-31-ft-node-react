import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineDownload } from "react-icons/ai"
import {IoArrowRedoSharp} from 'react-icons/io5'
import {PiCopy} from 'react-icons/pi'
import { Link } from "react-router-dom"
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import img1 from  '../../assets/img/sonrisa.png';
import img2 from  '../../assets/img/triste.png';






const FinTranferencia = () => {
  const [tranferencia, setTranferencia] = useState(true);

  const tranferenciaCompleta = () => {
    setTranferencia(!tranferencia);
  }

  let optionRenderTransferencia;
  let date = new Date();

  if(tranferencia){ 
      optionRenderTransferencia = (
      <div className="flex flex-col justify-arround items-center m-5 h-full gap-[50px] ">
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="text-3xl font-bold">¡Transferencia realizada con exito!</h1>
        </div>
        <div className='flex justify-center items-center bg-[#D9D9D9] w-[300px] h-[300px] rounded-full '>
          <div className='flex  justify-center items-center w-[250px] h-[250px] rounded-full'>
            <img className='object-cover 'src={img1} alt="" />
          </div>
          </div>
          <div className='flex flex-col justify-between items-center w-[350px] h-[150px] bg-[#D9D9D9] rounded-xl'>
            <div className='flex justify-between items-center h-1/2 w-full mt-4 gap-[20px]'>
              <div className='flex justify-center items-center pl-6'>
                <p className='text-xl'> {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()} {date.getHours()}:{date.getUTCMinutes()}</p>
              </div>
              <div className='flex justify-around items-center gap-[10px] pr-6'>
                <div>
                <PiCopy className="w-7 h-7"/>
                </div>
                <div>
                <IoArrowRedoSharp className="w-7 h-7"/>
                </div>
                <div>
                <AiOutlineDownload className="w-7 h-7"/>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center h-1/2 mb-4'>
              <p className='text-xl font-bold'>Comprobante N° 0026</p>
            </div>
          </div>
        <div className='flex justify-evenly items-center w-[350px] mb-4'>
          <Link to={"/dashboard"}>
            <button className='bg-[#D9D9D9] hover:bg-[#909090] duration-200 rounded-2xl font-bold px-4 py-2'>Volver al inicio</button>
          </Link>
          <Link to={"/transferencias"}>
            <button className='bg-[#D9D9D9] hover:bg-[#909090] duration-200 rounded-2xl font-bold px-4 py-2'>Otra transferencia</button>
          </Link>
        </div>
      </div>
    )
} else{
  optionRenderTransferencia = (
    <div className="flex flex-col justify-arround items-center m-5 h-full gap-[50px] ">
    <div className="flex flex-col justify-center items-center text-center ">
      <h1 className="text-3xl font-bold">¡Transferencia fallida!</h1>
    </div>
    <div className='flex justify-center items-center bg-[#D9D9D9] w-[300px] h-[300px] rounded-full '>
      <div className='flex  justify-center items-center w-[250px] h-[250px] rounded-full'>
        <img className='object-cover overflow-visible'src={img2} alt="" />
      </div>
      </div>
      <div className='flex flex-col justify-center items-center w-[350px] h-[150px] bg-[#D9D9D9] rounded-xl'>
        <div className='flex justify-center items-center'>
          <p className='text-xl font-bold'>Reintentalo mas tarde</p>
        </div>
      </div>
    <div className='flex justify-evenly items-center w-[350px] mb-4'>
      <Link to={"/dashboard"}>
        <button className='bg-[#D9D9D9] hover:bg-[#909090] duration-200 rounded-2xl font-bold px-4 py-2'>Volver al inicio</button>
      </Link>
      <Link to={"/transferencias"}>
        <button className='bg-[#D9D9D9] hover:bg-[#909090] duration-200 rounded-2xl font-bold px-4 py-2'>Reintentar transferencia</button>
      </Link>
    </div>
  </div>
)
}
  
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className="flex justify-left items-center m-5" > 
        <Link to={"/dashboard"}> 
          <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>
      </div>
      <div>
        {optionRenderTransferencia}
      </div>
      <NavBarBottom/>
    </div>
  )
}

export default FinTranferencia