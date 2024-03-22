"use client";

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import "./menu/menu.css"

const menuLinks = [
    {path: "/", label: "Home"},
    {path: "/work", label: "Work"},
    {path: "/about", label: "About"},
    {path: "/contact", label: "Contact"},
    {path: "/lab", label: "Lab"},
];
const Menu = () => {
const container = useRef();
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
}

  return (
    <div className='menu-container' ref={container}>
    <div className='menu-bar'>
        <div className='menu-logo'>
            <Link href="/">Vera</Link>
        </div>
        <div className='menu-open'>Menu</div>
    </div>
    <div className='menu-overlay'></div>
    </div>
  )
}

export default Menu