import React from "react";
import onboard from "../assets/onboard.svg";

const Onboard = () => {
  return (
    <div className="bg-black w-full text-white flex justify-center">
      <div className="w-4/5 p-20">
        <div>
          <h2 className="text-3xl font-bold pb-20">Get onboard with us</h2>
        </div>
        <div className="flex items-center">
          <div className="pr-8">
            <img src={onboard} alt="Conference room" />
          </div>
          <div className="w-2/4 pl-8">
            <p className="pb-6">
              Axia Africa is an organization that is focused on equipping
              African youths with the knowledge and digital skills needed today
              Our aim is to make tech knowledge accessible to every individual
              irrespective of age, literacy, and location.
            </p>
            <p>
              We are looking forward to building a strong community of
              ready-to-work personnel and employable candidates around the world
              in the tech space.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold py-12">- Why choose us</h3>
          <p>
            We at Axia Africa are intentional about our students and focused
            about building a community. The tech space in Africa is fast growing
            and we have the necessary programmes to help launch you into that
            space. We sharpen your skills to give you leverage in your career
            while navigating the job market
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
