import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'

function ContactoNuevo() {

  const navigate = useNavigate()

  return (
    <>

    <div className='flex mx-10 items-center mt-10'>
        <BsArrowLeftShort className='text-4xl' onClick={() => navigate('/celular')}/>
        <h1 className='text-xl  mx-5'>Agendar destinatario</h1>
    </div>

    <div className='p-10 mt-20'>

    <p className=' text-xl'>Datos de registro</p>

    <div className='flex flex-col gap-3 mt-5'>
        <input 
        type="text" 
        placeholder='Nombre y Apellido' 
        className='w-full h-12 bg-[#D9D9D9] p-2 '
        />

        <input type="text" placeholder='Alias/CBU/CVU' className='w-full h-12 bg-[#D9D9D9] p-2'/>

        <input type="text" placeholder='Acreditacion' className='w-full h-12 bg-[#D9D9D9] p-2'/>

        <input type="text" placeholder='Recordatorio/Apodo' className='w-full h-12 bg-[#D9D9D9] p-2'/>

        <select className='w-full h-12 bg-[#D9D9D9] p-2'>
          <option name="" id="">--Cuenta Origen--</option>
          <option name="CUENTA" id="CUENTA">cta:M.C$00356</option>
        </select>

        <input type="number" placeholder='Importe' className='w-full h-12 bg-[#D9D9D9] p-2'/>
    </div>

    </div>

    <div className='flex justify-end mr-16 ml-16'>
      <button type='submit' className='font-bold text-xl '>Siguiente</button>
    </div>

    


    </>
  )
}

export default ContactoNuevo
