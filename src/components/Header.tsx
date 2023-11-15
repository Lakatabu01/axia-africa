import React from "react";
import logo from "../assets/axia-logo.svg";
import NavButton from "./nav-btn";
import ApplyButton from "./apply-btn";
//type Props = {}

function Header() {
  return (
    <div className="bg-green-200 w-full justify-center flex py-8 p-4 items-center">
      <div className="justify-between flex  items-center w-4/5 ">
        <div>
          <img src={logo} alt="Axia logo" />
        </div>

        <nav className="flex justify-around p-2 w-2/4 mx-8 ">
          <div>
            <NavButton content="About" />
          </div>
          <div>
            <NavButton content="Schools" />
          </div>
          <div>
            <NavButton content="Join our community" />
          </div>
          <div>
            <NavButton content="Help" />
          </div>
        </nav>

        <ApplyButton />
      </div>
    </div>
  );
}

export default Header;
