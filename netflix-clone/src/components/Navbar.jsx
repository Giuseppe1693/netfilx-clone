import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-8 mr-6"
          />
          <nav className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              TV Shows
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Movies
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              New & Popular
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              My List
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Browse by Languages
            </a>
          </nav>
        </div>

        <div className="relative">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <img src="https://i.pravatar.cc/40" alt="User Avatar" className="h-8 w-8 rounded" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Profilo
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Impostazioni
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
