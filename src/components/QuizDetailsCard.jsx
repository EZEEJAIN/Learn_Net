import React from "react";

const QuizDetailsCard = () => {
  return (
    <div className="box-content w-[500px] h-[300px] border-2 shadow-2xl rounded-3xl bg-transparent">
      <div className="flex-col space-y-4 mx-10 my-5 ">
        <p className="text-2xl font-semibold text-black">Dont miss the chance to test your skill and leaning!</p>
       
        <div className="flex justify-start space-x-4 items-center text-lg font-medium text-[#6C6C6C]">
        <div className="box-content w-2 h-2 rounded-full items-center justify-center bg-[#FE7524]"></div>
        <p>45 mins Quiz</p>
        </div>

        <div className="flex justify-start space-x-4 items-center  text-lg font-medium text-[#6C6C6C]">
        <div className="box-content w-2 h-2 rounded-full items-center justify-center bg-[#FE7524]"></div>
        <p>20 MCQ questions</p>
        </div>

        <div className="flex justify-start space-x-4 items-center  text-lg font-medium text-[#6C6C6C]">
        <div className="box-content w-2 h-2 rounded-full items-center justify-center bg-[#FE7524]"></div>
        <p>80% to pass</p>
        </div>

        <div className="box-content rounded-full w-[90px] mx-40 drop-shadow-2xl px-7 py-3 bg-[#FE7524] shadow-md shadow-orange-300">
          <button className="text-white font-bold shadow-md shadow-[#FE7524] drop-shadow-2xl">
            {" "}
            Start NOW
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default QuizDetailsCard;
