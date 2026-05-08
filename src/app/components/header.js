"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "expertise",
        "industries",
        "skills",
        "contact"
      ];

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const top = element.offsetTop - 120;

          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {

            setActiveSection(section);

          }

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["expertise", "Expertise"],
    ["industries", "Industries"],
    ["skills", "Skills"],
    ["contact", "Contact"]
  ];

  return (

    <nav
      className={`navbar sticky top-0 z-50 ${
        scrolled ? "scrolled" : ""
      }`}
    >

      {/* DESKTOP NAV */}
      <ul
        className="
          hidden
          md:flex
          w-full
          justify-evenly
          items-center
          text-lg
          font-medium
        "
      >

        {navItems.map(([id, label]) => (

          <li key={id}>

            <a
              href={`#${id}`}
              className={`nav-link ${
                activeSection === id
                  ? "active-link"
                  : ""
              }`}
            >

              {label}

            </a>

          </li>

        ))}

      </ul>

      {/* MOBILE HEADER */}
      <div
        className="
          flex
          md:hidden
          w-full
          items-center
          justify-between
        "
      >

       

        {/* HAMBURGER */}
        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="
            flex
            flex-col
            gap-1.5
          "
        >

          <span
            className="
              w-6
              h-[2px]
              bg-[#fff]
            "
          />

          <span
            className="
              w-6
              h-[2px]
              bg-[#fff]
            "
          />

          <span
            className="
              w-6
              h-[2px]
              bg-[#fff]
            "
          />

        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          top-full
          left-0
          w-full
          bg-[#82c7fff7]
          backdrop-blur-xl
          transition-all
          duration-300
          overflow-hidden
          md:hidden
          ${
            mobileMenu
              ? "max-h-[500px] py-6"
              : "max-h-0"
          }
        `}
      >

        <ul
          className="
            flex
            flex-col
            items-center
            gap-6
            text-lg
            font-medium
          "
        >

          {navItems.map(([id, label]) => (

            <li key={id}>

              <a
                href={`#${id}`}
                onClick={() =>
                  setMobileMenu(false)
                }
                className={`
                  nav-link
                  ${
                    activeSection === id
                      ? "active-link"
                      : ""
                  }
                `}
              >

                {label}

              </a>

            </li>

          ))}

        </ul>

      </div>

    </nav>

  );

}