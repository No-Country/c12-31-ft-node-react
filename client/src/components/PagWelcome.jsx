import fondo1 from '../assets/img/fondoBlanco_LogoVerde.svg'
import TarjetaCoin from "../components/Tarjetas/TarjetaCoin";
import { Link } from "react-router-dom";


const PagWelcome = () => {
  return (
    <>
      <p className="text-center  text-xl mt-16 uppercase">
        Carlos de las canarias
      </p>

      <h1 className="text-center  text-2xl mt-8 text-[#FD7A09] font-semibold">
        ¡Te damos la bienvenida a CountryCoin!
      </h1>

      <p className="text-center mt-10 text-lg">
        Estamos muy felices de tenerte aquí.
        <br />
        <br />
        Esperamos que disfrutes de todo este proceso, cualquier inconveniente,
        no olvides que estamos para ayudarte!
      </p>

      <div className="flex justify-center items-center">
        <h1 className="text-center  text-3xl  mt-12 w-72 font-semibold">
          Tu Visa débito está lista para usar
        </h1>
      </div>

      <div>
        <TarjetaCoin />
      </div>

      <p className="text-center">
        Verás más información en la página principal
      </p>

      <h2 className="text-center text-xl mt-10 font-medium">
        Para extraer efectivo acercate al cajero más cercano
      </h2>

      <div className="flex justify-center items-center">
        <Link to={"/dashboard"}>
        <button className="mt-14 text-center text-[#FD7A09] font-medium text-xl border-[#FD7A09] border-2 p-2 rounded-lg hover:bg-[#FD7A09] hover:text-white duration-200">
          Siguiente
        </button>
        </Link>
      </div>

      <div className="mt-10 " >
        <p className="text-center m-2">
          Por consultas o ayuda comunicate por mail a
          tubilleteravirtual@nombrebilletera.com o por teléfono al *555 / 0800
          555 333
        </p>
      </div>
    </>
  );
};

export default PagWelcome;
