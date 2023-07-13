import { MdOutlineNotificationsNone } from 'react-icons/md'
import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'
import { BsGraphDown } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {HiOutlineCreditCard} from 'react-icons/hi'
import {PiProhibitBold} from 'react-icons/pi'
import {TbWorld} from 'react-icons/tb'
import {CgArrowsExchangeAlt} from 'react-icons/cg'



export const NavBarBottom = () => {

    const navigate = useNavigate()


  return (
    <div className="btm-nav sticky bottom-0 items-center">
        <button /* className="active" */ onClick={() => navigate('/dashboard')}>
            <AiOutlineHome className='text-2xl'/>
            <p className='text-sm'>Inicio</p>
        </button>

        <button >
            <BsGraphDown className='text-2xl'/>
            <p className='text-sm'>Mis finanzas</p>
        </button>


        <div className="dropdown dropdown-top flex justify-center items-center">
        <button tabIndex={0} className='flex flex-col justify-center items-center'>
            <HiOutlineCreditCard className='text-2xl'/>
            <p className='text-sm'>Debito +</p>
        </button>
          <ul tabIndex={0} className="dropdown-content z-[1]  p-2 shadow bg-[#D9D9D9] rounded-t-xl w-screen -translate-x-[12.5%]">
            <li className='flex justify-right items-center gap-2'><PiProhibitBold className='text-3xl'/><p className='text-2xl text-bold'>Denunciar tarjeta</p></li>
            <li className='flex justify-right items-center gap-2'><CgArrowsExchangeAlt className='text-3xl'/><p className='text-2xl text-bold'>Cambiar el limite diario</p></li>
            <li className='flex justify-right items-center gap-2'><TbWorld className='text-3xl'/><p className='text-2xl text-bold'>Dar aviso de viaje</p></li>
          </ul>
        </div>

        <button>
            <AiOutlineSetting className='text-2xl'/>
            <p className='text-sm'>Ajustes</p>
        </button>

    </div>
  )
}
