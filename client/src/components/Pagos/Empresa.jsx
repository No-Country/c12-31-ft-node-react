import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import SliderEmpresa from "./SliderEmpresa";



function Empresa() {
  return (
    <>
      <div className="flex justify-around items-center m-5">
            <Link to={"/servicioPagar"}>
            <AiOutlineArrowLeft className="w-8 h-8" />
            </Link>

            <p className="text-center text-black text-3xl ">
            Movistar
            </p>

            <div className="h-2 w-2"></div>
      </div>

      <div className="flex gap-5 justify-center items-center mt-20">

        <label htmlFor="nCuenta" className="BtnPagosFondo p-2 w-36 text-center font-semibold rounded-md shadow-lg shadow-gray-400">N de Cuenta</label>

       <input type="number" id="nCuenta" className="border-green-400 border-2 p-2 rounded-md"/>
      </div>

      <div className="m-5">
        <p className="mt-10 text-xl ">Ingrese el monto a pagar</p>

        <div className="flex justify-center items-center mt-10">
        <input type="number"  className="border-none font-semibold w-56 h-20 text-center text-4xl" placeholder="$3500,70"/>

        </div>

        <p className="mt-16 text-xl ">Elegir metodo de pago</p>

        <div className="mt-10">
        <SliderEmpresa/>
        </div>

        <div className="flex justify-center mt-36">
        <Link to={"/resumenPagos"}>
        <button className="btn  border-2 rounded-full border-[#FD7A09] text-[#FD7A09] hover:bg-[#ffa251a4]">Siguiente</button>
        </Link>
        </div>


      </div>
      

    </>
  );
}

export default Empresa;
