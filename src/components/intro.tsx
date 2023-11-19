import React from "react";
import image from "../assets/giant-watermark.svg";
import ApplyButton from "./apply-btn";
import Doddle from "../assets/doddle.svg";

const Intro = () => {
  return (
    <div className="flex w-full  flex-col justify-center items-center">
      <div className="w-4/5 flex justify-between mt-32">
        <div className="w-3/5">
          <h1 className="text-5xl mb-8 font-serif">
            Accelerate your career with{" "}
            <span className="text-grad1">job-ready</span> tech skills
          </h1>

          <p className="text-lg">
            Begin your tech journey and expand your career opportunities in the
            tech space by learning tech skills in demand
          </p>

          <div className="flex mt-6 items-center justify-between px-4 w-4/5">
            <ApplyButton />
            <a href="#" className="flex text-blue font-bold">
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
          <img src={image} alt="water mark" />
        </div>
      </div>

      <div className="flex w-full justify-start pl-2">
        <img
          className="w-2/5 animate-[bounce_3s_ease-in-out_infinite]"
          src={Doddle}
          alt="bubble graphics"
        />
      </div>
    </div>
  );
};

export default Intro;
