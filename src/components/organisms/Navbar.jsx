import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className='title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl' to='/about'>KH</Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link className='mr-5 hover:text-white' to='/projects'>Projects</Link>
          <Link className='mr-5 hover:text-white' to='/skills'>Skills</Link>
          <Link className='mr-5 hover:text-white' to='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}