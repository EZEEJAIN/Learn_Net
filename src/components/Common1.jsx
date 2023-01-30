import React from "react";
import Ball from "../assests/Ellipse 24.png";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Common1 = () => {
  const arr = [1, 2, 3, 4];

  return (
    <>
      <div className="flex-col items-center justify-start mt-8 ml-4">
        <div className="flex items-center justify-start space-x-3 font-semibold text-2xl mb-4">
          <img src={Ball} alt="ball" />
          <p> Edavan Van</p>
        </div>

        <div className="flex font-bold md:text-3xl text-xl  ">
          <p>Project Management Course</p>
        </div>

        <div className="flex font-bold md:text-3xl text-xl ">
          <p>Professional</p>
        </div>

        <div className="flex font-normal  text-xs mt-5">
          <p>
            Our e-learning program has been developded to be a vehicle of
            delivering
          </p>
        </div>

        <div className="flex font-normal  text-xs mt-1 ">
          <p> multimedia learning solutions for your career.</p>
        </div>
        <div className="flex space-x-2 items-center mt-3 justify-start">
          <div className="flex items-center">
            {
            arr.map((elem, index) => (
              <AiFillStar className="text-yellow" />
            ))
            }
            <BsStarHalf className="text-yellow" />
          </div>
          <p>4.8</p>
          <p className="font-bold text-sm">120 ratings</p>
        </div>
        <div className="flex items-start justify-center font-bold  shadow-md shadow-[#FE7524] w-44 bg-[#FE7524] mt-4 rounded-full text-[#FFFFFF] mb-3 py-3 px-4">
          <button>ENROLL NOW </button>
        </div>
        <div className="flex justify-start font-bold">
          <p>120 Already Enrolled</p>
        </div>
      </div>
    </>
  );
};

export default Common1;
