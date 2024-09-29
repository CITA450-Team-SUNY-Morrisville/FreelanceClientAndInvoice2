import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
              <span className="hidden md:block text-green-400 text-2xl font-bold ml-2">Freelancer2</span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="text-white bg-green-600 hover:bg-green-700 rounded-md px-3 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-green-600 hover:bg-green-700 rounded-md px-3 py-2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
