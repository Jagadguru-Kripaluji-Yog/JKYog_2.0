// components/NavBar.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo - replace with your logo image */}
      <div className="flex items-center">
        <Image src="/path-to-your-logo.png" alt="JKYog Logo" width={100} height={30} />
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link legacyBehavior href="/yoga-meditation" passHref><a className="text-gray-700 hover:text-orange-500">Yoga & Meditation</a></Link>
        <Link legacyBehavior href="/events" passHref><a className="text-gray-700 hover:text-orange-500">Events</a></Link>
        <Link legacyBehavior href="/online-offering" passHref><a className="text-gray-700 hover:text-orange-500">Online Offering</a></Link>
        <Link legacyBehavior href="/resources" passHref><a className="text-gray-700 hover:text-orange-500">Resources</a></Link>
        <Link legacyBehavior href="/about-us" passHref><a className="text-gray-700 hover:text-orange-500">About us</a></Link>
        {/* Dropdown menus for 'Yoga & Meditation' and 'Kids corner' would require additional implementation */}
      </div>
      
      {/* Search and Authentication Links */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button aria-label="Search" className="text-gray-700 hover:text-orange-500">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8 6a6 6 0 1012 0 6 6 0 10-12 0zM18 18l-5.5-5.5"></path>
          </svg>
        </button>
        
        {/* Log In / Sign Up */}
        <Link legacyBehavior href="/login" passHref><a className="text-gray-700 hover:text-orange-500">Log in</a></Link>
        <Link legacyBehavior href="/signup" passHref><a className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Sign up</a></Link>
      </div>
    </nav>
  );
};

export default NavBar;
