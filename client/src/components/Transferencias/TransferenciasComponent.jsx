


export const TransferenciasComponent = ({user, amount, date, type, final, initials}) => {

  return (
<div className='mx-5 mt-5 border-b-2 border-green-600 border-opacity-20'>
                <div className='flex justify-between items-center mb-2'>
                    <div className='flex items-center '>
                        <div className=' flex flex-col w-14 h-14 justify-center rounded-full bg-gradient-to-b from-green-400 bg-opacity-30 to-green-400 bg-opacity-30 via-green-200 bg-opacity-30'>
                          <h1 className='text-center text-3xl '>{initials}</h1>
                        </div>
                        <div className='ml-4'>
                            <h1>{type} {final}</h1>
                            <h1 className='text-gray-500'>de {user}</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end'>
                        <h1 className='font-bold'>{amount} AR$</h1>     
                        <div className='flex justify-end'>
                        <p className='text-gray-500'>{date}</p>  
                        </div>
                    </div>
                </div>
    </div>
  )
};
