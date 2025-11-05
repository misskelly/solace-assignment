"use client";

import Link from "next/link";
import { Advocates } from "./components/Advocates";
import Image from "next/image";

const Home = () => {
  return (
    <div className="m-10 max-w-6xl">
      <div className="mx-auto px-4 sm:px-6">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex items-center gap-3  bg-solace-teal-dark px-2 rounded-md"
          >
            <Image
              src="/solace-logo.svg"
              alt="Solace Health"
              width={32}
              height={32}
              className="w-12 h-8"
              priority
            />
          </Link>

          <ul
            className="hidden md:flex items-center gap-6 text-sm"
            role="menubar"
            aria-label="Primary"
          >
            <li role="none">
              <Link
                role="menuitem"
                href="#"
                className="text-gray-700 hover:text-solace-gold focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="#"
                className="text-gray-700 hover:text-solace-gold focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link
                role="menuitem"
                href="#"
                className="text-gray-700 hover:text-solace-gold focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Menu
            </button>
          </div>
        </nav>
      </div>
      <Advocates />
    </div>
  );
};

export default Home;
