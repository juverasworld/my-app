"use client"

import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';

import "./menu/menu.css"
const YourComponent = () => {
  const menuToggleRef = useRef(null);
  const menuBar = useRef(gsap.timeline());
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const menuToggle = menuToggleRef.current;

    menuBar.current.to('.bar-1', 0.5, {
      attr: { d: "M8,2 L2,8" },
      x: 1,
      ease: Power2.easeInOut
    }, 'start');

    menuBar.current.to('.bar-2', 0.5, {
      autoAlpha: 0
    }, 'start');

    menuBar.current.to('.bar-3', 0.5, {
      attr: { d: "M8,8 L2,2" },
      x: 1,
      ease: Power2.easeInOut
    }, 'start');

    tl.current.to('.fullpage-menu', {
      duration: 0,
      display: "block",
      ease: 'Expo.easeInOut',
    });

    tl.current.from('.menu-bg span', {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: 'Expo.easeInOut'
    });

    tl.current.from('.main-menu li a', {
      duration: 1.5,
      y: "100%",
      stagger: 0.2,
      ease: 'Expo.easeInOut'
    }, "-=0.5");

    tl.current.from('.social-links li', {
      duration: 1,
      y: "-100%",
      opacity: 0,
      stagger: 0.1,
      ease: 'Expo.easeInOut'
    }, "-=0.5");

    tl.current.reverse();

    menuToggle.addEventListener('click', function () {
      menuBar.current.reversed(!menuBar.current.reversed());
      tl.current.reversed(!tl.current.reversed());
    });

    // Cleanup
    return () => {
      menuToggle.removeEventListener('click');
    };
  }, []);

  return (
    <div>
      <header>
        <div className="header-row">
            <div className="brand-logo">
                <a href="#">
                Vera
                </a>
            </div>
            <button className="menu-toggle" id="menuToggle" ref={menuToggleRef}>
                <svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
                    <path d="M10,2 L2,2" className="bar-1"></path>
                    <path d="M2,5 L10,5" className="bar-2"></path>
                    <path d="M10,8 L2,8" className="bar-3"></path>

                </svg>
            </button>
        </div>
    </header>

    <section className="fullpage-menu">
        <div className="fullpage-menu-inner">
            <div className="menu-bg">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav>
                <ul className="main-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

            <div className="header-nav-footer">
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li>&copy;2021</li>
                </ul>
            </div>

        </div>
    </section>

    <section className="placeholder-title">
        <h1>Fullpage Navigation Menu with <span>GSAP</span></h1>
    </section>
      {/* <button >Toggle Menu</button> */}
      {/* Other JSX elements */}
    </div>
  );
};

export default YourComponent;
