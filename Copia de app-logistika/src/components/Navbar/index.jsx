import React from 'react';
import logo from "../../assets/images/logo-logistika.webp";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import Items from './items';
import { useState } from 'react';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }


  return (
    <header className='bg-greenav p-5'>
      <nav className='flex justify-between items-center'>
        <img src={logo} alt="logo-logistika" className='w-20 mx-0' />
        <h1 className='mx-auto text-white'>Logistika y soluciones gastronómicas</h1>
        <button open={open} onClick={handleClick} className='rotate-60 duration-300'>
          {!open ? 
            (<IoMenuSharp className='text-3xl text-white md:hidden'/>)
             : 
            (<IoClose className='text-3xl text-white '/>)
          }
        </button>
        <Items open={open}/>
      </nav>
    </header>
  )
}

export default Navbar