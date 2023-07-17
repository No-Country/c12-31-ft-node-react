import React from 'react';



export const TransferenciasRealizadasComponent = ({user, amount, date}) => {
  return (
    <div className='mx-5 mt-5'>
                <div className='flex justify-between items-center mb-5'>
                    <div className='flex items-center'>
                        <div className='w-14 h-14 rounded-full bg-gray-200'></div>
                        <div>
                            <h1>Transferencia realizada</h1>
                            <h1 className='text-gray-500'>a {user}</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end'>
                        <h1 className='font-bold'>-${amount}</h1>     
                        <div className='flex justify-end'>
                        <p className='text-gray-500'>{date}</p>  
                        </div>
                    </div>
                </div>
    </div>
  )
};
