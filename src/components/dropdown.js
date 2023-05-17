import React, { useState } from 'react';
// import { BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <BrowserRouter>
    <div className="relative inline-block">
      <button
        className="px-2 py-2 text-gray-700 text-center"
        onClick={toggleDropdown}  
      >
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="max-sm:w-5 max-sm:h-5 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

       
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-32 bg-[#FAE3B6] rounded-md shadow-lg">
          <ul className="py-1 ">
          <Link><li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
              Men
            </li></Link>
            <li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
            <Link>Woman</Link>
            </li>
            <li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
            <Link>Kids</Link>
            </li>
            <li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
            <Link>Collection</Link>
            </li>
            <li className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
            <Link>Trends</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default Dropdown;
