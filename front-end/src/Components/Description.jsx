import React from 'react'
import logoDog from '../assets/logoDog.jpg'
const Description = () => {
    return (
        <section className='xxs:mb-40 xs:mb-20 mt-20'>
            <div className='max_padd_container'>
                <div className='flex flex-row justify-between gap-10 h-40 md:h-72 w-full'>
                    <div className='w-full flex flex-col gap-4'>
                        <h1 className='h1 capitalize underline decoration-third w-full'>Les Compagnons à Quatre Pattes : Galerie de Chiens</h1>
                        <p className='text-[0.8rem] text-black'> Découvrez notre collection de photos mettant en lumière la diversité et la beauté des chiens.</p>
                    </div>
                    <div className='hidden md:flex'>
                        <img className='h-full rounded-3xl object-contain mx-auto pb-2 pr-2 bg-secondary shadow-lg shadow-secondary hover:scale-[1.01] cursor-pointer transition-all duration-300' src={logoDog} alt="logo dog" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Description
