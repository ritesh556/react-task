import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Contact'];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
       
        <NavLink
          to="/"
          className="flex items-center gap-2 ml-2 text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide font-mono hover:scale-110 transition-transform duration-300"
        >
          Blogify
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 mr-10">
          {navLinks.map((label) => {
            const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all pb-1
                  ${isActive ? 'text-blue-600 after:w-full' : 'text-gray-700 after:w-0 hover:text-blue-600'}
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                  after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 mr-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 transition-all duration-300">
          {navLinks.map((label) => {
            const path = label === 'Home' ? '/' : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-4 text-base font-medium rounded hover:bg-blue-100 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
