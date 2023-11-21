import foster from "../assets/foster.png";

const Foster = () => {
  return (
    <div className="w-full p-4 md:p-0 flex justify-center bg-black mt-20">
      <div className="md:w-4/5 mt-20">
        <div className="mb-16">
          {" "}
          <h2 className="text-white font-bold text-2xl font-serif">
            Foster your tech knowledge
          </h2>
        </div>
        <div>
          <img src={foster} alt="" />
        </div>
        <div className="md:w-3/5 mt-12">
          <p className="text-white">
            Don’t just wait around, Register and join our students ready to
            enroll and kick start their tech career.
          </p>
        </div>
        <button className="bg-transparent text-white text-base leading-6 px-4 py-2 border-3 border-white hover:border-white  shadow-[5px_5px_0px_0px_rgba(255,255,255)] hover:text-blue hover:bg-white hover:shadow-[5px_5px_0px_0px_orange] my-20">
          {" "}
          Apply now
        </button>{" "}
      </div>
    </div>
  );
};

export default Foster;
