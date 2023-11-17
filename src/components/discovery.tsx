import React from "react";
import doddle from "../assets/doddle2.svg";

function Discovery() {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-4/5">
        <div className="flex ">
          <div>
            <h2 className="text-3xl font-bold pb-8">
              Discover the right school for your journey
            </h2>
            <p>
              Axia Africa offers you the chance to explore schools which has
              variety of courses to learn from, like product design and Front
              end,
            </p>
          </div>
          <div>
            <img
              className=" animate-[bounce_3s_ease-in-out_infinite]"
              src={doddle}
              alt="graphics"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-center mt-24">
          {/*Card 1*/}
          <div className=" border-l-3  border-b-3 pl-2 flex justify-center m-8 ">
            <div className="bg-secondary w-96 -mt-12">
              <div className="m-5">
                <h2 className="font-bold text-2xl">School of Product</h2>
                <p className="py-4 text-black text-base">
                  We offer you Product courses such as Product Design,Product
                  management and Product marketing by equipping you with the
                  right trainings and guidelines. Become a world class personnel
                  and job-ready candidate in the product field.
                </p>
              </div>
              <div className="m-5">
                <a href="#">
                  <p className="underline text-blue font-bold">View Courses</p>
                </a>
              </div>
            </div>
          </div>

          {/*Card 2*/}
          <div className=" border-l-3  border-b-3 pl-2 flex justify-center m-8">
            <div className="bg-secondary w-96 -mt-12">
              <div className="m-5 ">
                <h2 className="font-bold text-2xl">
                  School of Systems Engineering
                </h2>
                <p className="py-4 text-black text-base">
                  Begin your learning process in Front-End Web Development,
                  Back-End Web Development and more. Discover career
                  opportunities available for you. Speak to professionals and
                  read through materials and the programme designed specifically
                  for you.
                </p>
              </div>
              <div className="m-5">
                <a href="#">
                  <p className="underline text-blue font-bold">View Courses</p>
                </a>
              </div>
            </div>
          </div>

          {/*Card 3*/}
          <div className=" border-l-3  border-b-3 pl-2 flex justify-center mt-20 m-8">
            <div className="bg-secondary w-96 -mt-12">
              <div className="m-5">
                <h2 className="font-bold text-2xl">School of Data</h2>
                <p className="py-4 text-black text-base">
                  Even as a newbie in the data analysis space, you can jumpstart
                  your journey and hone your skills by kicking it off with the
                  Axia Africa School of Data Analysis.
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a href="#">
                  <p className="underline text-blue font-bold">View Courses</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discovery;
