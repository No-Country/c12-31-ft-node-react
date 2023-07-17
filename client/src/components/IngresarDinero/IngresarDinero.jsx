import { AiOutlineClose } from 'react-icons/ai'
import { BiCopy, BiPencil } from "react-icons/bi";
import { NavBarBottom } from '../NavBarBottom/NavBarBottom';
import { Link } from 'react-router-dom';
import { BsShare } from "react-icons/bs";

export default function IngresarDinero() {
  return (
    <>

    {/* MODAL DE COPIAR  */}
  <div className="modal" id="my_modal_8">
    <div className="modal-box">
      <h3 className="font-bold text-xl text-center text-green-500">¡¡Copiado con exito!!</h3>
      <div className="modal-action">
      <a href="#" className="btn bg-red-500 text-white">Cerrar</a>
      </div>
    </div>
  </div>

      <div className='flex justify-end m-5'>
        <Link to={"/dashboard"}>
        <AiOutlineClose className='w-8 h-8'/>
        </Link>
      </div>

      <div className='m-10'>
        <p className='text-2xl font-semibold'>Recibe dinero al instante</p>

        <div className='mt-10 flex items-center justify-center gap-10'>

            <button className='shadow-md   shadow-gray-400 bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] p-2 w-44 rounded-lg text-lg h-12 font-semibold hover:from-[#b05200] hover:via-[#a39303] hover:to-[#a14f07] '>Pesos</button>

            <button className='shadow-md shadow-gray-400 bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] p-2 w-44 rounded-lg text-lg h-12 font-semibold hover:from-[#b05200] hover:via-[#a39303] hover:to-[#a14f07] duration-200'>Otras</button>
        </div>

        <p className='text-lg font-semibold mt-8'>Estos son los datos de tu cuenta, depositá, transferí o pedile a tus amigos </p>

        <div className='border-b-[2px]  flex justify-between mt-5'>
            <p className='font-bold text-lg'>CVU</p>

            <div className='flex gap-10'>
                <p className='m-1 font-semibold'>00002134567899999999</p>
                <a href="#my_modal_8" ><BiCopy className='w-8 h-8 m-1'/></a>
            </div>
        </div>

        <div className='border-b-[2px] flex justify-between mt-5'>
            <p className='font-bold text-lg'>ALIAS</p>

            <div className='flex gap-16'>
                <p className='m-1'>carpa.mepa.BV</p>

                <div className='flex'>
                <BiPencil className='w-8 h-8 m-1'/>
                <a href="#my_modal_8" ><BiCopy className='w-8 h-8 m-1'/></a>
                </div>
            </div>
        </div>

        <div className='flex justify-between p-3 mt-10 mb-10 items-center '>
          <button className='font-semibold text-lg text-[#FD7A09]  duration-100 hover:text-[#e28330] '>
            Cambiar alias
          </button>

          <button className='flex justify-center items-center gap-2 border-[#FD7A09] border-2 p-2 rounded-3xl font-semibold text-lg text-[#FD7A09]  shadow-xl  hover:shadow-gray-400 duration-300'>
            <BsShare/>
            Compartir datos
          </button>
        </div>


        <div className='border-b-[2px]  flex justify-between mt-5'>
            <p className='font-bold text-lg'>USUARIO</p>

            <div className='flex gap-5'>
                <p className='m-1'>Mario.C</p>
                <a href="#my_modal_8" ><BiCopy className='w-8 h-8 m-1'/></a>
            </div>
        </div>

        <p className='text-center mt-10 font-semibold'>Ingresar dinero solo depende de vos ;</p>


      </div>

      <div className='fixed bottom-0 left-0 right-0'>
      <NavBarBottom/>

      </div>
    </>
  )
}
