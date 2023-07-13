import { MdOutlineNotificationsNone } from 'react-icons/md'
import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'
import { BsGraphDown } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {HiOutlineCreditCard} from 'react-icons/hi'





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

        <button>
            <HiOutlineCreditCard className='text-2xl'/>
            <p className='text-sm'>Debito +</p>
        </button>

        <button>
            <AiOutlineSetting className='text-2xl'/>
            <p className='text-sm'>Ajustes</p>
        </button>

    </div>
  )
}
