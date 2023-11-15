import React from "react";
import logo from "../assets/axia-logo.svg";
import NavButton from "./nav-btn";
//type Props = {}

function Header() {
  return (
    <div className="bg-green-200 w-full flex justify-center p-2">
      <div>
        <img src={logo} alt="Axia logo" />
      </div>

      <nav className="flex justify-around p-2 w-2/4 ">
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
    </div>
  );
}

export default Header;
