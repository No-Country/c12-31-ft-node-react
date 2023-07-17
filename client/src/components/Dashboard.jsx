
import { NavBar } from './NavBar'
import { AiOutlineEye, AiOutlineCreditCard, AiOutlinePlus } from "react-icons/ai";

import { BiTransfer } from "react-icons/bi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { BsPhone } from "react-icons/bs";
import { UserContext } from "../context/useUserContext";
import { useContext } from "react";

import { NavBarBottom } from './NavBarBottom/NavBarBottom';
import { Link } from 'react-router-dom';
import { TbEyeClosed, TbEye } from "react-icons/tb";
import "../components/tarjetaDebito/style.css";
import { useState } from 'react';

export const Dashboard = () => {
  const [verNumeros, setVerNumeros] = useState(true); 
  const { user } = useContext(UserContext);
  

  const mostrarNumeros = ()=>{
    setVerNumeros(!verNumeros)
  }

  let toogleButton;

  let tarjNumber1;
  let tarjNumber2;
  let tarjNumber3;
  let tarjNumber4 = (Math.ceil(Math.random() * (10000))).toString().padStart(4,'0')

  if(verNumeros){
    toogleButton = <div onClick={mostrarNumeros}>
      <TbEye className="w-8 h-8" />
    </div>
    tarjNumber1 = Math.ceil(Math.random() * (1000)+5000);
    tarjNumber2 = (Math.ceil(Math.random() * (10000))).toString().padStart(4,'0');
    tarjNumber3 = (Math.ceil(Math.random() * (10000))).toString().padStart(4,'0');
  }else{
    toogleButton =  <div onClick={mostrarNumeros}>
                      <TbEyeClosed className="w-8 h-8" />
                    </div>
    tarjNumber1 = '****';
    tarjNumber2 = '****';
    tarjNumber3 = '****';
  }

  const name = "Perez Juan";
  const expDate = new Date();
  
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className='flex w-full pt-5 px-4 pb-8'>

        <div className=' w-2/4 '>
          <h1 className='text-xl mb-8'>Saldo actual</h1>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>$28.500</h1>
            <AiOutlineEye className='text-4xl' />
          </div>
        </div>
        {/* <div className='w-10'></div> */}
        <div className=' w-2/4 flex flex-col items-end'>
        <button className="btn btn-sm mb-8 text-[#3ED62B]">TU CVU</button>     
          <Link to={"/ingresarDinero"}>
          <button className="btn btn-sm w-full text-[#3ED62B]">Ingresar dinero</button>     
          </Link>
          
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-[50px]">
      <div>
      <div className='flex justify-end items-center m-5'>
        {toogleButton}
      </div>
      <div className=" bg-[#D9D9D9] rounded-xl h-[280px] w-[380px] flex flex-col justify-center items-center">
        <div className="card">
          <div className="flip">
            <div className="front">
              <div className="chip">
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-line"></div>
                <div className="chip-main"></div>
              </div>
              <svg className="wave" viewBox="0 3.71 26.959 38.787" width="20" height="30" fill="white">
                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
              </svg>
              <div className="card-number"> 
                <div className="section">{tarjNumber1}</div>
                <div className="section">{tarjNumber2}</div>
                <div className="section">{tarjNumber3}</div>
                <div className="section">{tarjNumber4}</div>
              </div>
              <div className="end"><span className="end-text">exp. end:</span><span className="end-date">{expDate.getMonth()+1}/{expDate.getFullYear() + 4}</span></div>
              <div className="card-holder">{name}</div>
              <div className="master">
                <div className="circle master-red"></div>
                <div className="circle master-yellow"></div>
              </div>
            </div>
            <div className="back">
              <div className="strip-black"></div>
              <div className="ccv">
                <label>ccv</label>
                <div>123</div>
              </div>
              <div className="terms">
                <p>Esta tarjeta es propiedad de No Country Coin. El mal uso es delito. Si lo encuentra, devuélvalo al banco más cercano con el logotipo de MasterCard.</p>
                <p>El uso de esta tarjeta está sujeto al acuerdo de la tarjeta de crédito.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      <div className='flex flex-col justify-center items-center min-h-full'>
        <div className='w-screen'>

          <div className='flex items-center justify-around px-3 pt-3 text-[#FD7A09]'>

            <div className='flex flex-col items-center w-1/4'>
              <Link to='/servicioPagar'>
              <div className='bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center'>
                <AiOutlineCreditCard className='text-3xl text-[#FD7A09]' />
              </div>
              <h5 className='text-center'>Pagos</h5>
            </Link>
            </div>

            <div className="flex flex-col items-center w-1/4 ">
              <Link to="/transferencias" className="flex flex-col items-center">
                <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                  <BiTransfer className="text-3xl text-[#FD7A09]" />
                </div>
                <h5>Transferencias</h5>
              </Link>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <BsPhone className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Recargas</h5>
            </div>
          </div>
        </div>
        <div className="w-screen mb-10 text-[#FD7A09]">
          <div className="flex items-center justify-around mx-3 mt-8">
            <div className="flex flex-col items-center w-1/4 px-10">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <LiaPiggyBankSolid className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Inversiones</h5>
            </div>

            <div className="flex flex-col items-center w-1/4">
              <div className="bg-gray-300 rounded-full h-14 w-14 flex items-center justify-center">
                <AiOutlinePlus className="text-3xl text-[#FD7A09]" />
              </div>
              <h5>Movimientos</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>

      <NavBarBottom />
    </div>
  );
};
