import React from "react";
import Sidebar from "../../src/assests/1.png";
import Avatarr from "../../src/assests/avatar.png";
import Dropdown from "../../src/assests/2.png";
import Avatar from '@mui/material/Avatar';
import Bell from "../../src/assests/bellicon.png";
import Search from "../../src/assests/search.png";
import Learnnet from "../../src/assests/Learnnet.png";

const Nav = () => {
  return (
    <div className="mx-10 my-5 flex justify-between items-center py-2 px-5 box-content w-[1350px] h-[40px] bg-white rounded-xl drop-shadow-2xl border-2">
      <div className="flex justify-start items-center space-x-5">
        <img src={Sidebar} alt="side" className="w-5 h-5" />
        <img src={Learnnet} alt="side" className="w-28 h-5" />
        <div className="flex justify-between items-center py-2 px-5 box-content w-[200px] h-[16px] border-2 bg-transparent rounded-full">
          <p className="text-[#7C7C7C]">What do want to learn?</p>
          <img src={Search} alt="side" className="w-4 h-4" />
        </div>
      </div>

      <div className="flex justify-center space-x-5 items-center">
<img src={Bell} alt="bell" className="w-4 h-5" />
<p className="text-[#7C7C7C]">Help & FAQ</p>
<Avatar alt="Remy Sharp" src={Avatarr} />
<img src={Dropdown} alt="side" className="w-3 h-2" />
      </div>
    </div>
  );
};

export default Nav;
