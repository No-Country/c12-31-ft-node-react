import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { NavBarBottom } from '../NavBarBottom/NavBarBottom'
import { Link } from 'react-router-dom'

const AvisoViaje = () => {
  const [destino, setDestino] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

const handleDestino = (e) =>{
  setDestino(e.target.value)
};
const handleFechaInicio = (e) =>{
  setFechaInicio(e.target.value)
}
const handleFechaFin = (e) =>{
  setFechaFin(e.target.value)
};

  
  return (
    <div className='flex flex-col justify-between h-screen'>
            <div className="flex justify-left items-center m-5" > 
        <Link to={"/dashboard"}> 
          <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center h-full gap-6'>
        <div className='flex justify-center items-center'>
        <h1 className='text-center font-bold text-4xl '>Dar aviso de viaje</h1>
        </div>
        <div className=" bg-[#D9D9D9] rounded-xl h-[380px] w-[380px] flex flex-col justify-center items-center gap-8 gradient-orange">
        
        
            <input type="text" placeholder="Destino" className="input w-full max-w-xs" value={destino} onChange={handleDestino}/>
            <input type="date" placeholder="Fecha de inicio del viaje" className="input w-full max-w-xs" value={fechaInicio} onChange={handleFechaInicio} />
            <input type="date" placeholder="Fecha de retorno del viaje" className="input w-full max-w-xs" value={fechaFin} onChange={handleFechaFin} />
          
          

        
        </div>
      <div>
        <button className='btn btn-wide rounded-2xl bg-[#D9D9D9] text-xl font-bold text-[#FD7A09]'onClick={()=>window.my_modal_1.showModal()}> Confirmar</button>
        
        
          <dialog id="my_modal_1" className="modal ">
            <form method="dialog" className="modal-box gradient-orange">
              <h3 className="font-bold text-lg">Gracias por avisarnos de tu viaje!!</h3>
              <p className="pt-4">Deseamos que disfrutes tu estadia en {destino}</p>
              <p >desde el {fechaInicio} hasta el {fechaFin}!</p>
              <div className="modal-action">
                <Link to={"/dashboard"}> 
                  <button className="btn ">Cerrar</button>
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

export default AvisoViaje