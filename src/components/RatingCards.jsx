import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const RatingCards = ({img,title,description,ratings,review,starcount}) => {
  return (
    <div className="xl:mx-20 lg:mx-5 md:mx-20 mx-3 my-10 box-content w-[300px] rounded-3xl h-[390px] shadow-slate-400 shadow-lg hover:scale-110 duration-300 cursor-pointer border-gray-200">
      <div className="flex-col space-y-7 ">
        <div>
          <img src={img} alt="card" />
        </div>
        <div className="mx-5">
          <div className="flex">
            <p className=" text-[#151515] font-semibold w-[250px] text-xl">
              {" "}
              {title}
            </p>
          </div>
          {/* <div>
          <Progressbar bgcolor="#ff00ff"  height={10} />
          </div> */}
          <div className="flex items-center">
            <p className=" text-[#6C6C6C] w-52 font-semibold my-2 text-sm">
              {" "}
              {description}
            </p>
            {/* <p className="text-base text-[#FE7524] font-semibold">{percent}</p> */}
          </div>
          <div className="flex space-x-1 my-2 items-center">
          {Array(Math.floor(starcount))
            .fill()
            .map((_, index) => (
              <AiFillStar className="text-yellow-300"/> 
              ))}<BsStarHalf className="text-yellow-300 text-sm"/>
              <p>{starcount}</p>
          </div>
          <div className="text-[#6C6C6C] flex space-x-1  justify-start items-center text-sm font-medium">
            <p>{ratings} </p>
            <p>ratings</p>
          </div>
          <div className="text-[#6C6C6C] text-sm flex justify-start items-center space-x-1 font-medium">
            <p>{review}</p>
            <p>reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCards;
