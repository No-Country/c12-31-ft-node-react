import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='p-10 mt-10 flex-col bg-zinc-50'>
        <h1 className='text-xl text-black mb-3'>Iniciar sesión</h1>
        <form action="" className='bg-zinc-300 rounded-xl p-7 f'>
            <div className='py-3'>
                <p className='mb-1 text-black'>País</p>
                <input type="text"  className='bg-zinc-200 rounded-full px-2 w-full h-9'/>
            </div>
            <div className='py-1'>
                <p className='mb-1 text-black'>Ingresa tu nombre de usuario o email</p>
                <input type="text" className='bg-zinc-200 rounded-full px-2 w-full h-9'/>
            </div>
            <div className='py-1'>
                <p className='mb-1 text-black'>Contraseña</p>
                <input type="password" placeholder='******' className='bg-zinc-200 rounded-full px-2 w-full h-9'/>
            </div>

        </form>

        <div className='flex justify-center mt-5'>
            <button className='bg-zinc-300 px-6 py-2 rounded-full text-black'>
                Iniciar Sesión
            </button>
        </div>

        <div className='flex justify-center mt-10'>
            <button className='bg-zinc-300 w-full rounded-lg py-2 text-black'>Iniciar sesiòn con Google</button>
        </div>


        <div className='flex justify-center mt-10'>
            <p>No tienes usuario. <strong>Registrate aqui</strong></p>
        </div>

        <div className='flex justify-center mt-10'>
            <small>Por consultas o ayudas escribenos en ...</small><hr />
            
            
        </div>
    </div>
  )
}
