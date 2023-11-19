import React from "react";
import logo from "../assets/axia-logo.svg";
import NavButton from "./nav-btn";
import ApplyButton from "./apply-btn";
//type Props = {}

function Header() {
  return (
    <div className=" w-full justify-center z-10  md:px-0  flex py-16 px-4 items-center fixed bg-white h-12 -mt-8 ">
      <div className="justify-between flex pt-8 items-center md:w-4/5 w-full ">
        <div>
          <img className="w-15 h-8" src={logo} alt="Axia logo" />
        </div>

        <nav className=" md:flex justify-around p-2 w-2/4 mx-8 hidden ">
          <div>
            <NavButton content="About" />
          </div>
          <div>
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
          </div>
          <div>
            <NavButton content="Join our community" />
          </div>
          <div>
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
          </div>
        </nav>

        <div className="hidden md:block">
          <ApplyButton />
        </div>

        <div className="md:hidden flex items-center">
          <button className=""></button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
