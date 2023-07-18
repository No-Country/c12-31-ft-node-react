import { AiOutlineArrowLeft } from "react-icons/ai";
import { data } from "./data";
import { NavBarBottom } from "../NavBarBottom/NavBarBottom";
import { Link } from "react-router-dom";
import SliderServicios from "./SliderServicios";

function ServicioPagar() {

  return (
    <>
      <div className="flex justify-around items-center m-5 bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] p-4 rounded-lg shadow-gray-300 shadow-lg">

        <Link to={"/dashboard"}>
        <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>

        <p className="text-center text-black text-2xl">
          Pagar servicios
        </p>

        <div className="h-2 w-2">

        </div>

      </div>


      <div className="flex justify-center items-center gap-5">

      <button className="btn border-2 border-[#FD7A09] mt-5 bg-transparent hover:bg-[#FD7A09] hover:text-white" onClick={()=>window.my_modal_1.showModal()}>Buscar Servicio</button>

      {/* MODAL  */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-center p-3 text-lg">Elija una empresa</h3>

          <div className="flex flex-col text-center gap-5">
          <Link to={"/empresa"} className=" rounded-md p-2 bg-[#FD7A09] hover:bg-green-500 duration-200 text-white text-xl">Movistar</Link>
          <p className=" rounded-md p-2 bg-[#FD7A09] hover:bg-green-500 duration-200 text-white text-xl">Flow</p>
          <p className=" rounded-md p-2 bg-[#FD7A09] hover:bg-green-500 duration-200 text-white text-xl">Netflix</p>
          <p className=" rounded-md p-2 bg-[#FD7A09] hover:bg-green-500 duration-200 text-white text-xl">Aysa</p>
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-red-500 text-white">Cerrar</button>
          </div>
        </form>
      </dialog>
      </div>


      <div className="m-10 mt-20">
        <p className="mt-10 text-lg font-bold">Favoritos</p>

        {/* SLIDER  */}
        <SliderServicios/>

        
        {/* HISTORIAL  */}
        <p className="mt-20">Historial</p>
        <div className="flex flex-col mt-5">
          {data.map((data) => (
            <div key={data.id} className="border-b-2 border-green-200 flex justify-between items-center m-2">
              <div className="flex gap-3">
                <div
                >
                  <img src={data.img} alt={data.empresa} className=" bg-green-200 rounded-full w-12 h-12 p-2"/>
                </div>

                <div className="flex flex-col">
                    <p>{data.empresa}</p>
                    <p>{data.fecha}</p>
                </div>
              </div>

              <div>
                <p>{data.monto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
        <button type="button" className="font-bold hover:text-gray-400 mb-10">Ver todos</button>

        </div>


        {/* NAVBAR  */}
        <div className="fixed bottom-0 left-0 right-0">
        <NavBarBottom/>
        </div>


      </div>
    </>
  );
}

export default ServicioPagar;
