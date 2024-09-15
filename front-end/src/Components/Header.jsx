import React from 'react'
import reactLogo from '../assets/react.svg'
import "../index.css"
const Header = () => {
    return (
        <section>
            <div className="flex flex-row max-w-[1440px]">
                <div className='flex flex-row items-center w-full px-10'>
                    <img src={reactLogo} alt="React Logo" />
                    <p className='text-red-600'>Home</p>
                    <p>Kors</p>
                </div>
            </div>

        </section>
    );
}

export default Header
