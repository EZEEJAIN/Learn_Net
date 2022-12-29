import React from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Msg from "../assests/msg.png";
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
const Forgot = () => {
  return (
    
      <div className="flex ">
        <Welcome />
        <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
         <Heading
         subheading="FORGOT PASSWORD"/>
         
         <Inputfields
        fieldtitle="Enter Email"
        inputype="text"
        placeholder="Nazneen@gmail.com"
      
        source={Msg}
        />
         
         
          <div className="font-medium">
            <Link to="/forgotcode">
              <Buttons text="Send Confirmation Code " />
            </Link>
          </div>
          <div className="flex justify-center items-center font-medium text-sm mb-4 ">
            <p className="text-[#000000]">
              Are you new here?
              <span className="text-[#FE7524]">
                <Link to="/signup"> Sign Up</Link>
              </span>{" "}
            </p>
          </div>
          <div className="flex justify-center space-x-2 items-center mb-4 text-[#6C6C6C]  opacity-75 divide-solid ">
            <img
              src={Rectangle}
              alt="line"
              className="w-10 h-[2px] justify-center"
            />
            <p className=" mr-2"> Or </p>
            <img src={Rectangle} alt="line" className="w-10  h-[2px]" />
          </div>
          {/* <div className="flex justify-center items-center"> */}
            <Buttons1 />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Forgot;
