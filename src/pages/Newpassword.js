import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Password from "../assests/password.png";
//import Msg from "../assests/msg.png";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";

const Newpassword = () => {
  const [newPass, setNewPass] = useState("");
  const [newCPass, setNewCPass] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  //console.log(newPass, newCPass);
  const handleCheck = () => {
    if (newPass.length > 0 && newCPass.length > 0) {
      if (newPass.length <= 10 && newCPass.length <= 10) {
        if (newPass === newCPass) {
          setIsMatch(true);
        } else {
          alert("Password is not same");
        }
      } else {
        alert("Length exceed");
      }
    } else {
      alert("Please fill the required field");
    }
  };

  return (
    <div className="flex ">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
          <Heading subheading="NEW PASSWORD" />

          <Inputfields
            fieldtitle="New Password"
            inputype="password"
            placeholder="*********"
            inputvalue={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            source={Password}
          />

          <Inputfields
            fieldtitle="Confirm Password"
            inputype="password"
            placeholder="**********"
            inputvalue={newCPass}
            onChange={(e) => {
              setNewCPass(e.target.value);
            }}
            source={Password}
          />

          <div
            className="font-medium"
            onClick={handleCheck}
          >
            {isMatch ? (
              <Link to="/">
                <Buttons text="Confirm " />
              </Link>
            ) : (
              <Buttons text="Confirm" />
            )}
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
  );
};

export default Newpassword;
