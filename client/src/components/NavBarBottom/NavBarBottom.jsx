import { MdOutlineNotificationsNone } from 'react-icons/md'
import { AiOutlineSetting, AiOutlineHome } from 'react-icons/ai'
import { BsGraphDown } from 'react-icons/bs'




export const NavBarBottom = () => {
  return (
    <div className="btm-nav sticky bottom-0 items-center">
        <button className="active">
            <AiOutlineHome className='text-2xl'/>
            <p className='text-sm'>Inicio</p>
        </button>

        <button >
            <BsGraphDown className='text-2xl'/>
            <p className='text-sm'>Mis finanzas</p>
        </button>

        <button>
            <MdOutlineNotificationsNone className='text-2xl'/>
            <p className='text-sm'>Notificaciones</p>
        </button>

        <button>
            <AiOutlineSetting className='text-2xl'/>
            <p className='text-sm'>Ajustes</p>
        </button>

    </div>
  )
}
