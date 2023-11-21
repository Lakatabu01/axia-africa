import React from "react";
import image1 from "../assets/fabilola.png";
import image2 from "../assets/nwodo.png";
import image3 from "../assets/ogunshina.png";
import image4 from "../assets/olakanmi.png";
import image5 from "../assets/osunleke.png";
import image6 from "../assets/oyegunle.png";
import image7 from "../assets/oyinlola.png";

const Carousel = () => {
  const fabilola = {
    text: "I had no clue where to start in learning Product design, then Axia Africa started an online training and I joined. Within few weeks of coaching I was able to understand both UX & UI. The classes are interesting and gives room to ask questions. Materials provided were helpful. It was a great to learning experience led by the fantastic teachers. I would highly recommend this training if you are a beginner",
    src: image1,
    name: "Blessing Fabilola",
  };

  const ogunshina = {
    text: "Axia Africa's product design class has taught me a lot of thingsregarding designs and how to interact with people. I've learnt a lot about the UX and UI processes. Each class has been a perfect blend of learning and fun. Thanks so much for this opportunity",
    src: image3,
    name: "Samuel Ogunshina",
  };

  const babalola = {
    text: "Axia Africa has been so helpful to me. I got into tech with zeroknowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.",
    src: image7,
    name: "Oyinlola Babalola",
  };

  const oyegunle = {
    text: "Axia Africa's product design class has taught me a lot of things regarding designs and how to interact with people. I've learnt alot about the UX and UI processes. Each class has been a perfect blend of learning and fun. Thanks so much for this opportunity Axia Africa",
    src: image6,
    name: "Dolapo oyegunle",
  };

  const nwodo = {
    text: "Finding Axia Africa and being offered a training on product design was a turning point in my career. The lessons were planned properly and were made flexible to accommodate our differentschedules.I will a 100% recommend Axia Africa to anyone who plans to take their career to the next level and is looking for a place to start.",
    src: image2,
    name: "Linda Nwodo",
  };

  const items = [ogunshina, babalola, fabilola, oyegunle, nwodo]; // Add more items as needed

  return (
    <div className="overflow-hidden md:hidden w-[100vw] mt-8">
      <div className="flex animate-[scroll_8s_linear_infinite] w-[400%]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex-grow-0 flex-basis-auto w-[100vw] box-border min-h-[50vh] mr-2 bg-brown p-2 flex flex-col justify-between">
            <div>{item.text}</div>
            <div className="flex items-center">
              <div>
                <img src={item.src} alt="" className="mr-2" />
              </div>
              <div>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
