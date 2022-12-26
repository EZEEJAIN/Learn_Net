import React from 'react'
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import { Link } from "react-router-dom";
import Msg from "../assests/msg.png";
import Welcome from "../components/Welcome";
import Heading from '../components/Heading';
import Inputfields from '../components/Inputfields';

const Signupotp = () => {
  return (
    <div className="flex ">
      <Welcome />
      <div className=" flex items-center md:mx-32 justify-center  space-y-4">
        <div>
         <Heading
         subheading="SIGN UP"/>
         
         <Inputfields
        fieldtitle="Enter Code"
        inputype="number"
        placeholder="123566"
        
        source={Msg}
        />
        
         
          <div className="flex font-medium items-center justify-center m-auto">
            <Link to="/">
              <Buttons text="Sign up" />
            </Link>
          </div>
          <div className="flex justify-center items-center font-medium text-sm mb-4 ">
            <p className="text-[#000000]">
              Already have an account?
              <span className="text-[#FE7524]">
                <Link to="/"> Sign In</Link>
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
  )
}

export default Signupotp
