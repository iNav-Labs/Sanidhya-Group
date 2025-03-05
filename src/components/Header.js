"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat, Poppins } from "next/font/google";

// Configure fonts with proper weight variants
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

// Color theme configuration
const THEME = {
  primary: "#9D5D27", // Main brown
  secondary: "#7A4A1D", // Darker brown
  accent: "#BE7B40", // Lighter brown
  highlight: "#D9A76A", // Light brown/tan
  background: "#FFFFFF", // White
  text: "#4A3520", // Dark brown text
  hover: "#C68642", // Medium brown for hover
  dropdownBg: "#FFF8F0", // Light cream for dropdowns
  shadowColor: "rgba(157, 93, 39, 0.2)", // Brown shadow
};

// Navigation item data structure for maintainability
const NAV_ITEMS = {
  main: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Project Tree", path: "/project_tree" },
  ],
  dropdown: {
    commercial: [
      {
        label: "Divya Sadbhav Arcade",
        path: "/projects/commercial/Divya_sadbhav_arcade",
      },
      { label: "The Metro Park", path: "/projects/commercial/The_metro_park" },
      { label: "Sahaj Square", path: "/projects/commercial/Sahaj_square" },
    ],
    residential: [
      { label: "Sanidhya Flora", path: "/projects/residential/Sanidhya_flora" },
      {
        label: "Sanidhya Greens",
        path: "/projects/residential/Sanidhya_greens",
      },
      { label: "Divya Exotica", path: "/projects/residential/Divya_exotica" },
      {
        label: "Divya Sanskar City",
        path: "/projects/residential/Divya_sanskar_city",
      },
      {
        label: "Divya Shrushti Residency",
        path: "/projects/residential/Divya_shrushti_residency",
      },
    ],
    villas: [
      { label: "Laxmi Bunglows", path: "/projects/villas/Laxmi_bunglows" },
      {
        label: "Shanti Kunj Bunglows",
        path: "/projects/villas/Shanti_kunj_bunglows",
      },
    ],
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu handlers
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) => setDropdown(dropdown === menu ? null : menu);
  const toggleMobileDropdown = (menu) =>
    setMobileDropdown(mobileDropdown === menu ? null : menu);

  // Animation variants for consistent animations
  const navItemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * (i + 1) },
    }),
  };

  // Reusable hover animation for nav items
  const hoverAnimation = {
    scale: 1.05,
    color: THEME.primary,
    transition: { duration: 0.3 },
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4 ${montserrat.variable} ${poppins.variable}`}
      style={{
        backgroundColor: scrolled
          ? THEME.background
          : "rgba(255, 255, 255, 0.95)",
        boxShadow: scrolled ? `0 4px 12px ${THEME.shadowColor}` : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo.png"
            alt="Sanidhya Group Logo"
            width={130}
            height={40}
            className="transition-transform duration-300 hover:scale-105"
            priority
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12 text-base font-medium font-poppins">
          {/* Main Navigation Items */}
          {NAV_ITEMS.main.map((item, index) => (
            <NavItem
              key={item.path}
              label={item.label}
              path={item.path}
              index={index}
              variants={navItemAnimation}
              whileHover={hoverAnimation}
            />
          ))}

          {/* Dropdown Menus */}
          {Object.entries(NAV_ITEMS.dropdown).map(([key, items], index) => (
            <DropdownMenu
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              items={items}
              isOpen={dropdown === key}
              toggleDropdown={() => toggleDropdown(key)}
              index={index + NAV_ITEMS.main.length}
              variants={navItemAnimation}
              whileHover={hoverAnimation}
            />
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Contact Button (Desktop) */}
          <motion.a
            href="/contact"
            className="hidden md:block border rounded-full px-5 py-2 transition-all duration-300 font-montserrat font-semibold tracking-wide text-sm"
            style={{
              borderColor: THEME.primary,
              color: THEME.primary,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: THEME.primary,
              color: "white",
              boxShadow: `0 0 15px ${THEME.shadowColor}`,
            }}
          >
            Contact Us
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            aria-label="Toggle Menu"
            style={{ color: THEME.primary }}
            onClick={toggleSidebar}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, color: THEME.hover }}
            className="block md:hidden"
          >
            <FaBars size={24} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.div
        className="fixed right-0 top-0 h-full w-72 shadow-lg z-50 overflow-y-auto"
        style={{
          backgroundColor: THEME.background,
          boxShadow: `-5px 0 20px ${THEME.shadowColor}`,
        }}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Mobile Menu Header */}
        <div
          className="p-6 flex justify-between items-center"
          style={{ borderBottom: `1px solid ${THEME.primary}` }}
        >
          <motion.h2
            className="text-lg font-semibold font-montserrat"
            style={{ color: THEME.primary }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Menu
          </motion.h2>
          <motion.button
            aria-label="Close Menu"
            onClick={toggleSidebar}
            style={{ color: THEME.primary }}
            whileHover={{ scale: 1.1, rotate: 90, color: THEME.hover }}
            transition={{ duration: 0.2 }}
          >
            <FaTimes size={24} />
          </motion.button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="px-6 py-4 space-y-4 font-poppins">
          {/* Main Navigation */}
          {NAV_ITEMS.main.map((item, index) => (
            <MobileNavItem
              key={item.path}
              label={item.label}
              path={item.path}
              isOpen={isOpen}
              index={index}
            />
          ))}

          {/* Dropdown Menus */}
          {Object.entries(NAV_ITEMS.dropdown).map(([key, items], index) => (
            <MobileDropdown
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              items={items}
              isOpen={isOpen}
              isDropdownOpen={mobileDropdown === key}
              toggleDropdown={() => toggleMobileDropdown(key)}
              index={index + NAV_ITEMS.main.length}
            />
          ))}

          {/* Additional Contact Link for Mobile */}
          <MobileNavItem
            label="Contact Us"
            path="/contact"
            isOpen={isOpen}
            index={
              Object.keys(NAV_ITEMS.dropdown).length + NAV_ITEMS.main.length
            }
          />
        </nav>
      </motion.div>
    </header>
  );
}

// Reusable component for desktop navigation items
const NavItem = ({ label, path, index, variants, whileHover }) => (
  <motion.a
    href={path}
    className="relative transition-colors duration-300"
    style={{ color: THEME.text }}
    custom={index}
    initial="hidden"
    animate="visible"
    variants={variants}
    whileHover={whileHover}
  >
    {label}
    <motion.span
      className="absolute bottom-0 left-0 h-0.5 w-0"
      style={{ backgroundColor: THEME.primary }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    ></motion.span>
  </motion.a>
);

// Reusable component for desktop dropdown menus
const DropdownMenu = ({
  title,
  items,
  isOpen,
  toggleDropdown,
  index,
  variants,
  whileHover,
}) => (
  <div className="relative">
    <motion.button
      onClick={toggleDropdown}
      className="flex items-center space-x-1 transition-colors duration-300"
      style={{ color: THEME.text }}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={whileHover}
    >
      <span>{title}</span>
      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
          color: isOpen ? THEME.primary : THEME.text,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaChevronDown size={12} />
      </motion.div>
    </motion.button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 mt-2 shadow-lg rounded-md py-2 w-48 overflow-hidden font-poppins"
          style={{
            backgroundColor: THEME.dropdownBg,
            boxShadow: `0 4px 20px ${THEME.shadowColor}`,
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item) => (
            <motion.a
              key={item.path}
              href={item.path}
              className="block px-4 py-2 transition-colors duration-200"
              style={{ color: THEME.text }}
              whileHover={{
                x: 5,
                backgroundColor: "rgba(157, 93, 39, 0.1)",
                color: THEME.primary,
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// Reusable component for mobile navigation items
const MobileNavItem = ({ label, path, isOpen, index }) => (
  <motion.a
    href={path}
    className="block py-2 transition-colors duration-200"
    style={{
      color: THEME.text,
      borderBottom: `1px solid rgba(157, 93, 39, 0.2)`,
    }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
    transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
    whileHover={{
      x: 5,
      color: THEME.primary,
      textShadow: `0 0 8px rgba(157, 93, 39, 0.3)`,
    }}
  >
    {label}
  </motion.a>
);

// Reusable component for mobile dropdown menus
const MobileDropdown = ({
  title,
  items,
  isOpen,
  isDropdownOpen,
  toggleDropdown,
  index,
}) => (
  <motion.div
    className="py-2"
    style={{
      borderBottom: `1px solid rgba(157, 93, 39, 0.2)`,
    }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
    transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
  >
    <motion.button
      onClick={toggleDropdown}
      className="w-full flex items-center justify-between transition-colors duration-200"
      style={{ color: THEME.text }}
      whileHover={{ color: THEME.primary }}
    >
      <span>{title}</span>
      <motion.div
        animate={{
          rotate: isDropdownOpen ? 180 : 0,
          color: isDropdownOpen ? THEME.primary : THEME.text,
        }}
        transition={{ duration: 0.3 }}
      >
        <FaChevronDown size={12} />
      </motion.div>
    </motion.button>
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          className="pl-4 mt-2 space-y-2 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.a
              key={item.path}
              href={item.path}
              className="block py-2 pl-2 rounded-md transition-all duration-200"
              style={{ color: THEME.text }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.2 }}
              whileHover={{
                x: 5,
                backgroundColor: "rgba(157, 93, 39, 0.1)",
                color: THEME.primary,
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
