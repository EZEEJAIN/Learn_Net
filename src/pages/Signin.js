import React from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Password from "../assests/password.png";
import Msg from "../assests/msg.png";
//import Dot from "../assests/dot.png";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";

const Signin = () => {
  return (
    <div className="flex ">
      <Welcome />
      {/* <div className=""> */}
      <div className=" flex items-center md:mx-32 justify-center  space-y-4">
        <div>
          <Heading
          subheading="SIGN IN"
          />
          
          <Inputfields
        fieldtitle="Email Address"
        inputype="text"
        placeholder="Example@rocket.mail"
  
        source={Msg}
        />
         <Inputfields
        fieldtitle="Password"
        inputype="password"
        placeholder="***********"
       
        source={Password}
        />

          <div className="flex justify-end items-center">
            <p className="text-[#FE7524] mb-4  font-semibold text-sm">
              <Link to="/forgot">Forgot Password?</Link>
            </p>
          </div>
          <div className="flex font-medium items-center justify-center m-auto">
            <Link to="/loginsuccess">
              <Buttons text="Login" />
            </Link>
          </div>
          <div className="flex justify-center items-center font-medium text-sm mb-4 ">
            <p className="text-[#000000]">
              Are you new here?
              <span className="text-[#FE7524]">
                <Link to="/signup"> Sign up</Link>
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
      {/* </div> */}
    </div>
  );
};

export default Signin;
