import React from 'react';


const data = [
    {
        user: 'Sofia Negri',
        amount: '49.500',
        date: 'ayer'
    },
    {
        user: 'Miguel',
        amount: '30.500',
        date: 'ayer'
    },
    {
        user: 'Juanma',
        amount: '19.500',
        date: 'ayer'
    },
    {
        user: 'Araldi',
        amount: '50.500',
        date: 'ayer'
    },
    {
        user: 'Eche',
        amount: '15.500',
        date: 'ayer'
    },
];


export const TransferenciasComponent = () => {
  return (
    <div className='px-5 mt-5'>
        {
            data.map(item => (
                <div className='flex justify-between items-center mb-5'>
                    <div className='flex items-center'>
                        <div className='w-14 h-14 rounded-full bg-gray-200'></div>
                        <div>
                            <h1>Transferencia recibida</h1>
                            <h1 className='text-gray-500'>de {item.user}</h1>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end'>
                        <h1 className='font-bold'>+${item.amount}</h1>     
                        <div className='flex justify-end'>
                        <p className='text-gray-500'>{item.date}</p>  
                        </div>
                    </div>
                </div>

            ))
        }
    </div>
  )
};
