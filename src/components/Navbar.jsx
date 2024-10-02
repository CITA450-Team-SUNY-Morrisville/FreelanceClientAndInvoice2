import React from 'react';
import { Link } from 'react-router-dom';  // Allows us to create navigation links
import logo from '../assets/images/logo.png';  // Import the logo image

// Navbar component that appears at the top of all pages for navigation
const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">  {/* Dark background with a border at the bottom */}
      <div className="mx-auto max-w-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo and link to homepage */}
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-12" src={logo} alt="InnVoice"/>  {/* Logo image */}
              <span className="hidden md:block text-white text-3xl font-bold ml-2">
                InnVoice  {/* Displayed logo text next to the image */}
              </span>
            </Link>
            <div className="md:ml-auto flex space-x-2">
              {/* Home Link */}
              <Link to="/" className="text-white bg-gray-700 hover:bg-gray-800 rounded-md px-4 py-2">
                Home  {/* Home link navigates to the homepage */}
              </Link>
              {/* Login Link */}
              <Link to="/login" className="text-white bg-gray-700 hover:bg-gray-800 rounded-md px-4 py-2">
                Login  {/* Login link navigates to the login page */}
              </Link>
              {/* Sign Up Link */}
              <Link to="/Signup" className="text-white bg-red-600 hover:bg-red-700 rounded-md px-4 py-2">
                Sign Up  {/* Sign Up link navigates to the signup page */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;