import { useState } from 'react'

function LoginScreen () {

      //STATES
      const [email, setEmail] = useState("");
      const [contraseña, setContraseña] = useState("");
      const [pais, setPais] = useState("")
      const [error, setError] = useState(false)

      const [mensaje, setMensaje] = useState("")
  
    
    const handleSubmit = ( e ) => {
        e.preventDefault();

         //VALIDACION
         if(email === "" || contraseña === "" ||  pais === ""  ){
            setError(true)
            setMensaje("Complete todos los campos")
            return
        }else{
            setError(false)
            console.log(email, contraseña, pais)
        }
    }

    

  return (
    <div className='p-10 mt-10 flex-col bg-zinc-50 max-h-screen'>
        <h1 className='text-xl font-semibold mb-3'>Iniciar sesión</h1>
        <form action="" className='bg-zinc-300 rounded-3xl px-7 py-5'>
            <div className='h-6'>
                {error && <p className="text-red-500 text-center text-lg">{mensaje}</p>}
            </div>


        <div className="flex-col flex py-1">
            <p className="font-semibold">Pais</p>
            <select 
                className="h-10 p-2 rounded-full bg-zinc-200"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
            >
                <option value="">--Selecciona--</option>
                <option value="argentina">Argentina</option>
                <option value="mexico">Mexico</option>
                <option value="brasil">Brasil</option>
            </select>
        </div>

            <div className='py-1'>
                <p className='mb-1 font-semibold'>Ingresa tu email</p>
                <input 
                    type="email" 
                    value={email} 
                    className='bg-zinc-200 rounded-full px-2 w-full h-10'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='py-1 mb-6'>
                <p className='mb-1 font-semibold'>Contraseña</p>
                <input 
                    type="password" 
                    placeholder='******' 
                    className='bg-zinc-200 rounded-full px-2 w-full h-10'
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
            </div>
        </form>

        <div className='flex justify-center mt-5'>
            <button 
            onClick={handleSubmit}
            className='bg-zinc-300 px-6 py-2 rounded-full font-semibold'
            >
                Iniciar Sesión
            </button>
        </div>

        <div className='flex justify-center mt-10'>
            <button 
            className='bg-zinc-300 w-full rounded-lg py-2 font-semibold' 
            >
                Iniciar sesiòn con Google
            </button>
        </div>


        <div className='flex justify-center mt-10 font-semibold'>
            <p>No tienes usuario. <strong>Registrate aqui</strong></p>
        </div>

        <div className='flex justify-center mt-10 font-semibold'>
            <small>Por consultas o ayudas escribenos en ...</small><hr />
        </div>
    </div>
  )
}

export default LoginScreen;