import React from "react";
import DownloadCard from "./DownloadCard";

const DownloadCardPopup = () => {
  return (
    <div className="box-content xl:w-[700px] px-3 py-5 flex justify-center lg:w-[700px] h-[600px] md:w-[650px] w-[200px] md:h-[360px] xl:h-[360px] bg-white rounded-xl">
        <div className="flex-col mx-10 space-y-7">
<div className="flex my-5 justify-between items-center">
<p className="text-xl">Download PDF's</p>
<p className="text-2xl">X</p>
</div>
<div className="grid md:grid-cols-4 md:mx-0 gap-1 md:gap-2 ">
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
