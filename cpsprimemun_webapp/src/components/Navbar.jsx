import {useState} from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import React from 'react';





const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="cpsprimemun" className='w-[153px] h-[32px] z-[2]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id} 
          className={`font-formal font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white z-[2] hover:text-secondary `}>
            <a href={`${nav.id}`}>
            <p className='tracking-[.10em]'>{nav.title}</p>
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} 
        alt='menu' 
        className='w-[28px] h-[28px] object-contain z-[2]'
        onClick={() => setToggle(!toggle)}/>
        
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[2]`}>
          
          <ul className='list-none flex flex-col justify-end items-start flex-1'>
            {navLinks.map((nav, index) => (
              <li 
              key={nav.id} 
              className={`font-formal font-normal cursor-pointer text-[16px] 
              ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover:text-secondary  `}>
                <a href={`${nav.id}`}>
                  <p className='tracking-[.10em]'>{nav.title}</p>
                </a>
              </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;