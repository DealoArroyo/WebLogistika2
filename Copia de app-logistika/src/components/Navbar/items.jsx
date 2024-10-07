import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";

const Items = ({ open }) => {
    return (
      <ul className={`${open ? 'md:hidden flex flex-col absolute justify-center items-center w-full h-full top-28 right-0 bg-black bg-opacity-95 space-y-8' : 'hidden'} md:flex md:space-x-6` }>
        <li className='p-3 cursor-pointer rounded-md w-24 text-center'><a href="#" className='text-white'><IoHomeOutline className='text-xl mx-auto md:hidden'/>Inicio</a></li>
        <li className='p-3 cursor-pointer rounded-md w-24 text-center'><a href="#" className='text-white'><IoCartOutline className='text-xl mx-auto md:hidden'/>Ordena</a></li>
        <li className='p-3 cursor-pointer rounded-md w-24 text-center'><a href="#" className='text-white'><RiContactsLine className='text-xl mx-auto md:hidden'/>Contacto</a></li>
      </ul>
    );
  };
  

export default Items