import { React, useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavBarBottom } from "../NavBarBottom/NavBarBottom";
import { Link } from "react-router-dom";

const LimiteDiario = () => {
    const [rangeValue, setRangeValue] = useState(100); 

    const handleChange = (event) => {
      const newValue = parseInt(event.target.value);
      setRangeValue(newValue);
      
      }  

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex justify-left items-center m-5">
        <Link to={"/dashboard"}>
          <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-6 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-left font-bold text-3xl ">Limite de tu NC Coin Card</h1>
          <p className="text-center font-bold text-l px-3">Aquí podrás consultar y modificar los limites de tus compras diarias.</p>
        </div>
        <div className=" bg-[#D9D9D9] rounded-xl h-[380px] w-[380px] flex flex-col justify-center items-center gap-8 gradient-orange">
        <div>
          <p className='text-lg font-bold' >Monto diario de extracción= ${rangeValue} </p>
        </div>
        <input   onChange={handleChange}    type="range" min={1000} max={100000} value={rangeValue} step={100}  className="range w-[80%]"  />
          
        </div>
        <div>
          <button className='btn btn-wide rounded-2xl bg-[#D9D9D9] text-xl font-bold' onClick={()=>window.my_modal_1.showModal()}>Confirmar</button>
        
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box gradient-orange">
            <h3 className="font-bold text-lg">Cambio confirmado!</h3>
            <p className="py-4">A partir de ahora tu limite de extraccion diaria es</p>
            <p >de <strong>${rangeValue}</strong> con tu tarjeta de debito!</p>
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
        <NavBarBottom />
      </div>
    </div>
  );
};

export default LimiteDiario;
