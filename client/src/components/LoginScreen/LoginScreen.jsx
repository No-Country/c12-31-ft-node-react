import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='p-10 mt-10 flex-col bg-zinc-50'>
        <h1 className='text-xl font-semibold mb-3'>Iniciar sesión</h1>
        <form action="" className='bg-zinc-300 rounded-3xl p-7 f'>

        <div className="flex-col flex">
            <label htmlFor="pais" className="text-lg">Pais</label>
            <select 
            className="h-10 p-2 rounded-full bg-zinc-200"
            >
                <option value="">--Selecciona--</option>
                <option value="argentina">Argentina</option>
                <option value="mexico">Mexico</option>
                <option value="brasil">Brasil</option>
            </select>
        </div>

            <div className='py-1'>
                <p className='mb-1 font-semibold'>Ingresa tu nombre de usuario o email</p>
                <input type="text" className='bg-zinc-200 rounded-full px-2 w-full h-10'/>
            </div>

            <div className='py-1'>
                <p className='mb-1 font-semibold'>Contraseña</p>
                <input type="password" placeholder='******' className='bg-zinc-200 rounded-full px-2 w-full h-10'/>
            </div>
        </form>

        <div className='flex justify-center mt-5'>
            <button className='bg-zinc-300 px-6 py-2 rounded-full font-semibold'>
                Iniciar Sesión
            </button>
        </div>

        <div className='flex justify-center mt-10'>
            <button className='bg-zinc-300 w-full rounded-lg py-2 font-semibold'>Iniciar sesiòn con Google</button>
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
