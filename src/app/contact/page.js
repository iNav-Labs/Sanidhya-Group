"use client";
import React from "react";

import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  item: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  },
  parallax: {
    initial: { scale: 1.05 },
    animate: { scale: 1 },
    transition: { duration: 1.5, ease: "easeOut" },
  },
  heroText: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.2, ease: "easeOut" },
  },
  contactCard: {
    whileHover: { scale: 1.02, y: -5 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

// Contact information data
const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#9D5D27]" />,
    title: "Our Address",
    details: [
      "Shilp House, Besides Rajpath Club,",
      "Rajpath Rangoli Road, Bodakdev,",
      "Ahmedabad - 380054, Gujarat, India.",
    ],
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-[#9D5D27]" />,
    title: "Phone",
    details: ["+91 74358 11123", "+91 70696 13123"],
  },
  {
    icon: <FaEnvelope className="text-2xl text-[#9D5D27]" />,
    title: "Email",
    details: ["sales@shilp.co.in", "saumil@shilp.co.in"],
  },
];

// Business hours data
const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function Contact() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Contact card component for reusability
  const ContactCard = ({ icon, title, details }) => (
    <motion.div
      className="flex items-start space-x-6 p-7 rounded-xl hover:bg-[#f9f5f0] transition-all duration-400 border border-transparent hover:border-[#e8d5c0] shadow-sm hover:shadow-md"
      variants={animations.item}
      whileHover={animations.contactCard.whileHover}
      transition={animations.contactCard.transition}
    >
      <div className="bg-[#f1e6d9] p-4 rounded-full shadow-inner">{icon}</div>
      <div>
        <h3 className="font-['Montserrat'] font-semibold text-xl text-[#7b4920] mb-3">
          {title}
        </h3>
        <div className="font-['Lato'] text-gray-700 leading-relaxed">
          {details.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Contact Us | Shilp Group</title>
        <meta
          name="description"
          content="Get in touch with Shilp Group for inquiries about our premium real estate developments and investment opportunities."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Cormorant+Garamond:wght@600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden">
        <motion.div
          className="w-full relative"
          initial={animations.parallax.initial}
          animate={isPageLoaded ? animations.parallax.animate : "initial"}
          transition={animations.parallax.transition}
        >
          <Image
            src="/image6.jpeg"
            alt="Shilp Group Headquarters"
            width={1920}
            height={800}
            className="w-full h-[600px] md:h-[700px] lg:h-[800px] object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex flex-col items-center justify-center">
            <motion.div
              initial={animations.heroText.initial}
              animate={isPageLoaded ? animations.heroText.animate : "initial"}
              transition={animations.heroText.transition}
              className="text-center px-6 max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond'] font-bold text-white mb-6 leading-tight">
                Building Excellence <br /> Since 2004
              </h1>
              <div className="w-24 h-1 bg-[#9D5D27] mx-auto mb-6"></div>
              <p className="font-['Montserrat'] text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                Creating exceptional spaces that transform lives and communities
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="container mx-auto py-24 px-6 md:px-10 lg:px-12 max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animations.container}
        >
          {/* Page Title */}
          <motion.div
            variants={animations.item}
            className="mb-16 text-center md:text-left"
          >
            <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#7b4920] mb-4">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-[#9D5D27] mb-8 mx-auto md:mx-0"></div>
            <p className="font-['Montserrat'] text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
              We're committed to exceptional service and are here to address
              your inquiries
            </p>
          </motion.div>

          {/* Two-column layout for contact info and map */}
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-start"
            variants={animations.container}
          >
            {/* Left Column - Contact Information */}
            <div>
              <motion.div variants={animations.item} className="mb-12">
                <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-semibold text-[#9D5D27] mb-6">
                  Get in Touch
                </h2>
                <p className="font-['Lato'] text-lg text-gray-700 leading-relaxed mb-5">
                  Do you have questions about Shilp Group's premium developments
                  or investment opportunities? Our expert team is ready to
                  provide you with detailed information and personalized
                  assistance.
                </p>
                <p className="font-['Lato'] text-lg text-gray-700 leading-relaxed mb-8">
                  Our dedicated professionals are committed to delivering
                  exceptional service and finding the perfect solution for your
                  real estate needs. Reach out today and experience the Shilp
                  difference.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                className="space-y-10"
                variants={animations.container}
              >
                {contactInfo.map((info, index) => (
                  <ContactCard
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right Column - Map and Business Hours */}
            <motion.div
              variants={animations.item}
              className="md:mt-14 lg:mt-16"
            >
              <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-semibold text-[#9D5D27] mb-8">
                Our Location
              </h2>

              {/* Google Maps Integration */}
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                variants={animations.fadeIn}
              >
                <iframe
                  className="w-full h-[400px] lg:h-[500px] border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0481266433345!2d72.50756747524852!3d23.02250501546724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2d2c11c0e1%3A0x92d58f6f3c31c43b!2sShilp%20Group!5e0!3m2!1sen!2sin!4v1708972800000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shilp Group Office Location"
                ></iframe>
              </motion.div>

              {/* Business Hours Card */}
              <motion.div
                className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm"
                variants={animations.item}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-lg text-[#9D5D27]" />
                  <h3 className="font-['Montserrat'] text-lg font-semibold text-[#9D5D27]">
                    Business Hours
                  </h3>
                </div>
                <div className="font-['Lato'] text-gray-700 grid grid-cols-2 gap-2">
                  {businessHours.map((item, index) => (
                    <React.Fragment key={index}>
                      <span>{item.day}:</span>
                      <span>{item.hours}</span>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
