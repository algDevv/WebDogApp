import React, { useState } from 'react'
import logoDog from '../assets/logoDog.jpg'
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from "react-icons/md";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }
    const closeMenu = () => {
        setMenuOpen(false);
      };

    return (
        <header>
            <div className="max_padd_container py-10 flex flex-row items-center justify-between">
                <div className='flex flex-row items-center justify-between gap-3 p-1'>
                    <div className='flex flex-row gap-3 items-center justify-around'>
                        <img className='h-[50px] w-[50px] rounded-full' src={logoDog} alt="ReactLogo" />
                        <h1 className='text-xl font-bold whitespace-nowrap'>Dog<span className='text-secondary font-bold'>Industry.</span></h1>
                    </div>
                </div>
                {/*mobile Menu*/}
                <nav className='flex-col items-center justify-center gap-16 font-bold rounded-3xl p-1'>
                    {menuOpen ? (<MdClose className='md:hidden cursor-pointer p-1 ring-1 ring-slate-900/30 h-10 w-10 rounded-full ' onClick={handleMenu} />
                    ) : (<MdMenu className='md:hidden cursor-pointer p-1 ring-1 ring-slate-900/30 h-10 w-10 rounded-full ' onClick={handleMenu} />)}
                </nav>
                {menuOpen ? (
                    <nav className="md:hidden flex items-center flex-col gap-y-12 fixed top-28 right-3 p-8 bg-white rounded-3xl shadow-md w-48 medium-16 ring-1 ring-slate-900/5 transition-all duration-300">
                        <NavLink to={'/'} onClick={closeMenu} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Home</div></NavLink>
                        <NavLink to={'/gallery'} onClick={closeMenu} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Gallery</div></NavLink>
                        <NavLink to={'/breed'} onClick={closeMenu} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Breed</div></NavLink>
                    </nav>
                ) : ""}


                {/*Laptop Menu*/}
                <nav className='hidden md:flex flex-row items-center px-10 gap-16 font-bold rounded-3xl'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Home</div></NavLink>
                    <NavLink to={'/gallery'} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Gallery</div></NavLink>
                    <NavLink to={'/breed'} className={({ isActive }) => isActive ? "active_link" : ""} ><div className='font-bold text-lg'>Breed</div></NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header
