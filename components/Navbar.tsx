import Link from "next/link";
import Image from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex item-center justify-between py-6">
    <Link href="/">
        <div className="flex items-center cursor-pointer">
            <img src="/logo.jpg" height={35} width={40}  />
            <span className="font-bold ml-2 text-primary">
                        Edxplore
                    </span>
                </div>
            </Link>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="/">Home</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Services</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">Carrer</a>
                </li>
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#">About</a>
                </li>
            </ul>
            <ul className="flex items-center">
                <li className="mr-6 font-medium text-gray-600">
                    <a href="#" className="hover:text-gray-400">
                        Log in
                    </a>
                </li>
                <li className="font-medium text-gray-600">
                    <a
                        href="#"
                        className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                        Sign up
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
