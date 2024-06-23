import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-100 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto px-4 ${
          isScrolled ? "py-2" : "py-4"
        } flex justify-between items-center`}
      >
        <div className="text-2xl logo">
          <a to="/" className="flex items-center">
            {!isScrolled ? (
              <>
                <span className="text-gray-400">
                  <img
                    src="images/logo.png"
                    height="40px"
                    width="40px"
                    style={{ display: "inline-block", marginRight: "10px" }}
                    alt=""
                  />{" "}
                  <span
                    className="text-2xl xl:text-4xl"
                    style={{ color: "#12172f" }}
                  >
                    ELEVE freightways
                  </span>
                </span>
              </>
            ) : (
              <span>
                {" "}
                <img
                  src="images/companyLogo.png"
                  height="70px"
                  width="70px"
                  style={{ display: "inline-block", marginRight: "10px" }}
                  alt=""
                />{" "}
                <span
                  className="text-gray-300 xl:text-3xl text-lg"
                  style={{
                    fontFamily: "monospace",
                    color: "#12172f",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  <em> WE HANDLE YOUR LOGISTICS</em>
                </span>
              </span>
            )}
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 right-0 bg-white z-50 shadow-lg`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#heroBackground"
              className="text-gray-900 hover:text-gray-800"
            >
              Home
            </a>
            <a href="#blank" className="text-gray-900 hover:text-gray-800">
              Services
            </a>
            <a
              href="#careers"
              className="text-gray-900 hover:text-gray-800"
            >
              Careers
            </a>
            <a
              href="#contactUs"
              className="text-gray-900 hover:text-gray-800"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 links">
          <a href="#heroBackground" className="text-gray-900 hover:text-gray-800">
            Home
          </a>
          <a href="#blank" className="text-gray-900 hover:text-gray-800">
            Services
          </a>
          <a href="#careers" className="text-gray-900 hover:text-gray-800">
            Careers
          </a>
          <a href="#contactUs" className="text-gray-900 hover:text-gray-800">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
