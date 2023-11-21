import React from "react";
import logo from "../assets/logo-white.svg";

function Footer() {
  return (
    <div className="bg-blue mt-20 w-full text-white flex flex-col items-center pt-8">
      <div className=" md:w-4/5 w-full flex flex-col md:flex-row justify-center">
        <div className="md:w-[30%] w-full flex flex-col  p-4">
          <div>
            <img className="w-20" src={logo} alt="" />
          </div>
          <div>
            <p className=" pt-8">
              An organization that is focused on equipping African youths with
              the knowledge and skills needed in the tech space.
            </p>
          </div>
          <div> </div>
        </div>

        <div className="flex flex-wrap w-full md:p-0 p-4 justify-evenly">
          <div className="flex flex-col items-center md:w-1/4 w-1/2 px-0 text-sm md:text-base">
            <h2 className="p-4 font-bold">COMPANY </h2>
            <p className="p-4">About</p>
            <p className="p-4">Blog</p>
            <p className="p-4">FAQs</p>
            <p className="p-4 ">Join Our Community</p>
            <p className="p-4">Partnership</p>
          </div>

          <div className="flex flex-col items-center md:w-1/4 px-0 w-1/2 text-sm md:text-base">
            <h2 className="p-4 font-bold">SCHOOLS</h2>
            <p className="p-4">School of Product</p>
            <p className="p-4">School of Data</p>
            <p className="p-4">School of Engineering</p>
          </div>
          <div className="flex flex-col items-center w-1/4 text-sm md:text-base">
            <h2 className="p-4 font-bold">CONTACT</h2>
            <p className="p-4">axiaafrica@gmail.com</p>
            <p className="p-4">09015558035</p>
          </div>
        </div>
      </div>

      <p className="mt-28 mb-8 text-center">
        © 2023 Axia Africa. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
