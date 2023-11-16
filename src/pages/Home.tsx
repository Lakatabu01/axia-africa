//import React from "react";
import Header from "../components/Header";
import Intro from "../components/intro";
import Courses from "../components/courses";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Intro />
      <Courses />
    </div>
  );
};

export default Home;
