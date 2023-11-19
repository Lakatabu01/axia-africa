//import React from "react";
import Header from "../components/Header";
import Intro from "../components/intro";
import Courses from "../components/courses";
import ReachOut from "../components/reach-out";
import Onboard from "../components/Onboard";
import Discovery from "../components/discovery";
import Foster from "../components/foster";
import SuccessStories from "../components/success-stories";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className=" w-screen bg-orange ">
      <Header />
      <Intro />
      <Courses />
      <ReachOut />
      <Onboard />
      {/* <Discovery />     highly problematic */}
      <Foster />
      {/*<SuccessStories />
      <Footer /> */}
    </div>
  );
};

export default Home;
