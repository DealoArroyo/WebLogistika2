import React from 'react';
import logo from "../../assets/images/logo-logistika.webp";
import { IoMenuSharp } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className='w-full my-0 mx-auto bg-greenav'>
      <div className='w-full p-3 flex justify-around md:font-bold md:text-left'>
        <img src={logo} alt="logo" className='w-16 h-16 justify-start'/>
        <h4 className='flex justify-center items-center text-white md:hidden'>Logistika</h4>
        <IoMenuSharp className='text-white max-w-sm my-6 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar