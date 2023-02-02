import React from "react";
import DownloadCard from "./DownloadCard";

const DownloadCardPopup = () => {
  return (
    <div className="box-content border-2 w-[700px] px-3 h-[360px] bg-white rounded-xl">
        <div className="flex-col mx-10 space-y-7">
<div className="flex my-5 justify-between items-center">
<p className="text-xl">Download PDF's</p>
<p className="text-2xl">X</p>
</div>
<div className="grid grid-cols-4 gap-2 ">
          {Array(4)
            .fill()
            .map((_, index) => (
               
    <DownloadCard/>
              ))}
           </div>
<div className="box-content rounded-full mx-52 px-7 py-3  bg-transparent shadow-md w-28 flex justify-center items-center border-2 border-black">
    <button className="border-none">Download All</button>
</div>
    </div></div>
  );
};

export default DownloadCardPopup;
