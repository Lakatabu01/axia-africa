import React from "react";
import advisor from "../assets/advisor.svg";

const ReachOut = () => {
  return (
    <div className="w-full mt-28 bg-blue flex justify-center">
      <div className=" w-4/5 flex py-16">
        <div className="w-1/2 mr-10 pr-20">
          <h2 className="text-3xl font-bold pt-4 text-white font-serif">
            Confused about what to learn?
          </h2>
          <p className="text-white my-8">
            Speak with our professional tech advisors to help kick start your
            tech journey and pilot you to being an expert in your desired field.
          </p>
          <button className="bg-transparent text-white text-base leading-6 px-4 py-2 border-3 border-white hover:border-white  shadow-[5px_5px_0px_0px_rgba(255,255,255)] hover:text-blue hover:bg-white hover:shadow-[5px_5px_0px_0px_orange]">
            {" "}
            Speak with Advisor
          </button>{" "}
        </div>
        <div>
          <img src={advisor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
