import img1 from '../assets/img/logosimple.svg'
import { Link } from 'react-router-dom'

const PagWelcome = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      
      <div className="flex flex-col justify-center items-center w-full mt-6 mb-6 text-2xl">
        <p>¡Bienvenido</p>
        <p>Nombre del titular de la cuenta!</p>
      </div>
      
      <div className="flex justify-center items-center w-full mt-6 mb-6">
        <img className="object-fill h-80 w-80 overflow-visible" src={img1} alt="" />
      </div>
      
      <div className="flex justify-center items-center w-full text-center p-4 mt-6 text-xl">
      <p>Estamos muy felices de tenerte aquí. Esperamos que disfrutes de todo este proceso, cualquier inconveniente estamos para ayudarte</p>
      </div>
      
      <div className="flex justify-center items-center w-full mt-6 "> 
        <div className="btn bg-[#D9D9D9] hover:bg-[#909090] duration-200 rounded-full ">
        <Link to={"/dashboard"} >¡Empecemos! </Link>
        </div>
      </div>
    
    </div>
  )
}

export default PagWelcome