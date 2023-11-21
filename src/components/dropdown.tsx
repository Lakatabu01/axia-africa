import React from "react";

function Dropdown() {
  return (
    <div>
      {" "}
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
  );
}

export default Dropdown;

//import it into the header and make it hidden
//set a state that when true hides every other element in the header except the hamburger svg
// the height of the header becomes 100%
//make it block and turn hamburger into an x svg

//tip on the dropdown
// it is a flex with a wrap
