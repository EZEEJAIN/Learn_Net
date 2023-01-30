import React from "react";

const RatingCards = ({img,title,description,ratings,review}) => {
  return (
    <div className="mx-20 my-10 box-content w-[300px] rounded-3xl h-[380px] shadow-slate-400 shadow-lg hover:scale-110 duration-300 cursor-pointer border-gray-200">
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
          <div className="text-[#6C6C6C] flex space-x-1 justify-start items-center text-sm font-medium">
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
