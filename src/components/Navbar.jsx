import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav
      className={`${styles?.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className={`w-full flex justify-between items-center max-w-7xl mx-auto`}
      >
        <Link
          to={"/"}
          className={`flex items-center gap-2`}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className={`w-12 h-12 object-contain bg-red-600 rounded-full p-1`}
          />
          <p className={`text-white text-[18px] font-bold cursor-pointer flex`}>
            Mozammal &nbsp;
            <span className={`sm:block hidden`}>| React Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10 ">
          {navLinks?.map((navLink) => (
            <li
              key={navLink?.id}
              className={`${
                active === navLink?.title ? "text-white" : "text-secondary"
              } hover:text-white text=[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink?.title)}
            >
              <a href={`#${navLink?.id}`}>{navLink?.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex md:hidden flex-1 justify-end items-center">
          <img
            src={toggleNav ? close : menu}
            alt="menu"
            className={`w-7 h-7 object-contain cursor-pointer`}
            onClick={() => setToggleNav(!toggleNav)}
          />
          <div
            className={`${
              !toggleNav ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks?.map((navLink) => (
                <li
                  key={navLink?.id}
                  className={`${
                    active === navLink?.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(navLink?.title);
                    setToggleNav(!toggleNav);
                  }}
                >
                  <a href={`#${navLink?.id}`}>{navLink?.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
