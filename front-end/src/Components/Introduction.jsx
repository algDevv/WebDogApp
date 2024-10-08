import React from 'react'
import logoDog from '../assets/logoDog.jpg'
import { useState, useEffect } from 'react';

const Introduction = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomDogImages = async () => {
      try {
        const fetchImage = async () => {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération de l\'image');
          }
          const data = await response.json();
          return data.message;
        };

        const imagePromises = [fetchImage()];
        // pour afficher une ou 2 images en fontion de la taille d'écran
        if (window.innerWidth >= 1024) {
          imagePromises.push(fetchImage());
        }

        const images = await Promise.all(imagePromises);
        setImages(images);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRandomDogImages();
  }, []);

  if (loading) {
    return <p>Chargement des images...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <section className=' rounded-2xl my-10 lg:my-20'>
      <div className='max_padd_container w-full h-full'>
        <div className='flex flex-col gap-6 justify-center sm:max-w-[70%] md:max-w-[60%]'>
          <h1 className='h1 capitalize underline decoration-third'>Explorez, apprenez, et adorez le monde des chiens !</h1>
          <p className='text-[0.8rem] text-black'>Découvrez tout ce que vous devez savoir sur vos amis à quatre pattes en explorant diverses informations détaillées sur différentes races</p>
          <div className='flex flex-row gap-5 items-center w-full'>
            {images.map((image, i) => {
              return <img className='rounded-3xl bg-secondary shadow-lg shadow-secondary h-[20rem] w-[20rem] my-8 hover:scale-[1.01] cursor-pointer transition-all duration-300' key={i} src={image} alt='Image'></img>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
