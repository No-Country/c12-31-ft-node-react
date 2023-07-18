import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function ResumenPago() {
  return (
    <>
        <div className="flex justify-around items-center m-5">
            <Link to={"/empresa"}>
            <AiOutlineArrowLeft className="w-7 h-7" />
            </Link>

            <p className="text-center text-black text-3xl font-semibold">
            Resumen de pago
            </p>

            <div className="h-2 w-2"></div>
      </div>

      <div className="m-5 mt-10 flex flex-col gap-3">
        <p className="text-black text-xl ">Usted esta por pagar:</p>
        <p className="text-black text-xl ">Personal N°00225566943542 </p>
        <p className="text-black text-xl ">Miguel Martinez</p>
      </div>

      <div className="flex justify-center items-center m-auto mt-20">
        <p className="text-center text-black text-3xl font-semibold">Total: $3250,70</p>
      </div>

      <p className="mt-20 m-5  text-lg">Seleccionó Visa débito terminada en 656</p>

      <div className="flex flex-col justify-center items-center m-auto mt-20 gap-5">
        <button className="bg-[#D9D9D9] p-3 w-72 rounded-lg font-semibold text-lg hover:bg-[#acacac] duration-200">
            Modificar Datos
        </button>

        <Link to={"/finPagos"}>
        <button className="bg-[#D9D9D9] p-3 w-72 rounded-lg font-semibold text-lg hover:bg-[#acacac] duration-200">
            Confirmar
        </button>
        </Link>

      </div>
    </>
  )
}
