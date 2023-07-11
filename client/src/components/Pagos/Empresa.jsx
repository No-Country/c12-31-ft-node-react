import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";


function Empresa() {
  return (
    <>
      <div className="flex justify-around items-center m-5">
            <Link to={"/servicioPagar"}>
            <AiOutlineArrowLeft className="w-7 h-7" />
            </Link>

            <p className="text-center text-black text-2xl font-semibold">
            Personal
            </p>

            <div className="h-2 w-2"></div>
      </div>

      <div className="flex gap-5 justify-center mt-20">

      <select className="select select-bordered w-36 max-w-xs bg-[#D9D9D9]">
        <option>N de cuenta</option>
        <option>N de cliente</option>
        <option>Codigo de pago</option>
       </select>

       <input type="number" className="border-black border-2 p-2 rounded-md"/>
      </div>

      <div className="m-5">
        <p className="mt-10 text-xl font-semibold">Ingrese el monto a pagar</p>

        <div className="flex justify-center items-center mt-10">
        <input type="number"  className="border-none font-semibold w-56 h-20 text-center text-4xl" placeholder="$3500,70" />

        </div>

        <p className="mt-16 text-xl font-semibold">Elegir metodo de pago</p>

        <div className="mt-3 flex gap-3">

            <div className="w-28 h-14 rounded-md bg-[#D9D9D9] hover:bg-black duration-200">

            </div>

            <div className="w-28 h-14 rounded-md bg-[#D9D9D9] hover:bg-black duration-200">

            </div>

            <div className="w-28 h-14 rounded-md bg-[#D9D9D9] ">
                <div className="flex  justify-center items-center ">
                <AiOutlinePlus className="mt-5"/>
                </div>
            </div>

        </div>

        <div className="flex justify-center mt-36">
        <button className="btn btn-wide bg-[#D9D9D9]">Siguiente</button>
        </div>


      </div>

    </>
  );
}

export default Empresa;
