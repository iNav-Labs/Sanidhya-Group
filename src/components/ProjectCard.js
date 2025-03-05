"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaDownload,
  FaImages,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  banner,
  location,
  year,
  about_text,
  about_text_2,
  side_image,
  image1,
  image2,
  image3,
  image4,
  image5,
  address = {},
  phoneNumbers = [],
  emails = [],
  mapUrl = "",
}) => {
  // Load Google Fonts - Using more professional combinations
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Color palette
  const primaryColor = "rgb(157, 93, 39)"; // #9D5D27
  const primaryColorLight = "rgba(157, 93, 39, 0.1)"; // Light version for backgrounds

  return (
    <div className="project-card-container">
      {/* Banner Section with refined spacing */}
      <section className="relative h-screen w-full overflow-hidden mb-16">
        <div className="absolute inset-0 transform transition-all duration-1000 hover:scale-105">
          <Image
            src={banner}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
        </div>

        {/* Overlay Section with refined animation */}
        <div
          className="absolute bottom-0 left-0 w-full bg-white p-10 rounded-t-3xl shadow-xl"
          style={{
            animation: "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            opacity: 0,
            transform: "translateY(100px)",
          }}
        >
          <h2
            className="text-4xl font-playfair font-bold mb-3"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p className="text-gray-700 text-lg mb-3 font-lato">{description}</p>
          <p className="text-sm text-gray-500 mb-8 font-lato font-medium">
            {location} | {year}
          </p>

          {/* Icons Section with refined spacing */}
          <div className="flex justify-between items-center mt-8 px-6">
            <IconButton
              icon={<FaEnvelope />}
              text="Inquiry"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaDownload />}
              text="Download"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaImages />}
              text="Gallery"
              primaryColor={primaryColor}
            />
            <IconButton
              icon={<FaMapMarkerAlt />}
              text="Location"
              primaryColor={primaryColor}
            />
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 max-w-7xl">
        {/* About Project Section */}
        <section
          className="mb-24"
          style={{
            animation: "fadeIn 1.5s ease-out forwards",
            opacity: 0,
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 p-6">
              <h2
                className="text-4xl font-playfair font-bold mb-6"
                style={{ color: primaryColor }}
              >
                About Project
              </h2>
              <div
                className="w-24 h-1 mb-10"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <p className="text-gray-700 leading-relaxed mb-8 font-lato">
                {about_text}
              </p>
              <p className="text-gray-700 leading-relaxed font-lato">
                {about_text_2}
              </p>
            </div>

            <div className="md:w-1/2 p-6 overflow-hidden rounded-xl shadow-2xl">
              <div className="transform transition-all duration-700 hover:scale-105 ease-in-out">
                <Image
                  src={side_image}
                  alt={title}
                  width={600}
                  height={600}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery Section with refined spacing */}
        <section
          className="mb-24"
          style={{
            animation: "fadeIn 1.8s ease-out forwards",
            opacity: 0,
          }}
        >
          <h2
            className="text-4xl font-playfair font-bold mb-6 text-center"
            style={{ color: primaryColor }}
          >
            Project Gallery
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-16"
            style={{ backgroundColor: primaryColor }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Image */}
            <div className="row-span-2 overflow-hidden rounded-xl shadow-xl">
              <div className="transform transition-all duration-700 hover:scale-105 ease-in-out h-full">
                <Image
                  src={image1}
                  alt="Project View"
                  width={800}
                  height={800}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Small Images */}
            <div className="grid grid-cols-2 gap-8">
              {[image2, image3, image4, image5].map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-xl"
                >
                  <div className="transform transition-all duration-700 hover:scale-105 ease-in-out">
                    <Image
                      src={img}
                      alt={`Project Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section with refined spacing */}
        <section
          className="mb-24"
          style={{
            animation: "fadeIn 2.1s ease-out forwards",
            opacity: 0,
          }}
        >
          <h2
            className="text-4xl font-playfair font-bold mb-6 text-center"
            style={{ color: primaryColor }}
          >
            Location & Contact
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-16"
            style={{ backgroundColor: primaryColor }}
          ></div>

          <div className="flex flex-col md:flex-row items-start gap-16">
            {/* Left - Contact Details */}
            <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl">
              {/* Address */}
              <div className="flex items-start gap-6 mb-10">
                <div
                  className="p-5 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <FaMapMarkerAlt
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold mb-3 font-lato">
                    {address.name}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-lato">
                    {address.details}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-6 mb-10">
                <div
                  className="p-5 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <FaPhone
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  />
                </div>
                <div>
                  {phoneNumbers.map((phone, index) => (
                    <p
                      key={index}
                      className="text-gray-600 leading-relaxed mb-3 hover:text-gray-800 transition-all duration-300 font-lato"
                    >
                      <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                    </p>
                  ))}
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-6">
                <div
                  className="p-5 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <FaEnvelope
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  />
                </div>
                <div>
                  {emails.map((email, index) => (
                    <p
                      key={index}
                      className="text-gray-600 leading-relaxed mb-3 hover:text-gray-800 transition-all duration-300 font-lato"
                    >
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Google Map */}
            <div className="md:w-1/2 overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl">
              <iframe
                title="Google Map"
                className="w-full h-[450px] rounded-xl"
                src={mapUrl}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        .font-lato {
          font-family: "Lato", sans-serif;
        }

        /* Smooth scrolling and better spacing */
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          font-family: "Lato", sans-serif;
        }

        /* Container spacing */
        .project-card-container {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Transition enhancements */
        a,
        button {
          transition: all 0.3s ease-in-out;
        }

        /* Image hover effects */
        .hover-lift {
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hover-lift:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
};

// Enhanced Icon Button Component with refined animations
const IconButton = ({ icon, text, primaryColor }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div
      className="p-4 rounded-full transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-md"
      style={{
        backgroundColor: `${primaryColor}15`,
      }}
    >
      <div
        className="text-xl transition-all duration-300 group-hover:text-white"
        style={{
          color: primaryColor,
          transition: "all 0.3s ease",
        }}
      >
        {icon}
      </div>
    </div>
    <p
      className="text-sm font-medium mt-3 transition-all duration-300 group-hover:font-bold"
      style={{ color: primaryColor }}
    >
      {text}
    </p>
  </div>
);

export default ProjectCard;
