import React from "react";
import Link from "next/link";

const Header = () => {

  return (
    <header>
        <div className="mx-auto max-w-screen-xl px-4 mt-4 sm:px-6 lg:px-[12rem]">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <p className="font-bold text-3xl title__page">Maher</p>
              </a>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-12 text-sm">
                  <li>
                    <a className="text-white title__page transition hover:text-[#116A7B]" href="/">
                    Home
                    </a>
                  </li>
                  <li>
                    <a className="text-white title__page transition hover:text-[#116A7B]" href="/">
                    About
                    </a>
                  </li>
                  <li>
                    <a className="text-white title__page transition hover:text-[#116A7B]" href="/">
                    Techs
                    </a>
                  </li>
                  <li>
                    <a className="text-white title__page transition hover:text-[#116A7B]" href="/">
                    Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
              <div className="sm:flex sm:gap-4">
                <button className="border-2 title__page border-[#64CCC5] hover:bg-white  hover:text-black text-[#64CCC5] px-8 text-xs py-2 rounded-md">
                  Contact me
                </button>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
