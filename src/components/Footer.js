"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    // Add Google Fonts
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(linkElement);

    // Apply fonts to the body
    document.body.style.fontFamily = "'Poppins', sans-serif";

    return () => {
      // Clean up
      document.head.removeChild(linkElement);
    };
  }, []);

  // Function to handle file downloads
  const handleDownload = (fileName) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = `/documents/${fileName}`; // Update path to where your files are stored
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gradient-to-r from-[#9D5D27] to-[#886029] text-white pt-16 pb-8 font-['Poppins']">
      {/* Top Section with Logo and Newsletter */}
      <div className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-[#d1b087] pb-12">
          <div className="transform transition duration-500 hover:translate-y-1">
            <div className="relative h-16 w-48 mb-4">
              <Image
                src="/logo.png"
                alt="Sanidhya Group Logo"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer"
                priority
              />
            </div>
            <p className="text-gray-100 mt-4 max-w-lg">
              Excellence in construction and real estate development. Building
              tomorrow's landmarks with precision and innovation since 2003.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* About Company */}
        <div className="transform transition duration-500 hover:-translate-y-1">
          <h3 className="text-xl font-['Montserrat'] font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-white">
            About Us
          </h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            Sanidhya Group is a premier construction and real estate development
            company with a legacy of excellence. We specialize in residential,
            commercial, and industrial projects across India.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-[#8a5525] hover:bg-white hover:text-[#9D5D27] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white group-hover:text-[#9D5D27]" />
            </a>
            <a
              href="#"
              className="bg-[#8a5525] hover:bg-white hover:text-[#9D5D27] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white group-hover:text-[#9D5D27]" />
            </a>
            <a
              href="#"
              className="bg-[#8a5525] hover:bg-white hover:text-[#9D5D27] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white group-hover:text-[#9D5D27]" />
            </a>
            <a
              href="#"
              className="bg-[#8a5525] hover:bg-white hover:text-[#9D5D27] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white group-hover:text-[#9D5D27]" />
            </a>
            <a
              href="#"
              className="bg-[#8a5525] hover:bg-white hover:text-[#9D5D27] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white group-hover:text-[#9D5D27]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="transform transition duration-500 hover:-translate-y-1">
          <h3 className="text-xl font-['Montserrat'] font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-100">
            {["Home", "About Us", "Projects", "Services", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 hover:translate-x-2"
                >
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#e9d5bd] transition-colors duration-300 flex items-center text-sm"
                  >
                    <FaArrowRight className="mr-2 text-xs text-white" /> {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="transform transition duration-500 hover:-translate-y-1">
          <h3 className="text-xl font-['Montserrat'] font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-white">
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white text-[#9D5D27] p-2 rounded-lg mr-4 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">Our Location</h4>
                <p className="text-gray-100 text-sm mt-1">
                  123, Sanidhya Tower, Business Plaza, Ahmedabad, Gujarat -
                  380006
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-[#9D5D27] p-2 rounded-lg mr-4 mt-1">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">Call Us</h4>
                <p className="text-gray-100 text-sm mt-1">+91 98765 43210</p>
                <p className="text-gray-100 text-sm">+91 79 2345 6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-[#9D5D27] p-2 rounded-lg mr-4 mt-1">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">Email Us</h4>
                <p className="text-gray-100 text-sm mt-1">
                  info@sanidhyagroup.com
                </p>
                <p className="text-gray-100 text-sm">
                  careers@sanidhyagroup.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Projects */}
        <div className="transform transition duration-500 hover:-translate-y-1">
          <h3 className="text-xl font-['Montserrat'] font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-white">
            Our Projects
          </h3>
          <ul className="space-y-3 text-gray-100">
            {[
              "Residential",
              "Commercial",
              "Industrial",
              "Infrastructure",
              "Hospitality",
            ].map((item, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:translate-x-2"
              >
                <a
                  href={`/projects/${item.toLowerCase()}`}
                  className="hover:text-[#e9d5bd] transition-colors duration-300 flex items-center text-sm"
                >
                  <FaArrowRight className="mr-2 text-xs text-white" /> {item}{" "}
                  Projects
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 border-t border-[#d1b087] pt-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-100 text-sm flex items-center flex-wrap">
            <span>
              &copy; {new Date().getFullYear()} Sanidhya Group. All rights
              reserved.
            </span>
            <span className="ml-2 flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by
              <a
                href="https://rebelminds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold hover:text-[#e9d5bd] transition-colors duration-300"
              >
                RebelMinds
              </a>
            </span>
          </div>

          <div className="text-gray-100 text-sm md:text-right">
            <button
              onClick={() => handleDownload("privacy-policy.pdf")}
              className="mr-4 hover:text-white transition-colors duration-300 flex items-center inline-flex"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleDownload("terms-of-service.pdf")}
              className="mr-4 hover:text-white transition-colors duration-300 flex items-center inline-flex"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
