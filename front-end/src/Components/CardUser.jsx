import React from 'react'
import apostLogo from '../assets/icons8-comma-32.png'
const CardUser = ({ profil, name, nameDog, review }) => {


    return (
        <div className='relative rounded-2xl flex flex-col items-center justify-center p-6 bg-third shadow-lg cursor-pointer shadow-third hover:-translate-y-3 transition-all duration-700 hover:scale-[1.03]'>
            <div className='relative flexCenter  overflow-hidden transition-all duration-100'>
                <img src={profil} alt='productImage' className='rounded-full h-20 w-20' />
            </div>
            <div className='p-4 overflow-hidden'>
                <h4 className='my-[6px] text-[1rem] font-bold line-clamp-2 text-gray-50'>{name}</h4>
                <div className='flex flex-col items-center gap-5'>
                    <div className='text-sm text'>{review}</div>
                    <div className='text-secondary text-sm'>{nameDog}</div>
                </div>
            </div>
            <div className='absolute -top-7 right-5 flex flex-row h-12'>
                <img src={apostLogo} alt="logo" />
                <img src={apostLogo} alt="logo" />
            </div>
        </div>
    )
}

export default CardUser
