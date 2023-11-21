import React from "react";
import deco1 from "../assets/deco1.svg";
import deco2 from "../assets/deco2.svg";
import image1 from "../assets/fabilola.png";
import image2 from "../assets/nwodo.png";
import image3 from "../assets/ogunshina.png";
import image4 from "../assets/olakanmi.png";
import image5 from "../assets/osunleke.png";
import image6 from "../assets/oyegunle.png";
import image7 from "../assets/oyinlola.png";
import Carousel from "./carousel";

function SuccessStories() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center">
        <div className="w-4/5 mt-20">
          <h2 className="md:text-3xl text-2xl font-bold pt-4 mb-6 font-serif">
            Our success story
          </h2>
          <p>What our students are saying about their learning experience.</p>
        </div>
      </div>

      <div className="overflow-hidden md:block hidden">
        <div className="my-20 relative m-0 left-0 w-[500%]   flex animate-[lefty_15s_ease-in-out_infinite] ">
          <div className="card-style md:w-[5.5%]  w-[100%] md:mr-6 mr-0 bg-brown p-2 md:p-4 flex flex-col items-center">
            <p className=" ">
              Axia Africa's product design class has taught me a lot of things
              regarding designs and how to interact with people. I've learnt a
              lot about the UX and UI processes. Each class has been a perfect
              blend of learning and fun. Thanks so much for this opportunity
              Axia Africa
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image3} alt="Samuel" />
              <p className="pl-6 font-bold"> Samuel Ogunshina</p>
            </div>
          </div>
          <div className="card-style md:w-[5.5%] p-2 w-[100%] md:mr-6 mr-0 bg-brown md:p-4 flex flex-col items-center">
            {" "}
            <p className=" ">
              had no clue where to start in learning Product design, then Axia
              Africa started an online training and I joined. Within few weeks
              of coaching I was able to understand both UX & UI. The classes are
              interesting and gives room to ask questions. Materials provided
              were helpful. It was a great to learning experience led by the
              fantastic teachers. I would highly recommend this training if you
              are a beginner{" "}
            </p>
            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image1} alt="" />
              <p className="pl-6 font-bold">Blessing Fabilola</p>
            </div>
          </div>

          <div className="card-style md:w-[5.5%] p-2 w-[100%] md:mr-6 mr-0 bg-brown  md:p-4 flex flex-col items-center">
            <p className="h-60">
              Axia Africa has been so helpful to me. I got into tech with zero
              knowledge of it, didn’t even know my way around a good system. But
              right now, I know more than I would’ve imagined that I can before
              I got into the academy. Very helpful, kind, patient and thoughtful
              teachers too. This training has really helped me! I highly
              recommend it! Thank youuu.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image7} alt="Oyin" />
              <p className="pl-6 font-bold">Oyinlola Babalola</p>
            </div>
          </div>
          <div className="card-style md:w-[5.5%] p-2 w-[100%] md:mr-6 mr-0 bg-brown md:p-4 flex flex-col items-center">
            <p className="h-60">
              Axia Africa's product design class has taught me a lot of things
              regarding designs and how to interact with people. I've learnt a
              lot about the UX and UI processes. Each class has been a perfect
              blend of learning and fun. Thanks so much for this opportunity
              Axia Africa
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image6} alt="" />
              <p className="pl-6 font-bold">Dolapo Oyegunle</p>
            </div>
          </div>
          <div className="card-style md:w-[5.5%] p-2 w-[100%] md:mr-6 mr-0 bg-brown md:p-4 flex flex-col items-center ">
            <p className="h-60">
              Finding Axia Africa and being offered a training on product design
              was a turning point in my career. The lessons were planned
              properly and were made flexible to accommodate our different
              schedules.I will a 100% recommend Axia Africa to anyone who plans
              to take their career to the next level and is looking for a place
              to start.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image2} alt="" />
              <p className="pl-6 font-bold">Linda Nwodo</p>
            </div>
          </div>
          <div className="card-style w-[5.5%] p-2 mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              I had no clue where to start in learning Product design, then Axia
              Africa started an online training and I joined. Within few weeks
              of coaching I was able to understand both UX & UI. The classes are
              interesting and gives room to ask questions. Materials provided
              were helpful. It was a great to learning experience led by the
              fantastic teachers. I would highly recommend this training if you
              are a beginner{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image1} alt="" />
              <p className="pl-6 font-bold">Blessing Fabilola</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Axia Africa has been so helpful to me. I got into tech with zero
              knowledge of it, didn’t even know my way around a good system. But
              right now, I know more than I would’ve imagined that I can before
              I got into the academy. Very helpful, kind, patient and thoughtful
              teachers too. This training has really helped me! I highly
              recommend it! Thank youuu.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image7} alt="Oyin" />
              <p className="pl-6 font-bold">Oyinlola Babalola</p>
            </div>
          </div>

          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center ">
            <p className="h-60">
              Axia Africa's product design class has taught me a lot of things
              regarding designs and how to interact with people. I've learnt a
              lot about the UX and UI processes. Each class has been a perfect
              blend of learning and fun. Thanks so much for this opportunity
              Axia Africa
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image3} alt="Samuel" />
              <p className="pl-6 font-bold"> Samuel Ogunshina</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              I always had a knack for designs but I needed the right platform
              to put me through and teach me properly, I found that with Axia
              Africa. At Axia Africa, the tutors are very kind to retake a class
              for you when you don’t understand a thing. If you are looking for
              a place where you need an efficient and reliable tutoring then
              Axia Africa is the right place for you.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image4} alt="" />
              <p className="pl-6 font-bold">Feyisayo Olakanmi</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Axia Africa’s product design class has been an eye opener and a
              good starter for me as someone who is a graphic designer but
              struggles a lot with UX in particular. I’ve become more confident
              in my UX process and prowess as a designer and I won’t stop
              learning!. Thank you Axia.
            </p>
            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image5} alt="" />
              <p className="pl-6 font-bold">Samuel Osunleke</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Axia Africa's product design class has taught me a lot of things
              regarding designs and how to interact with people. I've learnt a
              lot about the UX and UI processes. Each class has been a perfect
              blend of learning and fun. Thanks so much for this opportunity
              Axia Africa
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image3} alt="Samuel" />
              <p className="pl-6 font-bold"> Samuel Ogunshina</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            {" "}
            <p className="h-60">
              had no clue where to start in learning Product design, then Axia
              Africa started an online training and I joined. Within few weeks
              of coaching I was able to understand both UX & UI. The classes are
              interesting and gives room to ask questions. Materials provided
              were helpful. It was a great to learning experience led by the
              fantastic teachers. I would highly recommend this training if you
              are a beginner{" "}
            </p>
            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image1} alt="" />
              <p className="pl-6 font-bold">Blessing Fabilola</p>
            </div>
          </div>

          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Axia Africa has been so helpful to me. I got into tech with zero
              knowledge of it, didn’t even know my way around a good system. But
              right now, I know more than I would’ve imagined that I can before
              I got into the academy. Very helpful, kind, patient and thoughtful
              teachers too. This training has really helped me! I highly
              recommend it! Thank youuu.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image7} alt="Oyin" />
              <p className="pl-6 font-bold">Oyinlola Babalola</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Axia Africa's product design class has taught me a lot of things
              regarding designs and how to interact with people. I've learnt a
              lot about the UX and UI processes. Each class has been a perfect
              blend of learning and fun. Thanks so much for this opportunity
              Axia Africa
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image6} alt="" />
              <p className="pl-6 font-bold">Dolapo Oyegunle</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 hidden md:flex flex-col items-center">
            <p className="h-60">
              Finding Axia Africa and being offered a training on product design
              was a turning point in my career. The lessons were planned
              properly and were made flexible to accommodate our different
              schedules.I will a 100% recommend Axia Africa to anyone who plans
              to take their career to the next level and is looking for a place
              to start.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image2} alt="" />
              <p className="pl-6 font-bold">Linda Nwodo</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 ">
            <p className="h-60">
              I had no clue where to start in learning Product design, then Axia
              Africa started an online training and I joined. Within few weeks
              of coaching I was able to understand both UX & UI. The classes are
              interesting and gives room to ask questions. Materials provided
              were helpful. It was a great to learning experience led by the
              fantastic teachers. I would highly recommend this training if you
              are a beginner{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image1} alt="" />
              <p className="pl-6 font-bold">Blessing Fabilola</p>
            </div>
          </div>
          <div className="card-style w-[5.5%]  mr-6 bg-brown p-4 ">
            <p className="h-60">
              Axia Africa has been so helpful to me. I got into tech with zero
              knowledge of it, didn’t even know my way around a good system. But
              right now, I know more than I would’ve imagined that I can before
              I got into the academy. Very helpful, kind, patient and thoughtful
              teachers too. This training has really helped me! I highly
              recommend it! Thank youuu.{" "}
            </p>

            <div className="flex justify-start mt-5 items-center p-3">
              <img src={image7} alt="Oyin" />
              <p className="pl-6 font-bold">Oyinlola Babalola</p>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
      <div className="w-full flex justify-center my-16">
        <div className="w-4/5 flex flex-col items-center">
          <h2 className="text-3xl font-bold  mb-6 font-serif">
            Partner With Us
          </h2>
          <p className="text-center">
            Do you have a passion for making impact and inspiring to the tech
            space? Partner with us at Axia Africa and share our passion of
            leading a generation of tech talents waiting to be tapped.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between flex-col  items-center md:flex-row">
        <img src={deco1} alt="graphics" className="w-3/5 md:w-1/5" />
        <button className="w-3/5 md:w-[10vw] my-4 bg-transparent text-base leading-6 px-4 py-2 border-3 border-black hover:border-blue h-14  shadow-[5px_5px_0px_0px_rgba(0,0,3)] hover:text-white hover:bg-blue hover:shadow-[5px_5px_0px_0px_orange]">
          {" "}
          Apply now
        </button>
        <img src={deco2} alt="graphics" className="w-3/5 md:w-1/5" />
      </div>
    </div>
  );
}

export default SuccessStories;
