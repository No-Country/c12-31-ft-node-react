import { Link } from "react-router-dom"

export default function PaginaError() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-center mt-52">
        PAGINA NO <span className="text-red-600">ENCONTRADA </span> 
         POR FAVOR VUELVA AL INICIO
      </h1>

      <div className="flex justify-center items-center mt-20">
      <Link to={"/"}>
      <button className="text-xl font-semibold text-white bg-[#FD7A09] p-2 rounded-lg w-56">
        Volver
      </button>
      </Link>
      </div>
    </>
  )
}
