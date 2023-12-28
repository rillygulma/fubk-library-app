//updated navBar

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/fubk-logo.jpg";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../authentication/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isBooksMenuOpen, setIsBooksMenuOpen] = useState(false);

  const { user } = useContext(AuthContext);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // toggle Books submenu
  const toggleBooksMenu = () => {
    setIsBooksMenuOpen(!isBooksMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Change from addEventListener to removeEventListener
    };
  }, []);

  // navItems here
  const navItems = [
    { link: "Home", path: "/" },
    {
      link: "E-books & Journals⬇️",
      path: "",

      // Add a sub-menu for "Books"
      submenu: [
        { sublink: "Journals", subpath: "/category" },
        { sublink: "E-Books", subpath: "/allbooks"},
        { sublink: "Subscription Database", subpath: "/category" },
        { sublink: "Free Database", subpath: "/category2" },
        { sublink: "Free Resources", subpath: "/category2" },
        { sublink: "Free Links", subpath: "/category2" },
        // Add more sub-items as needed
      ],
    },
    { link: "Staffs", path: "/staffs" },
    { link: "Branches", path: "/branches" },
    { link: "Services", path: "/services" },
    { link: "Admin Login", path: "/admin/dashboard" },
    { link: "Help", path: "/help" },
    { link: "Library Management System", path: "https://www.google.com/" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-18 px-5 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base py-0 gap-5 rounded bg-sky-600">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center gap-4 text-2xl font-bold text-black-500"
          >
            <img
              src={Logo}
              alt="logo"
              className="inline-block w-20 rounded mx-2"
            />
            <span className="text-white font-custom">
              FEDERAL UNIVERSITY BIRNIN KEBBI,
              <br />
              LIBRARY COMPLEX
            </span>
          </Link>

          {/* nav item for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path, submenu }) => (
              <li key={path} className="relative">
                {submenu ? (
                  // Render a dropdown for items with a submenu
                  <>
                    <span
                      onClick={toggleBooksMenu}
                      className={`block text-base text-white uppercase cursor-pointer hover:text-black font-custom ${
                        submenu ? "hover:bg-blue-500" : ""
                      }`}
                    >
                      {link}
                    </span>
                    {isBooksMenuOpen && (
                      <ul className="absolute top-full left-0 mt-2 space-y-2 bg-blue-500 p-2">
                        {submenu.map(({ sublink, subpath }) => (
                          <li key={subpath}>
                            <Link
                              to={subpath}
                              className="block text-base text-white uppercase cursor-pointer hover:text-black font-custom"
                            >
                              {sublink}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Render a regular link for items without a submenu
                  <Link
                    to={path}
                    className="block text-base text-white uppercase cursor-pointer hover:text-black font-custom"
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 text-white hover:text-black lg:hidden" />
            </button>
            {user ? user.email : ""}
          </div>
          {/* menu button for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-white hover:text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-white hover:text-black" />
              )}
            </button>
          </div>
        </div>
        {/* navitems for mobile devices */}
        <div
          className={`space-y-4 px-5 mt-40 py-3 bg-blue-500 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 w-full md:w-auto sm:w-auto" : "hidden"
          }`}
        >
          {navItems.map(({ link, path, submenu }) => (
            <div key={path}>
              <span
                onClick={() => submenu && toggleBooksMenu()} // Toggle Books submenu
                className={`block text-base text-white uppercase cursor-pointer hover:text-black font-custom ${
                  submenu ? "hover:bg-blue-500" : ""
                }`}
              >
                {link}
              </span>
              {submenu && isBooksMenuOpen && (
                <ul className="ml-4 space-y-2 bg-blue-500 p-2">
                  {submenu.map(({ sublink, subpath }) => (
                    <li key={subpath}>
                      <Link
                        to={subpath}
                        className="block text-base text-white uppercase cursor-pointer hover:text-black font-custom"
                      >
                        {sublink}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
