import { AiOutlineClose } from 'react-icons/ai'
import { BiCopy } from "react-icons/bi";
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { Link } from 'react-router-dom';

export default function IngresarDinero() {
  return (
    <>
      <div className='flex justify-end m-5'>
        <Link to={"/dashboard"}>
        <AiOutlineClose className='w-8 h-8'/>
        </Link>
      </div>

      <div className='m-10'>
        <p className='text-lg font-semibold'>Recibe dinero al instante</p>

        <div className='mt-10 flex items-center justify-center gap-10'>

            <button className='bg-[#D9D9D9] p-2 w-44 rounded-lg text-lg h-16 hover:bg-[#aaaaaa]'>Pesos</button>

            <button className='bg-[#D9D9D9] p-2 w-44 rounded-lg text-lg h-16 hover:bg-[#aaaaaa]'>Otras</button>
        </div>

        <p className='text-lg font-semibold mt-8'>Estos son los datos de tu cuenta, deposita del modo que te parezca más facil</p>

        <div className='border-b-[2px] border-black flex justify-between mt-5'>
            <p className='font-bold text-lg'>CVU</p>

            <div className='flex gap-5'>
                <p className='m-1'>carpa.mepa.BV</p>
                <BiCopy className='w-8 h-8 m-1'/>
            </div>
        </div>

        <div className='border-b-[2px] border-black flex justify-between mt-5'>
            <p className='font-bold text-lg'>ALIAS</p>

            <div className='flex gap-5'>
                <p className='m-1'>carpa.mepa.BV</p>
                <BiCopy className='w-8 h-8 m-1'/>
            </div>
        </div>

        <p className='mt-10 font-semibold text-lg'>Puedes pedirle a un amigo de la red que te envié con el nombre de usuario. Luego le devuelves... </p>

        <div className='border-b-[2px] border-black flex justify-between mt-5'>
            <p className='font-bold text-lg'>USUARIO</p>

            <div className='flex gap-5'>
                <p className='m-1'>Mario.C</p>
                <BiCopy className='w-8 h-8 m-1'/>
            </div>
        </div>

        <div className='flex justify-center m-auto items-center mt-20'>
            <button className='bg-[#acacac] hover:bg-[#D9D9D9] w-44 h-16 rounded-3xl font-semibold duration-200'>Compartir</button>
        </div>

      </div>

      <NavBarBottom/>
    </>
  )
}
