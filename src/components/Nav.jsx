import React, { useState } from "react";
import Sidebar from "../../src/assests/1.png";
import Avatarr from "../../src/assests/avatar.png";
import Dropdown from "../../src/assests/2.png";
import Avatar from "@mui/material/Avatar";
import Bell from "../../src/assests/bellicon.png";
import Search from "../../src/assests/search.png";
import Learnnet from "../../src/assests/Learnnet.png";
import Data from "../utils/data.json";
import { useEffect } from "react";

const Nav = ({}) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  console.log(data);
  // console.log(Data)

  useEffect(() => {
    setData(Data?.products);
  }, []);

  useEffect(() => {
    let test_data = Data.products.filter((elem) => {
      let brand = elem.brand;
      return brand.toLowerCase().includes(query?.toLowerCase());
    });
    setData(test_data);
  }, [query]);
  return (
    <>
      <div className="sticky top-0 z-10 md:mx-10 mx-3 my-0 md:my-5 flex justify-between items-center py-2 px-5 box-content xl:w-[1350px] lg:w-[900px] h-[40px] bg-white rounded-xl drop-shadow-2xl border-2">
        <div className="flex justify-start items-center space-x-5">
          <img src={Sidebar} alt="side" className="w-5 h-5 md:block hidden" />
          <img src={Learnnet} alt="side" className="w-28 h-5" />
          <div className="hidden md:flex justify-between items-center py-2 px-5 box-content w-[200px] h-[16px] border-2 bg-transparent rounded-full">
            <input
              type="text"
              placeholder="What do want to learn?"
              className="outline-none"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {/* <p className="text-[#7C7C7C]">What do want to learn?</p> */}
            <img src={Search} alt="side" className="w-4 h-4" />
          </div>
        </div>

        <div className="flex justify-center space-x-5 items-center">
          <img src={Bell} alt="bell" className="w-4 h-5 hidden md:flex" />
          <p className="text-[#7C7C7C] hidden md:flex">Help & FAQ</p>
          <Avatar alt="Remy Sharp" src={Avatarr} />
          <img src={Dropdown} alt="side" className="w-3 h-2" />
        </div>
      </div>
      <div>
        {/* {data.map((elem, index) => (
          <span>{elem.brand}</span>
        ))} */}
      </div>
    </>
  );
};

export default Nav;
