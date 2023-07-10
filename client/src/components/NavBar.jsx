import { BiUserCircle } from 'react-icons/bi'
import { AiFillCloseSquare } from 'react-icons/ai'

export const NavBar = () => {
  return (
    <div className="navbar bg-zinc-300 sticky top-0">
      <div className="flex justify-between w-full px-5 ">
        <div className='flex items-center'>
          <BiUserCircle className='text-4xl'/>
          <a className="btn btn-ghost normal-case text-xl">Hola Usuario</a>
        </div>
        <div className='items-center'>
          <AiFillCloseSquare className='text-4xl' />
        </div>
      </div>
      
    </div>
  )
}
