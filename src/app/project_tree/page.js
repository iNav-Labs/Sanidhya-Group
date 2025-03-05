"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display, Poppins } from "next/font/google";

// Font definitions
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

// Theme configuration
const THEME = {
  primary: {
    main: "#9D5D27",
    light: "#B77B4A",
    dark: "#7A4415",
  },
  text: {
    primary: "#333333",
    secondary: "#666666",
    light: "#8A8A8A",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F8F8F8",
  },
};

// Projects array sorted in decreasing order by year
const projects = [
  {
    year: 2025,
    name: "Sahaj Square",
    location: "S G Highway",
    image: "/image1.jpeg",
  },
  {
    year: 2022,
    name: "Sanidhya Greens",
    location: "Sarkhej",
    image: "/image1.jpeg",
  },
  {
    year: 2019,
    name: "Sanidhya Flora",
    location: "Shela",
    image: "/image1.jpeg",
  },
  {
    year: 2018,
    name: "Divya Exotica",
    location: "Gota",
    image: "/image1.jpeg",
  },
  {
    year: 2017,
    name: "Divya Homes",
    location: "Chandlodia",
    image: "/image1.jpeg",
  },
  {
    year: 2015,
    name: "Divya Kunj Parisar",
    location: "Paldi",
    image: "/image1.jpeg",
  },
  {
    year: 2014,
    name: "Divya Sanskar City",
    location: "Gandhinagar",
    image: "/image1.jpeg",
  },
  {
    year: 2013,
    name: "The Metro Park Hotel",
    location: "Ashram Road",
    image: "/image1.jpeg",
  },
  {
    year: 2012,
    name: "Divya Shrushti Residency",
    location: "Vastral",
    image: "/image1.jpeg",
  },
  {
    year: 2011,
    name: "Divya Bhoomi Avenue",
    location: "Maninagar",
    image: "/image1.jpeg",
  },
  {
    year: 2010,
    name: "Divya Residency",
    location: "Usmanpura",
    image: "/image1.jpeg",
  },
  {
    year: 2009,
    name: "Divya Sadbhav Arcade",
    location: "Naranpura",
    image: "/image1.jpeg",
  },
  {
    year: 2009,
    name: "Dev Krupa Heights",
    location: "Vasna",
    image: "/image1.jpeg",
  },
  {
    year: 2008,
    name: "Jivanparn Residency",
    location: "Satellite",
    image: "/image1.jpeg",
  },
  {
    year: 2007,
    name: "Laxmi Bunglows",
    location: "Bopal",
    image: "/image1.jpeg",
  },
  {
    year: 2006,
    name: "Laxmi Apartment",
    location: "Bopal",
    image: "/image1.jpeg",
  },
  {
    year: 2006,
    name: "Tirth Bhoomi Apartment",
    location: "Nehrunagar",
    image: "/image1.jpeg",
  },
  {
    year: 2005,
    name: "Prashann Apartment",
    location: "Nehrunagar",
    image: "/image1.jpeg",
  },
  {
    year: 2004,
    name: "Siddhchal Apartment",
    location: "Paldi",
    image: "/image1.jpeg",
  },
  {
    year: 2003,
    name: "Shanti Kunj Bunglow",
    location: "Paldi",
    image: "/image1.jpeg",
  },
];

// Custom animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProjectTimeline() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [filters, setFilters] = useState({
    decade: "all",
    search: "",
  });
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Initialize page
  useEffect(() => {
    // Set page as loaded to trigger animations
    setIsPageLoaded(true);
  }, []);

  // Handle filtering
  useEffect(() => {
    let results = [...projects];

    // Filter by decade
    if (filters.decade !== "all") {
      const decadeStart = parseInt(filters.decade);
      results = results.filter(
        (project) =>
          project.year >= decadeStart && project.year < decadeStart + 10
      );
    }

    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm) ||
          project.location.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredProjects(results);
  }, [filters]);

  // Handle decade filter change
  const handleDecadeChange = (e) => {
    setFilters({
      ...filters,
      decade: e.target.value,
    });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setFilters({
      ...filters,
      search: e.target.value,
    });
  };

  // Get unique decades for filter
  const decades = Array.from(
    new Set(projects.map((project) => Math.floor(project.year / 10) * 10))
  ).sort((a, b) => b - a);

  return (
    <div
      className={`${montserrat.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <Header />
      <section
        className="py-20 md:py-32"
        style={{ backgroundColor: THEME.background.default }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={isPageLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1
              className="text-5xl md:text-6xl font-playfair font-bold mb-4"
              style={{ color: THEME.primary.main }}
            >
              Our Legacy of Excellence
            </h1>
            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: THEME.primary.main }}
            ></div>
            <p className="text-lg md:text-xl font-montserrat text-gray-600 max-w-2xl mx-auto">
              Explore our journey of creating exceptional spaces since 2003
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isPageLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <select
                  value={filters.decade}
                  onChange={handleDecadeChange}
                  className="bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 font-montserrat focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    borderColor:
                      filters.decade !== "all" ? THEME.primary.main : "",
                    "--tw-ring-color": THEME.primary.light,
                  }}
                >
                  <option value="all">All Years</option>
                  {decades.map((decade) => (
                    <option key={decade} value={decade}>
                      {decade}s
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={filters.search}
                  onChange={handleSearchChange}
                  className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 font-montserrat focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    borderColor: filters.search ? THEME.primary.main : "",
                    "--tw-ring-color": THEME.primary.light,
                  }}
                />
              </div>
            </div>

            <div className="text-right text-sm font-montserrat text-gray-500 w-full md:w-auto">
              {filteredProjects.length} projects displayed
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isPageLoaded ? "visible" : "hidden"}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.name}-${project.year}-${index}`}
                  variants={projectVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <span
                        className="text-sm font-montserrat font-semibold bg-white/90 rounded-full py-1 px-3 inline-block"
                        style={{ color: THEME.primary.main }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-xl font-playfair font-bold mb-2"
                      style={{ color: THEME.text.primary }}
                    >
                      {project.name}
                    </h3>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        style={{ fill: THEME.primary.light }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <p className="text-gray-600 font-montserrat">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-lg font-montserrat text-gray-500">
                  No projects match your search criteria.
                </p>
                <button
                  onClick={() => setFilters({ decade: "all", search: "" })}
                  className="mt-4 px-4 py-2 rounded font-montserrat text-white"
                  style={{ backgroundColor: THEME.primary.main }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        .font-playfair {
          font-family: var(--font-playfair), serif;
        }

        .font-montserrat {
          font-family: var(--font-montserrat), sans-serif;
        }

        .font-poppins {
          font-family: var(--font-poppins), sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
