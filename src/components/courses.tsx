import React from "react";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";

function Courses() {
  return (
    <div className="flex justify-center mt-28">
      <div className="w-4/5">
        <div>
          <h2 className="text-3xl font-bold pt-4">Courses for you</h2>
          <p className="mt-6 mb-28">
            Here are some courses from our schools that we offer. <br />
            Enroll and kickstart your career.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 ">
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
                <h2 className="font-bold text-2xl">Product Design</h2>
                <p className="py-4 text-blue text-base">
                  Design user experiences for products in today’s digital world.
                  Build a portfolio that showcases your ability to transform
                  products.
                </p>
              </div>
              <div className="m-5">
                <a href="#">
                  <p className="underline text-blue">Enroll now</p>
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
                <h2 className="font-bold text-2xl">Data Analytics</h2>
                <p className="py-4 text-blue text-base">
                  Use Python, SQL, and statistics to uncover insights,
                  communicate critical findings, and create data-driven
                  solutions
                </p>
              </div>
              <div className="m-5">
                <a href="#">
                  <p className="underline text-blue">Enroll now</p>
                </a>
              </div>
            </div>
          </div>

          {/*Card 3*/}
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
                <h2 className="font-bold text-2xl">Front-End Development</h2>
                <p className="py-4 text-blue text-base">
                  Begin our front-end development program structured to help
                  students launch a new career in web development.
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a href="#">
                  <p className="underline text-blue">Enroll now</p>
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
