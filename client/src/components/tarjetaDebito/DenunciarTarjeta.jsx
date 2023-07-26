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
        <div className=" bg-[#D9D9D9] rounded-xl h-[380px] w-[380px] flex flex-col justify-center items-center gap-8 gradient-orange">
        
        <div className="form-control px-5 items-center rounded-xl" style={{background: 'rgba( 255, 255, 255, 0.4 )',
        backdropFilter: 'blur( 15.5px )'}}>
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Perdida</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black border-[3px] border-[#3ED62B]"  />
            </label>
          </div>
          
          <div className="form-control px-5 items-center rounded-xl" style={{background: 'rgba( 255, 255, 255, 0.4 )',
        backdropFilter: 'blur( 15.5px )'}}>
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Robo</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black border-[3px] border-[#3ED62B]"  />
            </label>
          </div>
          
          <div className="form-controll px-5 items-center rounded-xl" style={{background: 'rgba( 255, 255, 255, 0.4 )',
        backdropFilter: 'blur( 15.5px )'}}>
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left  w-40 ">Destrucción</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black border-[3px] border-[#3ED62B]"  />
            </label>
          </div>

          <div className="form-control px-5 items-center rounded-xl" style={{background: 'rgba( 255, 255, 255, 0.4 )',
        backdropFilter: 'blur( 15.5px )'}}>
            <label className="label cursor-pointer flex justify-start items-center gap-10">
              <span className="label-text text-xl font-bold text-left w-40 ">Otro</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-black border-[3px] border-[#3ED62B]"  />
            </label>
          </div>
        
        </div>
      <div>
        <button className='btn btn-wide rounded-2xl bg-[#D9D9D9] text-xl font-bold text-red-600' onClick={()=>window.my_modal_1.showModal()}>Confirmar</button>
        
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box gradient-orange">
              <h3 className="font-bold text-lg">Ya tomamos tu denuncia!</h3>
              <p className="py-4">Ya pusimos en marcha una nueva reimpresion de tu tarjeta</p>
              <p >y te la vamos a estar enviando a tu casa en los proximos dias!</p>
              <div className="modal-action">
                <Link to={"/dashboard"}> 
                  <button className="btn">Cerrar</button>
                </Link>
              </div>
            </form>
          </dialog>
      </div>

      </div>
      <div>
        <NavBarBottom/>
      </div>
    </div>
  )
}

export default DenunciarTarjeta