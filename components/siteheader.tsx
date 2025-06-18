'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';

const menuVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const menuItemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState<boolean | null>(null);

  useEffect(() => {
    const value = Cookies.get('hasSignedUp');
    setHasSignedUp(value === 'true');
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full px-4 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/iconlong.png" // Replace with actual logo
            alt="Pindrop Logo"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/#how" className="hover:text-black transition">About</Link>
          {/* <Link href="/#features" className="hover:text-black transition">Features</Link> */}
          <Link href="/#contact" className="hover:text-black transition">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          {hasSignedUp === null ? null : hasSignedUp ? (
            <Link
              href="/signin"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
            >
              Sign In
            </Link>
          ) : (
            <Link
              href="/signup"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-20 right-4 left-4 bg-white text-gray-900 rounded-lg shadow-xl space-y-6 p-6 z-50"
          >
            <motion.li variants={menuItemVariants}>
              <Link href="/#how" onClick={toggleMenu} className="text-base font-medium hover:text-black">About</Link>
            </motion.li>
            <motion.li variants={menuItemVariants}>
              {/* <Link href="/#features" className="hover:text-black transition">Features</Link> */}
            </motion.li>
            <motion.li variants={menuItemVariants}>
              <Link href="/#contact" onClick={toggleMenu} className="text-base font-medium hover:text-black">Contact</Link>
            </motion.li>
            <motion.li variants={menuItemVariants}>
              {hasSignedUp === null ? null : hasSignedUp ? (
                <Link href="/signin" onClick={toggleMenu} className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">Sign In</Link>
              ) : (
                <Link href="/signup" onClick={toggleMenu} className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition">Get Started</Link>
              )}
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
