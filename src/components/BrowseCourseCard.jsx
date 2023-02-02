import React from "react";

const BrowseCourseCard = ({title}) => {
  return (
    <div className="xl:mx-20 lg:mx-5 md:mx-20 my-10 flex justify-center items-center text-xl font-bold py-3 px-1 w-[200px] box-content rounded-xl h-[50px] shadow-slate-400 shadow-lg hover:scale-110 duration-300 cursor-pointer border-gray-200">
        <p>{title}</p>
    </div>
  );
};

export default BrowseCourseCard;
