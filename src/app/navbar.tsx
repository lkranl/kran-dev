"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/android-chrome-512x512.png";

export default function Navbar() {
  const handleMenuToggle = () => {
    const navbar = document.getElementById("navbar-sticky");
    if (navbar) {
      navbar.classList.toggle("hidden");
    }
  }
  return (
    <nav className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-sreen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse" >
          <Image src={logo} alt="Temporary Logo for Kran" className="h-8 w-auto" />
          <span className="self-center text-2x1 font-semibold whitespace-nowrap">Kran</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-4 text-center h-8"> Get resume</button>
          <button type="button" onClick={handleMenuToggle} data-collapse-togle="navbar-sticky" aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          </button>
        </div>
        <div id="navbar-sticky" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 h-80 items-center md:p-0 mt-4 font-medium border border-gray-100 bg-black divide-x-0 md:divide-x-1 divide-y-1 md:divide-y-0 rounded-lg md:h-8  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="m-0 w-full md:w-auto">
              <Link href={'/'} className="block px-1 py-2 w-full text-center md:w-auto md:px-5 md:py-1 hover:bg-red-900 text-red-400" aria-current="page">Home</Link>
            </li>
            <li className="m-0 w-full md:w-auto">
              <Link href="/projects" className="block px-full py-2 w-full text-center md:w-auto md:px-5 md:py-1 hover:bg-red-900 ">Projects</Link>
            </li>
            <li className="m-0 w-full md:w-auto">
              <Link href="/contact" className="block px-full py-2 w-full text-center md:w-auto md:px-5 md:py-1 hover:bg-red-900 ">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}