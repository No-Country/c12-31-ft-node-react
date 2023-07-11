import { AiOutlineArrowLeft } from "react-icons/ai";
import { data } from "./data";
import { NavBarBottom } from "../NavBarBottom/NavBarBottom";
import { Link } from "react-router-dom";

function ServicioPagar() {

  return (
    <>
      <div className="flex justify-around items-center m-5">

        <Link to={"/dashboard"}>
        <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>

        <p className="text-center text-black text-lg">
          ¿Que servicio queres pagar?
        </p>

        <div className="h-2 w-2">

        </div>

      </div>


      <div className="flex justify-center items-center gap-5">

      <button className="btn" onClick={()=>window.my_modal_1.showModal()}>Buscar Empresa</button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Elija una empresa</h3>

          <div className="flex flex-col text-center gap-5">
          <Link to={"/empresa"} className=" rounded-md p-2 bg-[#D9D9D9] hover:bg-[#909090] duration-200">Personal</Link>
          <p className=" rounded-md p-2 bg-[#D9D9D9] hover:bg-[#909090] duration-200">Claro</p>
          <p className=" rounded-md p-2 bg-[#D9D9D9] hover:bg-[#909090] duration-200">Telecom</p>
          <p className=" rounded-md p-2 bg-[#D9D9D9] hover:bg-[#909090] duration-200">Pay</p>
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>


        {/* <div className="flex justify-center items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-[#D9D9D9] w-64 p-3 rounded-xl"
              id="empresaInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label
              htmlFor="empresaInput"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                inputValue ? "hidden" : "block"
              }`}
            >
              <IoIosSearch className="h-7 w-7 inline-block mr-2" />
              <span className="inline-block">Buscar Empresa</span>
            </label>
          </div>
        </div> */}

      </div>

      <div className="m-10 mt-20">
        <p className="mt-10 text-lg">Ultimos servicios pagados</p>

        <div className="flex gap-3">
          {data.map((data) => (
            <div
              key={data.id}
              className="w-28 h-28 bg-[#D9D9D9] rounded-2xl mt-2"
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="bg-[#BBB9B9] rounded-full w-10 h-10 mt-4"></div>
                <p className="text-lg">{data.empresa}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-32">Historial</p>

        <div className="flex flex-col mt-5">
          {data.map((data) => (
            <div key={data.id} className="border-b-2 border-gray flex justify-between items-center m-2">
              <div className="flex gap-3">
                <div
                className="bg-[#D9D9D9] rounded-full w-8 h-8"
                ></div>

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
        <button type="button" className="font-bold hover:text-gray-400">Ver todos</button>

        </div>


        <div className="fixed bottom-0 left-0 right-0">
        <NavBarBottom/>
        </div>


      </div>
    </>
  );
}

export default ServicioPagar;
