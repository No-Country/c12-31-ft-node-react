import { AiOutlineArrowLeft } from 'react-icons/ai'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom'
import { Link } from 'react-router-dom'

const DenunciarTarjeta = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
            <div className="flex justify-left items-center m-5" > 
        <Link to={"/dashboard"}> 
          <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center h-full gap-6'>
        <div className='flex justify-center items-center'>
        <h1 className='text-center font-bold text-4xl '>Denunciar Tarjeta</h1>
        </div>
        <div className=" bg-[#D9D9D9] rounded-xl h-[380px] w-[380px] flex flex-col justify-center items-center gap-8">
        
        <div className="form-control bg-gray-400 px-6 w-4/5 items-center rounded-xl">
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Perdida</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black"  />
            </label>
          </div>
          
          <div className="form-control bg-gray-400 px-6 w-4/5 items-center rounded-xl">
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Robo</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black"  />
            </label>
          </div>
          
          <div className="form-control  bg-gray-400 px-6 w-4/5 items-center rounded-xl">
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left  w-40 ">Destrucción</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black"  />
            </label>
          </div>

          <div className="form-control bg-gray-400 px-6 w-4/5 items-center rounded-xl">
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Otro</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black"  />
            </label>
          </div>
        
        </div>
      <div>
        <button className='btn btn-wide rounded-2xl bg-[#D9D9D9]  font-bold'>Confirmar</button>
      </div>

      </div>
      <div>
        <NavBarBottom/>
      </div>
    </div>
  )
}

export default DenunciarTarjeta