import React from "react";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";

function Courses() {
  return (
    <div className="w-full bg-black flex justify-center mt-14 md:mt-28 ">
      <div className="md:w-4/5 w-full  p-2 md:p-0">
        <div>
          <h2 className="text-3xl font-bold pt-4 font-serif">
            Courses for you
          </h2>
          <p className="mt-6 mb-28">
            Here are some courses from our schools that we offer. <br />
            Enroll and kickstart your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-20 ">
          {/*Card 1*/}
          <div className=" border-l-3 border-t-3 border-b-3 pl-2 flex justify-center ">
            <div className="bg-secondary w-96  ">
              <div>
                {" "}
                <img
                  src={course1}
                  alt="work table "
                  className="w-full -mt-16"
                />
              </div>
              <div className="m-5">
                <h2 className="font-bold text-large md:text-2xl">
                  Product Design
                </h2>
                <p className="py-4 text-blue text-base">
                  Design user experiences for products in today’s digital world.
                  Build a portfolio that showcases your ability to transform
                  products.
                </p>
              </div>
              <div className="m-5">
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">Enroll now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 pl-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*Card 2*/}
          <div className=" border-l-3 border-t-3 border-b-3 pl-2 flex justify-center">
            <div className="bg-secondary w-96 ">
              <div>
                <img
                  src={course2}
                  alt="work table "
                  className="w-full -mt-16"
                />
              </div>
              <div className="m-5">
                <h2 className="font-bold text-large md:text-2xl">
                  Data Analytics
                </h2>
                <p className="py-4 text-blue text-base">
                  Use Python, SQL, and statistics to uncover insights,
                  communicate critical findings, and create data-driven
                  solutions
                </p>
              </div>
              <div className="m-5">
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">Enroll now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 pl-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*Card 3*/}
          <div className=" border-l-3 border-t-3 border-b-3 pl-2 flex justify-center">
            <div className="bg-secondary w-96 ">
              <div>
                <img
                  src={course3}
                  alt="work table "
                  className="w-full -mt-16"
                />
              </div>
              <div className="m-5">
                <h2 className="font-bold text-large md:text-2xl">
                  Front-End Development
                </h2>
                <p className="py-4 text-blue text-base">
                  Begin our front-end development program structured to help
                  students launch a new career in web development.
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">Enroll now</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 pl-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
