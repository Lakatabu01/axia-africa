import React from "react";
import logo from "../assets/axia-logo.svg";
import NavButton from "./nav-btn";
import ApplyButton from "./apply-btn";
import Dropdown from "./dropdown";
import { useState } from "react";

function Header() {
  const [schoolHovered, setSchoolHovered] = useState<boolean>(false);
  const [helpHovered, setHelpHovered] = useState<boolean>(false);
  const [dropped, setDropped] = useState<boolean>(false);

  const schoolMouseEnter = () => {
    if (!schoolHovered) {
      setSchoolHovered(true);
    }
  };
  const schoolMouseLeave = () => {
    if (schoolHovered) {
      setTimeout(() => {
        setSchoolHovered(false);
      }, 500);
    }
  };

  const helpMouseEnter = () => {
    if (!helpHovered) {
      setHelpHovered(true);
    }
  };
  const helpMouseLeave = () => {
    if (helpHovered) {
      setTimeout(() => {
        setHelpHovered(false);
      }, 500);
    }
  };

  const displayDropdown = () => {
    if (!dropped) {
      setDropped(true);
      console.log("hidden");
    }
  };

  const closeDropdown = () => {
    if (dropped) {
      setDropped(false);
      console.log("hidden");
    }
  };
  return (
    <div
      className={` w-full justify-center z-10  md:px-0  flex py-16 px-4 items-center fixed bg-white h-12 -mt-8 ${
        dropped ? "h-[100vh] w-[100vw] flex-col" : "flex-row"
      }`}>
      <div className="justify-between flex pt-8 items-center md:w-4/5 w-full ">
        <div>
          <img
            className={`w-15 h-8 ${dropped ? "hidden" : ""}`}
            src={logo}
            alt="Axia logo"
          />
        </div>

        <nav
          className={` md:flex justify-around p-2 w-2/4  mx-8 ${
            dropped ? "hidden" : "hidden"
          } `}>
          <div>
            <NavButton content="About" />
          </div>

          <div onMouseEnter={schoolMouseEnter} onMouseLeave={schoolMouseLeave}>
            <button className="bg-transparent border-transparent flex items-center">
              Schools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-4 pl-2 ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* The popup */}
            <div
              className={`bg-white  ${
                schoolHovered
                  ? "fixed top-6 z-20 shadow-2xl p-2 mt-10"
                  : "hidden"
              }`}>
              <h2>School of Product</h2>
              <h2>School of Engineering</h2>
              <h2>School of Data</h2>
            </div>
          </div>
          <div>
            <NavButton content="Join our community" />
          </div>
          <div onMouseEnter={helpMouseEnter} onMouseLeave={helpMouseLeave}>
            <button className="bg-transparent border-transparent flex items-center">
              Help
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-4 pl-2 ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>{" "}
            {/* The popup */}
            <div
              className={`bg-white  ${
                helpHovered ? "fixed top-6 z-20 shadow-2xl p-2 mt-10" : "hidden"
              }`}>
              <h2>FAQs</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
        </nav>

        <div className={`hidden md:block ${dropped ? "hidden" : ""}`}>
          <ApplyButton />
        </div>

        <div className="md:hidden flex items-center">
          <button className=""></button>
          <svg
            onClick={displayDropdown}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${dropped ? "hidden" : ""}`}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <svg
            onClick={closeDropdown}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${!dropped ? "hidden" : ""}`}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      {/* This part is the dropdown and is only visible when the menu button is clicked */}
      <div
        className={`flex bg-white  flex-wrap w-full md:p-0 p-4 justify-evenly ${
          !dropped ? "hidden" : "block"
        }`}>
        <div className="flex flex-col items-center md:w-1/4 w-1/2 px-0 text-sm md:text-base">
          <h2 className="p-4 font-bold">COMPANY </h2>
          <p className="p-4">About</p>
          <p className="p-4">Blog</p>
          <p className="p-4">FAQs</p>
          <p className="p-2 ">Join Our Community</p>
          <p className="p-4">Partnership</p>
        </div>

        <div className="flex flex-col items-center md:w-1/4 px-0 w-1/2 text-sm md:text-base">
          <h2 className="p-4 font-bold">SCHOOLS</h2>
          <p className="p-4">School of Product</p>
          <p className="p-4">School of Data</p>
          <p className="p-4"> Engineering</p>
        </div>
        <div className="flex flex-col items-center w-1/4 text-sm md:text-base">
          <h2 className="p-4 font-bold">CONTACT</h2>
          <p className="p-4">axiaafrica@gmail.com</p>
          <p className="p-4">09015558035</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
