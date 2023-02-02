import React from "react";
import HomeImage from "../assests/HomepageImg.png"

const HomeHeader = () => {
  return (
    <div className="flex md:mx-20 mx-5 space-x-0 xl:space-x-72 lg:space-x-32 md:space-x-5">
      <div className="flex-col my-5 ">
        <p className="font-extrabold md:w-[320px] w-[270px] my-5 text-[#2F2F2F] text-4xl">
          THERE IS ALWAYS A WAY TO{" "}
          <span className="text-[#21B573]">LEARN MORE</span>
        </p>
        <p className="text-[#686868] text-xs font-medium md:w-[400px] w-[280px]">
          Our e-learning program has been developded to be a vehicle of
          delivering miltimedia learning solutions for your career.
        </p>
        <div className="flex space-x-5 my-5">
          <div className="box-content rounded-full px-7 py-3 bg-[#FE7524] shadow-md shadow-orange-300">
            <button className="text-white font-bold shadow-md shadow-[#FE7524] drop-shadow-2xl">
              {" "}
              Check Courses
            </button>
          </div>
          <div className="flex-col">
            <p className="text-[#151515] font-extrabold text-2xl">50+</p>
            <p className="text-[#7C7C7C] font-medium text-xs">Career Courses</p>
          </div>
          <div className="flex-col">
            <p className="text-[#151515] font-extrabold text-2xl">1M+</p>
            <p className="text-[#7C7C7C] font-medium text-xs">Our Students</p>
          </div>
        </div>
      </div>
      <div>
        <img src={HomeImage} alt="img" className="hidden md:block lg:w-[500px] lg:h-[300px] md:w-[450px] md:h-[250px]" />
      </div>
    </div>
  );
};

export default HomeHeader;
