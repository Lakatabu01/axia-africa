import React from "react";
import logo from "../assets/logo-white.svg";

function Footer() {
  return (
    <div className="bg-blue mt-20 w-full text-white flex flex-col items-center pt-8">
      <div className=" w-4/5 flex justify-center">
        <div className="w-1/4  flex flex-col  p-4">
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
        <div className="flex flex-col items-center w-1/4">
          <h2 className="p-4 font-bold">COMPANY </h2>
          <p className="p-4">About</p>
          <p className="p-4">Blog</p>
          <p className="p-4">FAQs</p>
          <p className="p-4">Join Our Community</p>
          <p className="p-4">Partnership</p>
        </div>

        <div className="flex flex-col items-center w-1/4">
          <h2 className="p-4 font-bold">SCHOOLS</h2>
          <p className="p-4">School of Product</p>
          <p className="p-4">School of Data</p>
          <p className="p-4">School of Engineering</p>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <h2 className="p-4 font-bold">CONTACT</h2>
          <p className="p-4">axiaafrica@gmail.com</p>
          <p className="p-4">09015558035</p>
        </div>
      </div>

      <p className="mt-28 mb-8 ">© 2023 Axia Africa. All rights reserved.</p>
    </div>
  );
}

export default Footer;
