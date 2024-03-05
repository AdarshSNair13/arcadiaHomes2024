"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`${
        isSticky ? 'fixed top-0 inset-x-0 bg-white shadow-md z-50' : 'static'
      }`}>
      <div className="header flex w-[80%] justify-between m-auto">
        <div className="logo">
          <Image
            src="/logo.png"
            width={114}
            height={114}
            alt="Arcadia Logo"
          />
        </div>
        <div>
          <nav className={`mt-12 ${isSticky ? 'text-[#000000]':"text-white"}`}>
            <ul className="flex gap-[50px]">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Gallery</Link>
              </li>
              <li>
                <Link href="">Projects</Link>
              </li>
              <li>
                <Link href="">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
