import doddle from "../assets/doddle2.svg";

function Discovery() {
  return (
    <div className="w-[100%] md:flex md:justify-center p-4 md:p-0  mt-20">
      <div className="md:w-[70%] w-full">
        <div className="flex md:flex-row flex-col -mb-28 md:mb-0 ">
          <div className="">
            <h2 className="md:text-3xl text-xl font-bold pb-8 font-serif">
              Discover the right school for your journey
            </h2>
            <p>
              Axia Africa offers you the chance to explore schools which has
              variety of courses to learn from, like product design and Front
              end,
            </p>
          </div>
          <div>
            <img
              className="w-1/2 md:w-full animate-[bounce_3s_ease-in-out_infinite]"
              src={doddle}
              alt="graphics"
            />
          </div>
        </div>

        <div className="flex md:flex-row  md:flex-wrap flex-col w-full items-center md:justify-center  mt-24">
          {/*Card 1*/}
          <div className="w-[90%] md:w-2/5 border-l-3  border-b-3 md:pl-2 flex justify-center m-8 ">
            <div className="bg-secondary w-96 -mt-12 md:max-h-[65vh]">
              <div className="m-5  ">
                <h2 className="font-bold md:text-xl text-base">
                  School of Product
                </h2>
                <p className="py-4 text-black text-base">
                  We offer you Product courses such as Product Design,Product
                  management and Product marketing by equipping you with the
                  right trainings and guidelines. Become a world class personnel
                  and job-ready candidate in the product field.
                </p>
              </div>
              <div className="m-5">
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">View courses</p>
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
          </div>

          {/*Card 2*/}
          <div className="w-[90%] md:w-2/5 border-l-3 mt-20 md:mt-0 border-b-3 md:pl-2 flex justify-center m-8">
            <div className="bg-secondary w-96 -mt-12 md:max-h-[65vh]">
              <div className="m-5 ">
                <h2 className="font-bold md:text-xl text-base">
                  School of Systems Engineering
                </h2>
                <p className="py-4 text-black text-base">
                  Begin your learning process in Front-End Web Development,
                  Back-End Web Development and more. Discover career
                  opportunities available for you. Speak to professionals and
                  read through materials and the programme designed specifically
                  for you.
                </p>
              </div>
              <div className="m-5">
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">View courses</p>
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
          </div>

          {/*Card 3*/}
          <div className="w-[90%] md:w-2/5 border-l-3  border-b-3 md:pl-2 flex justify-center mt-20 m-8">
            <div className="bg-secondary w-96 -mt-12 md:max-h-[65vh]">
              <div className="m-5 ">
                <h2 className="font-bold md:text-2xl text-base">
                  School of Data
                </h2>
                <p className="py-4 text-black text-base">
                  Even as a newbie in the data analysis space, you can jumpstart
                  your journey and hone your skills by kicking it off with the
                  Axia Africa School of Data Analysis.
                </p>
              </div>
              <div className="m-5">
                {" "}
                <a href="#" className="flex font-bold">
                  <p className="underline text-blue">View courses</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discovery;
