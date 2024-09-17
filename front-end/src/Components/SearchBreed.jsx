import React, { useState } from 'react';

const SearchBreed = () => {
    const [breed, setBreed] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        setImages([]);

        console.log(error)


        try {
            
            const breedsResponse = await fetch('https://dog.ceo/api/breeds/list/all');
            const breedsData = await breedsResponse.json();
            const availableBreeds = Object.keys(breedsData.message);

            // J'ai convertit la race en minuscules pour éviter les problèmes de casse
            const normalizedBreed = breed.toLowerCase();

            if (!availableBreeds.includes(normalizedBreed)) {
                throw new Error('Race non trouvée');
            }

            const numImages = 4;
            const response = await fetch(`https://dog.ceo/api/breed/${normalizedBreed}/images/random/${numImages}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            if (data.status === 'success') {
                setImages(data.message);
            } else {
                setError('Aucune image trouvée pour cette race.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des images:', error);
            if (error.message === 'Race non trouvée') {
                setError('Oups, le nom de cette race n\'existe pas.');
            } else {
                setError('Erreur lors de la récupération des images. Veuillez vérifier le nom de la race.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=''>
            <div className='max_padd_container'>
                <div className='max-w-[20rem] py-6'>
                    <h5 className='medium-16 py-2'>Recherchez :</h5>
                    <label className="relative input input-bordered flex items-center justify-between gap-2">
                        <input
                            type="text"
                            value={breed}
                            className="grow"
                            placeholder="Search"
                            onChange={(e) => setBreed(e.target.value)}
                        />
                        <button className='bg-third rounded-sm absolute right-0 top-0 h-full p-3' onClick={handleSearch}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6 mx-auto opacity-70 cursor-pointer"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </label>
                    {
                        error && <p className="text-secondary medium-16 mt-2">{error}</p>
                    }
                </div>
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-20 pb-32 '>
                    {loading ? <p className='medium-16'>Chargement...</p> :
                        images.map((image, i) => {
                            return <img className='rounded-3xl bg-secondary shadow-lg shadow-secondary h-[20rem] w-[20rem] my-8 hover:scale-[1.01] cursor-pointer transition-all duration-300' key={i} src={image} alt='Image'></img>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchBreed;