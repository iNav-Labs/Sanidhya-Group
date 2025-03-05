"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Services data - could be moved to a separate data file
const services = [
  {
    id: "commercial",
    title: "Commercial",
    description: "Premium commercial spaces designed for modern businesses",
    image: "/image1.jpeg",
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "Luxurious residential properties crafted with attention to detail",
    image: "/image1.jpeg",
  },
  {
    id: "villas",
    title: "Villas",
    description: "Exclusive villa projects offering unparalleled luxury",
    image: "/image1.jpeg",
  },
];

// Animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  popIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  },
  slideIn: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    whoWeAre: false,
    services: false,
    commercial: false,
    numbers: false,
    residential: false,
    vision: false,
  });

  const observerRefs = useRef(new Map());

  // Auto cycle through services every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => {
      observer.observe(section);
      observerRefs.current.set(section.id, section);
    });

    return () => {
      observerRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-screen flex items-center justify-center text-white"
      >
        {/* Desktop video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/bg_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile video/image */}
        <div className="absolute inset-0 md:hidden">
          {/* Or use an image fallback for mobile */}
          <Image
            src="/image1.jpeg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Building Tomorrow
          </h1>
          <p className="font-montserrat text-lg md:text-2xl max-w-2xl mx-auto">
            Crafting spaces that inspire and endure
          </p>
        </motion.div>
      </motion.section>

      {/* Who We Are Section */}
      <section
        id="whoWeAre"
        className="animate-section flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16 bg-white overflow-hidden"
      >
        <motion.div
          className="w-full lg:w-1/2"
          variants={animations.fadeIn}
          initial="hidden"
          animate={isVisible.whoWeAre ? "visible" : "hidden"}
        >
          <img
            src="/image1.jpeg"
            alt="Sanidhya Group Building"
            className="rounded-2xl shadow-lg w-full h-auto transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-16"
          variants={animations.slideIn}
          initial="hidden"
          animate={isVisible.whoWeAre ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-xl font-semibold text-gray-500">
            Who We Are
          </h3>
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mt-2">
            Trust in Sanidhya, Build Your Future
          </h2>
          <p className="font-montserrat text-gray-600 mt-4 leading-relaxed">
            Sanidhya Group, a real estate company driven by quality, integrity,
            and authenticity, has earned recognition as one of the top builders.
            We are known for undertaking diverse projects, fostering innovation,
            and embracing emerging technologies. Our projects help to house
            people's ambitions.
          </p>
          <p className="font-montserrat text-gray-600 mt-4 leading-relaxed">
            Founded in 2002, Sanidhya Group started with a small land
            acquisition and has since grown into a trusted brand shaping the
            skyline. It was the first to develop projects in prime locations and
            continues to pioneer strategic real estate developments.
          </p>
          <Link href="/about">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-montserrat mt-6 inline-flex items-center px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            >
              About Us{" "}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="animate-section py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={
              isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-semibold text-gray-800 mb-2">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4"></div>
            <p className="font-montserrat text-xl text-gray-600 max-w-2xl mx-auto">
              Best Solutions In Residential, Commercial, And Plotting Segments
            </p>
          </motion.div>

          {/* Service Card with Auto Image Change */}
          <motion.div
            className="w-full h-[600px] md:h-[800px] lg:h-[1000px] overflow-hidden rounded-xl shadow-xl relative"
            key={services[selectedIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={services[selectedIndex].image}
                alt={services[selectedIndex].title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700"
                priority
              />
            </div>

            {/* Overlay for Title and Description */}
            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-32">
              <h3 className="font-playfair text-4xl font-semibold mb-4 text-white">
                {services[selectedIndex].title}
              </h3>
              <p className="font-montserrat text-xl text-white/90 max-w-xl">
                {services[selectedIndex].description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section
        id="commercial"
        className="animate-section bg-gray-100 py-16 px-6 lg:px-20"
      >
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate={isVisible.commercial ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-center text-gray-500 uppercase tracking-wide text-lg">
            Commercial
          </h3>
          <h2 className="font-playfair text-center text-4xl font-bold text-gray-900 mt-2">
            Workspaces Designed For Your Success
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={animations.staggerContainer}
          initial="hidden"
          animate={isVisible.commercial ? "visible" : "hidden"}
        >
          {/* Commercial Projects */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={`commercial-${index}`}
              variants={animations.popIn}
              className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={`/image${index}.jpeg`}
                alt={`Commercial Project ${index}`}
                className="rounded-lg w-full h-52 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mt-4">
                {index === 1
                  ? "Shilp Centrica"
                  : index === 2
                  ? "Shilp Twin Towers"
                  : "Shilp Business Gateway"}
              </h3>
              <p className="font-montserrat text-gray-500">
                {index === 1
                  ? "DTA, Gift City Gandhinagar"
                  : index === 2
                  ? "SEZ, Gift City Gandhinagar"
                  : "Vaishnodevi, S.G Highway Ahmedabad"}
              </p>
              <p className="font-montserrat text-gray-700">
                {index === 1
                  ? "1326-3538 sq. ft."
                  : index === 2
                  ? "1725-7835 sq. ft."
                  : "2303-5082 sq. ft."}
              </p>
              <p className="font-montserrat text-gray-700">Commercial</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Numbers That Define Us Section */}
      <section
        id="numbers"
        className="animate-section bg-white mt-16 text-center py-16"
      >
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate={isVisible.numbers ? "visible" : "hidden"}
        >
          <h2 className="font-montserrat text-gray-500 text-lg font-semibold">
            Numbers That Define Us
          </h2>
          <p className="font-playfair text-xl font-medium max-w-2xl mx-auto mt-2">
            Every Number Tells A Story Of Trust, Commitment, And Excellence
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center max-w-7xl mx-auto px-4"
          variants={animations.staggerContainer}
          initial="hidden"
          animate={isVisible.numbers ? "visible" : "hidden"}
        >
          <motion.div
            variants={animations.popIn}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-playfair text-3xl md:text-4xl font-bold counter">
              21+
            </h3>
            <p className="font-montserrat text-gray-500 mt-2">
              Years Experience
            </p>
          </motion.div>
          <motion.div
            variants={animations.popIn}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-playfair text-3xl md:text-4xl font-bold counter">
              19+
            </h3>
            <p className="font-montserrat text-gray-500 mt-2">
              Million Sq. Ft.
            </p>
          </motion.div>
          <motion.div
            variants={animations.popIn}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-playfair text-3xl md:text-4xl font-bold counter">
              9,000+
            </h3>
            <p className="font-montserrat text-gray-500 mt-2">Units</p>
          </motion.div>
          <motion.div
            variants={animations.popIn}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-playfair text-3xl md:text-4xl font-bold counter">
              52+
            </h3>
            <p className="font-montserrat text-gray-500 mt-2">Properties</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Residential Projects Section */}
      <section
        id="residential"
        className="animate-section bg-gray-100 py-16 px-6 lg:px-20"
      >
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate={isVisible.residential ? "visible" : "hidden"}
        >
          <h3 className="font-montserrat text-center text-gray-500 uppercase tracking-wide text-lg">
            Residential
          </h3>
          <h2 className="font-playfair text-center text-4xl font-bold text-gray-900 mt-2">
            Homes Designed For Your Lifestyle
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={animations.staggerContainer}
          initial="hidden"
          animate={isVisible.residential ? "visible" : "hidden"}
        >
          {/* Residential Projects */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={`residential-${index}`}
              variants={animations.popIn}
              className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={`/image${(index % 3) + 1}.jpeg`}
                alt={`Residential Project ${index}`}
                className="rounded-lg w-full h-52 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mt-4">
                {index === 1
                  ? "Shilp Sapphire"
                  : index === 2
                  ? "Shilp Elanza"
                  : "Shilp Harmony"}
              </h3>
              <p className="font-montserrat text-gray-500">
                {index === 1
                  ? "Satellite, Ahmedabad"
                  : index === 2
                  ? "Prahladnagar, Ahmedabad"
                  : "Bopal, Ahmedabad"}
              </p>
              <p className="font-montserrat text-gray-700">
                {index === 1
                  ? "1200-2400 sq. ft."
                  : index === 2
                  ? "1500-3200 sq. ft."
                  : "1800-3500 sq. ft."}
              </p>
              <p className="font-montserrat text-gray-700">Residential</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Vision Section */}
      <section
        id="vision"
        className="animate-section bg-white mt-16 text-center py-16 px-4"
      >
        <motion.div
          variants={animations.fadeIn}
          initial="hidden"
          animate={isVisible.vision ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-montserrat text-gray-500 text-lg font-semibold">
            Our Vision
          </h2>
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mt-2 mb-4">
            Building for the Future
          </h3>
          <p className="font-montserrat text-lg font-medium text-gray-600 max-w-3xl mx-auto">
            We are committed to building innovative, sustainable, and
            high-quality workspaces that empower businesses and individuals to
            thrive in a dynamic world. Our forward-thinking approach ensures
            that every project delivers lasting value for generations to come.
          </p>
        </motion.div>
      </section>

      {/* Custom CSS for fonts and animations */}
      <style jsx>{`
        /* Font variables */
        :root {
          --font-montserrat: "Montserrat", sans-serif;
          --font-playfair: "Playfair Display", serif;
        }

        /* Font classes */
        .font-montserrat {
          font-family: var(--font-montserrat);
        }

        .font-playfair {
          font-family: var(--font-playfair);
        }

        /* Animation for counter */
        .counter {
          display: inline-block;
          position: relative;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-section .counter {
          animation: countUp 1.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
