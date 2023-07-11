import { BiUserCircle } from 'react-icons/bi'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

export const NavBar = () => {
  return (
    <div className="navbar bg-zinc-300 sticky top-0">
      <div className="flex justify-between w-full px-5 ">
        <div className='flex items-center'>
          <BiUserCircle className='text-4xl'/>
          <a className="btn btn-ghost normal-case text-xl">Hola Usuario</a>
        </div>
        <div className='items-center'>
          <AiOutlinePoweroff className='text-3xl' />
        </div>
      </div>
      
    </div>
  )
}
