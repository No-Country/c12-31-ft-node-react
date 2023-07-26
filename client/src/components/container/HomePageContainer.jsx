import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import img2 from "../../assets/img/iconos_dinero_2.png";
import img3 from "../../assets/img/transferencias.png";
import img5 from "../../assets/img/pago_cel.png";
import img6 from "../../assets/img/logosimple.svg";
import img7 from "../../assets/img/fondo_verde.svg";
import img1 from "../../assets/img/iconos_dinero.png";
import img4 from "../../assets/img/crecimientoinversion.png";  

import {FiArrowDown} from "react-icons/fi";
import { Link } from "react-router-dom";




const HomePageContainer = () => {

  return (
    <div className="bg-white">
      <nav className="bg-transparent absolute z-50">
        <NavBar />
      </nav>
      <header>
        <div className="contImg1 relative ">
          <div className="overflow-hidden relative w-screen mt-[70px]">
          
            <div className=" relative flex justify-center items-center h-[600px] w-[600px] bg-[#FD7A09] rounded-full left-[100px]">
              <svg className=" fill-white h-full p-6 absolute"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.81 63.92">
                <defs></defs><g id="Capa_2" data-name="Capa 2">
                  <g id="Capa_1-2" data-name="Capa 1">
                    <path className="cls-1" d="M25.13,35.47a1.8,1.8,0,0,0-1.17.31,1.54,1.54,0,0,0-.47.95,14.29,14.29,0,0,1-.37,1.92,6,6,0,0,1-.92,2,4.45,4.45,0,0,1-1.52,1.29h0c-.13.08-.27.15-.41.22a16.83,16.83,0,0,1-3.53.6,6.71,6.71,0,0,1-5.43-1.79q-1.86-1.8-1.86-5.64v-14a7.68,7.68,0,0,0-2.78.6c-.19.09-.37.18-.54.28V35.28a11.56,11.56,0,0,0,1.39,6.07,8,8,0,0,0,3.77,3.31,13,13,0,0,0,5.15,1A15.11,15.11,0,0,0,22,44.54a8.38,8.38,0,0,0,3.54-3,7.16,7.16,0,0,0,1.24-4.06,2.19,2.19,0,0,0-.42-1.57A1.71,1.71,0,0,0,25.13,35.47Z"/>
                    <path className="cls-1" d="M9.81,17a12.7,12.7,0,0,0-3.47.53,7.14,7.14,0,0,1,1.23-3.39,8.31,8.31,0,0,1,3.79-3.31,12.92,12.92,0,0,1,5.19-1A12.45,12.45,0,0,1,22.1,11a8.65,8.65,0,0,1,3.5,3A7.26,7.26,0,0,1,26.81,18a2,2,0,0,1-.42,1.53,1.77,1.77,0,0,1-1.21.37,1.75,1.75,0,0,1-1.27-.37,1.31,1.31,0,0,1-.42-.85,6.81,6.81,0,0,0-.27-1.77,5.66,5.66,0,0,0-1-2,5.25,5.25,0,0,0-2.08-1.56,8.9,8.9,0,0,0-3.55-.6,7.18,7.18,0,0,0-5.3,1.82A4.23,4.23,0,0,0,9.81,17Z"/>
                    <path className="cls-1" d="M19.24,22a8.38,8.38,0,0,0-3.79-3.37A11.4,11.4,0,0,0,13.84,18a10.82,10.82,0,0,0-2-.37,11.91,11.91,0,0,0-1.59-.1H9.74a12.7,12.7,0,0,0-3.47.53,8.55,8.55,0,0,0-1.56.6,8.63,8.63,0,0,0-3.5,3A7.57,7.57,0,0,0,0,25.89a2.14,2.14,0,0,0,.42,1.57,1.83,1.83,0,0,0,1.22.37,1.79,1.79,0,0,0,1.26-.37,1.38,1.38,0,0,0,.42-.87,7.09,7.09,0,0,1,.27-1.81,6.11,6.11,0,0,1,1-2,4.73,4.73,0,0,1,1.54-1.3c.17-.1.35-.19.54-.28a7.68,7.68,0,0,1,2.78-.6l.77,0a9.72,9.72,0,0,1,1.66.13,6.72,6.72,0,0,1,2,.58,5.37,5.37,0,0,1,1.66,1.15q1.85,1.86,1.84,5.72V41.68a7.82,7.82,0,0,0,2.91-.59c.14-.07.28-.14.41-.22V28.17A11.73,11.73,0,0,0,19.24,22Z"/>
                    <path className="cls-1" d="M13.79,13.69c0,2.89,0,3.83,0,3.83a10.82,10.82,0,0,0-2-.37V14.81a5.13,5.13,0,0,1,1.86-1.07A.24.24,0,0,0,13.79,13.69Z"/>
                    <path className="cls-1" d="M11.84,10.12c0-5.12-.08-7.69-.08-7.69a3,3,0,0,1,1-2.3c.54-.37,1,.06,1,1,0,0,0,4.06.06,8.5,0,0-.6.1-.95.2S11.84,10.12,11.84,10.12Z"/>
                    <path className="cls-1" d="M17.09,46.41a4.21,4.21,0,0,1-1.59,2.85,5.69,5.69,0,0,1-1.44,1,6.87,6.87,0,0,1-2,.63,10.51,10.51,0,0,1-2,.18,8.34,8.34,0,0,1-3.53-.62,4.85,4.85,0,0,1-1.93-1.54,6.16,6.16,0,0,1-.92-2,15.43,15.43,0,0,1-.37-2,1.57,1.57,0,0,0-.47-1,1.8,1.8,0,0,0-1.17-.32,1.71,1.71,0,0,0-1.26.42A2.31,2.31,0,0,0,0,45.73a7.41,7.41,0,0,0,1.24,4.14A8.85,8.85,0,0,0,4.78,53a12.25,12.25,0,0,0,5.59,1.17A14,14,0,0,0,12.1,54a11.79,11.79,0,0,0,2-.41,12.37,12.37,0,0,0,1.44-.52,8.11,8.11,0,0,0,3.77-3.38A7,7,0,0,0,20.52,46,17.3,17.3,0,0,1,17.09,46.41Z"/>
                    <path className="cls-1" d="M14.06,49.73a6.87,6.87,0,0,1-2,.63C12,41.76,12,31,11.88,21.24a6.72,6.72,0,0,1,2,.58Z"/>
                    <path className="cls-1" d="M14.13,61.48a3,3,0,0,1-1,2.3.59.59,0,0,1-.49.12c-.3-.08-.5-.48-.5-1.09,0,0,0-3-.06-8.31a11.51,11.51,0,0,0,2-.38Z"/></g></g>
              </svg> 
            </div>
          
            <div className="flex flex-col justify-center relative bottom-0 w-full mt-8">
              <p className="text-[#090909] text-center font-normal text-2xl ">No somos una billetera más...</p>
              <p className="text-[#090909] font-normal text-center text-base mt-6 pl-14">Somos tu mejor amigo en finanzas</p>
              <div className="flex justify-center">
                <button className=" flex justify-center items-center  text-[#FD7A09] font-bold m-6 ">
                  <FiArrowDown className="text-3xl font-bold m-4"/>Descubrinos<FiArrowDown className="text-3xl font-bold m-4"/></button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-[#3ED62B] flex justify-center items-center w-screen h-auto p-4">
          <p className="text-[#090909] font-base text-center text-3xl">Mirá todo lo que  podés hacer en un mismo lugar...</p>
        </div>
        <div className="flex flex-col  mt-10">
          <div className="relative">
          <div className="flex flex-col justify-center items-center z-10 overflow-visible left-0 top-0">
            <img className="relative object-contain h-40 w-40 overflow-visible right-[140px]" src={img2} alt="" />
            <div className="absolute top-20 left-[100px] w-[300px]">
              <p className="text-[#090909] font-base text-lg overflow-visible">Realiza y recibe</p>
              <p className="text-[#090909] font-base text-lg overflow-visible">transferencias en </p>
              <p className="text-[#090909] font-base text-lg overflow-visible">de segundos</p>
            </div>
          </div>
          </div>
          <div className="relative h-[250px] overflow-hidden">
            <div className=" relative left-[110px] -top-[50px]">
              <img className="object-contain h-80 w-80 right-20 " src={img3} alt="" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative -left-[100px]">
            <img className="object-contain h-[350] w-[350] overflow-visible " src={img5} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center z-10 overflow-visible absolute right-10 top-[180px]">
            <p className="text-[#090909]  text-lg overflow-visible">Ingresa y extrae </p>
            <p className="text-[#090909] font-base text-lg overflow-visible">dinero facilmente</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
            <p className="text-[#090909] text-2xl text-center font-semibold px-10 pb-4">Transacciones rápidas y seguras</p>
            
            <div className="flex justify-start items-center w-screen px-10 py-4" >
              <p className="text-[#090909] font-semibold text-left text-lg w-[200px]">Tu dinero disponible TODOS los días y en todo momento</p>
            </div>
            
            <div className="flex flex-col justify-start items-start w-screen px-10  relative overflow-hidden" >
              <div style={{backgroundImage: `url(${img7})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '400px', width: '400px', borderRadius: '50%'}}  className="relative left-[200px] ">
              </div>
              <div className="absolute  mt-10 ">
                <div className="flex pb-4">
                  <img src={img6} className="object-contain h-[35px] w-[35px]  " alt="" />
                  <p className="text-[#090909] text-lg ">Controlar y limitar tus gastos</p>
                </div>
                <div className="flex pb-4 ml-10">
                  <img src={img6} className="object-contain h-[35px] w-[35px]  " alt="" />
                  <p className="text-[#090909] text-lg ">Pagar servicios</p>
                </div>
                <div className="flex pb-4 ml-20 ">
                  <img src={img6} className="object-contain h-[35px] w-[35px]  " alt="" />
                  <p className="text-[#090909] text-lg ">Realizar recargas</p>
                </div>
                <div className="flex pb-4 ml-[120px] ">
                  <img src={img6} className="object-contain h-[35px] w-[35px]  " alt="" />
                  <p className="text-[#090909] p-2 text-lg ">Invertir y ahorrar</p>
                </div>
              </div>
            </div>
        
        </div>

        <div className="relative">
          <div className="relative -left-[100px]">
            <img className="object-contain h-[350] w-[350]  " src={img1} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center z-10  absolute right-0 top-[300px]">
            <p className="text-[#090909] text-center  text-lg w-[250px] ">Con tu cuenta recibirás una tarjeta de débito </p>
            <p className="text-[#090909] font-semibold text-xl ">¡GRATIS!</p>
          </div>
        </div>

          <div className="flex flex-col justify-center items-start w-screen pl-10 mt-10">
              <p className="text-[#090909] text-left font-medium text-2xl ">Estás a un paso de cambiar el</p>
              <p className="text-[#090909] text-left font-medium text-2xl ">futuro de tus finanzas.</p>
          </div>
        

        <div className="flex flex-col justify-center items-center relative mt-10 mb-10 overflow-hidden">
          <div className="flex justify-center items-center mb-10 relative left-20  " >
            <img className="object-contain h-80 w-80   " src={img4} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start z-10  left-0 top-0">
            <p className="text-[#090909] text-center text-2xl ml-2 w-[250px] items-start">¿Qué esperás para comenzar?</p>
          </div>
          
        </div>

        <div className="flex flex-col mt-20 mb-10 justify-center items-center">
          <h2 className="text-[#090909] text-lg ">¿Aún no tenes una cuenta?</h2>
          <div className="flex justify-center">
            <Link to="/register">
            <button className="btn btn-wide btn-outline rounded-full text-[#FD7A09] hover:bg-[#FD7A09] hover:text-white m-4 ">Registrate GRATIS</button>
            </Link>
          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePageContainer
