// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const TopNavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link className="text-xl font-bold hover:text-gray-300" href="/">
          Your Logo
        </Link>
      </div>
      <div className="flex gap-4">
        <Link className="hover:text-gray-300" href="/volunteer">
          Volunteer
        </Link>
        <Link className="bg-red-600 px-4 py-2 rounded hover:bg-red-700" href="/donate">
          Donate
        </Link>
        <Link className="hover:text-gray-300" href="/shop">
          Shop
        </Link>
        {/* Assuming SM Exclusive is some kind of special feature or area */}
        <Link className="hover:text-gray-300" href="/exclusive">
          SM Exclusive
        </Link>
      </div>
      <div>
        <select className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600">
          <option value="usa">USA</option>
          {/* Add other options for other countries as needed */}
        </select>
      </div>
    </nav>
  );
};

export default TopNavBar;
