//import React from "react";
import Header from "../components/Header";
import Intro from "../components/intro";
import Courses from "../components/courses";
import ReachOut from "../components/reach-out";
import Onboard from "../components/Onboard";
import Discovery from "../components/discovery";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Intro />
      <Courses />
      <ReachOut />
      <Onboard />
      <Discovery />
    </div>
  );
};

export default Home;
