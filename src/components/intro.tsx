import React from "react";
import image from "../assets/giant-watermark.svg";
import ApplyButton from "./apply-btn";
import Doddle from "../assets/doddle.svg";

const Intro = () => {
  return (
    <div className="flex w-full  flex-col justify-center items-center">
      <div className="w-4/5 flex justify-between mt-32">
        <div className="w-3/5">
          <h1 className="text-5xl mb-8">
            Accelerate your career with <span>job-ready</span> tech skills
          </h1>

          <p className="text-lg">
            Begin your tech journey and expand your career opportunities in the
            tech space by learning tech skills in demand
          </p>

          <div className="flex mt-6 items-center justify-between px-4 w-4/5">
            <ApplyButton />
            <a href="#">
              <p className="underline">Speak with an advisor</p>
            </a>
          </div>
        </div>

        <div>
          <img src={image} alt="water mark" />
        </div>
      </div>

      <div className="flex w-full justify-start pl-2">
        <img className="w-2/5" src={Doddle} alt="bubble graphics" />
      </div>
    </div>
  );
};

export default Intro;
