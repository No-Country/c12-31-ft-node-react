import { React } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavBarBottom } from "../NavBarBottom/NavBarBottom";
import { Link } from "react-router-dom";

const LimiteDiario = () => {
/*   const [value, setValue] = React.useState(10); */

/*   const handleChange = (event) => {
    setValue(event.target.value);
  } */

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex justify-left items-center m-5">
        <Link to={"/dashboard"}>
          <AiOutlineArrowLeft className="w-7 h-7" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-left font-bold text-3xl ">Limite de tu NC Coin Card</h1>
          <p className="text-center font-bold text-l">Aquí podrás consultar y modificar los limites de tus compras diarias.</p>
        </div>
        <div className=" bg-[#D9D9D9] rounded-xl h-[380px] w-[380px] flex flex-col justify-center items-center gap-8">
          
        <input /* onChange={handleChange()}  */type="range" min={0} max="100" value= "10" className="range"  />
          
        </div>
        <div>
          <button className="btn btn-wide rounded-2xl bg-[#D9D9D9]  font-bold">
            Confirmar
          </button>
        </div>
      </div>
      <div>
        <NavBarBottom />
      </div>
    </div>
  );
};

export default LimiteDiario;
