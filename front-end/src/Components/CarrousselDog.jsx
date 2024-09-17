import React from 'react'
import { useState, useEffect } from 'react';
const CarrousselDog = () => {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        try {
            const urls = [];
            for (let i = 0; i < 10; i++) {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                urls.push(data.message);
            }
            return urls;
        } catch (error) {
            console.error('Erreur lors de la récupération des images:', error);
            return [];
        }
    };

    useEffect(() => {
        const getImages = async () => {
            const imageUrls = await fetchImages();
            setImages(imageUrls);
        };

        getImages();
    }, []);




    return (
        <section className='rounded-tl-[3rem] rounded-tr-[3rem] shadow-2xl shadow-secondary py-2 lg:mt-32'>
            <div className='max_padd_container gap-10 my-10'>
                <h3 className='h3 capitalize text-secondary underline py-3 my-6'>Toujours plus d'images</h3>
                <div className='flex flex-row justify-between gap-10 rounded-3xl ml-8'>
                    <div className="carousel w-[90%] lg:max-w-[70%] relative h-96">
                        {images.map((imageUrl, index) => (
                            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full rounded-3xl ">
                                <img
                                    src={imageUrl}
                                    className="w-full rounded-3xl"
                                    alt={`Slide ${index + 1}`}
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${(index + 1) % images.length + 1}`} className="btn btn-circle">❯</a>
                                </div>
                                <div className="lg:hidden absolute bottom-4 left-0 right-0 text-white bg-black bg-opacity-50 p-4 rounded transition-all duration-300 hover:-translate-y-2 ">
                                    <p className='p'>
                                        Le chien est un fidèle compagnon qui apporte joie et réconfort à ceux qui ont la chance de le côtoyer. Avec sa nature affectueuse et son désir constant de plaire, il se lie facilement avec les membres de la famille et crée des liens précieux.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='hidden lg:flex w-full border-secondary bg-third rounded-3xl shadow-2xl shadow-secondary '>
                        <div className=' flex w-[80%] h-[80%] m-auto shadow-2xl shadow-secondary rounded-3xl  bg-black bg-opacity-50'>
                            <p className='p m-auto p-5'>
                                Le chien est un fidèle compagnon qui apporte joie et réconfort à ceux qui ont la chance de le côtoyer. Avec sa nature affectueuse et son désir constant de plaire, il se lie facilement avec les membres de la famille et crée des liens précieux.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarrousselDog
