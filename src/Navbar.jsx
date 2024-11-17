import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]
            ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Logo */}
        <a href="#" >
          <h1 className='text-black font-black text-xl'>Sturdy<span className='italic text-[#007bff]'>Padi</span></h1>
        </a>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:block lg:relative fixed top-0 left-0 max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          {/* Close Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="lg:flex gap-x-5 p-6 space-y-3">
            {/* Conditionally Render Logo in Mobile Sidebar */}
            {menuOpen && (
              <li className="mb-6 lg:hidden">
                <a href="#">
                <h1 className='text-black font-black text-xl'>Sturdy<span className='italic text-[#007bff]'>Padi</span></h1>
                </a>
              </li>
            )}
            {['Home', 'Career', 'Community', 'Resources', 'Blog'].map(
              (text) => (
                <li
                  key={text}
                  className="border-b border-gray-300 py-3 px-3 lg:border-none"
                >
                  <a
                    href="#"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    {text}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] text-md">
            Take Assessment
          </button>
          <button onClick={handleMenuToggle} className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
