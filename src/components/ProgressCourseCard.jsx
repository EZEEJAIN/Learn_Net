import React from "react";

const ProgressCourseCard = ({
  img,
  title,
  progress,
  percent,
  description,
  about,
}) => {
  return (
    <div className="mx-20 my-10 box-content w-[300px] rounded-3xl h-[380px] shadow-slate-400 shadow-lg hover:scale-110 duration-300 cursor-pointer border-gray-200">
      <div className="flex-col space-y-5 ">
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
            <p className=" text-[#6C6C6C] w-32 font-semibold my-2 text-base">
              {" "}
              {progress}
            </p>
            <p className="text-base text-[#FE7524] font-semibold">{percent}</p>
          </div>
          <div className="text-[#151515] text-base font-normal">
            <p>{description} </p>
          </div>
          <div className="text-[#6C6C6C] text-xs font-semibold">
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCourseCard;
