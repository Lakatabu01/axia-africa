import React from "react";
import image from "../assets/giant-watermark.svg";
import ApplyButton from "./apply-btn";
import Doddle from "../assets/doddle.svg";

const Intro = () => {
  return (
    <div className="flex w-full  flex-col  justify-center items-center md:text-base text-sm">
      <div className="md:w-4/5 md:px-0 w-full px-2 flex md:flex-row flex-col justify-between  mt-32">
        <div className="md:w-3/5 w-full md:flex-none flex  flex-col items-center justify-center ">
          <h1 className="md:text-5xl text-xl md:8 mb-4 font-serif text-center md:w-full w-9/12 md:text-left">
            Accelerate your career with{" "}
            <span className="text-grad1">job-ready</span> tech skills
          </h1>

          <p className="md:text-lg text-sm">
            Begin your tech journey and expand your career opportunities in the
            tech space by learning tech skills in demand
          </p>

          <div className="flex flex-col md:flex-row mt-6 items-center justify-between px-4 w-4/5">
            <ApplyButton />
            <a href="#" className="flex text-blue font-bold my-6 md:my-0">
              <p className="underline">Speak with an advisor</p>
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

        <div>
          <img className="" src={image} alt="water mark" />
        </div>
      </div>

      <div className="  md:pl-0 pl-2 ">
        <img
          className="w-2/5   animate-[bounce_3s_ease-in-out_infinite]"
          src={Doddle}
          alt="bubble graphics"
        />
      </div>
    </div>
  );
};

export default Intro;
