import { useContext, useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'
import { newTransaction } from '../../services/api';
import { UserContext } from "../../context/useUserContext";

function ContactoNuevo() {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()
  const [ nombreyApellido, setNombreyApellido ] = useState('')
  const [ cbu, setCbu ] = useState('')
  const [ importe, setImporte ] = useState('')
  const [ errors, setErrors ] = useState('')



  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!nombreyApellido || !cbu || !importe) {
      setErrors('Complete todos los campos')

    } else {
        const data = {
        amount: importe,
        senderId: user.user.id,
        receiverId: cbu
      }
      try {
        await newTransaction(data);
        navigate('/dashboard')
        
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <>

    <div className='flex mx-10 items-center mt-10'>
        <BsArrowLeftShort className='text-4xl' onClick={() => navigate('/celular')}/>
        <h1 className='text-xl  mx-5'>Agendar destinatario</h1>
    </div>

    <div className='p-10 mt-20'>

    <p className=' text-xl'>Datos de registro</p>
    {
      errors && <p className='text-red-500 font-semibold'>{errors}</p>
    }

    <div className='flex flex-col gap-3 mt-5'>
        <input 
        type="text" 
        placeholder='Nombre y Apellido' 
        className='w-full h-12 bg-[#D9D9D9] p-2 '
        value={nombreyApellido}
        onChange={(e) => setNombreyApellido(e.target.value)}
        />

        <input type="text" placeholder='Alias/CBU/CVU' className='w-full h-12 bg-[#D9D9D9] p-2' value={cbu} onChange={(e) => setCbu(e.target.value)}/>



        
        <input type="number" placeholder='Importe' className='w-full h-12 bg-[#D9D9D9] p-2' value={importe} onChange={(e) => setImporte(e.target.value)}/>
    </div>

    </div>

    <div className='flex justify-end mr-16 ml-16'>
      <button type='submit' className='font-bold text-xl' onClick={handleSubmit}>Siguiente</button>
    </div>

    


    </>
  )
}

export default ContactoNuevo
