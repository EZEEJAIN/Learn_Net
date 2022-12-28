import React, { useState } from "react";
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
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cpassword, setCPassword] = useState("");
  // console.log(email, password, cpassword);

  const [isMatch, setIsMatch] = useState(false);
  const handleCheck = () => {
    if (password.length > 0 && cpassword.length > 0 && email.length > 0) {
      if (password === cpassword) {
        setIsMatch(true);
      } else {
        alert("Password is not same");
      }
    } else {
      alert("Please fill the required field");
    }
  };

  return (
    <div className="flex">
      <Welcome />
      <div className="flex items-center sm:px-0 px-5 mx-auto md:mx-20 justify-center space-y-4">
        <div className="sm:mt-5 mt-20  ">
          <Heading subheading="SIGN UP" />

          <Inputfields
            fieldtitle="Email Address"
            inputype="text"
            placeholder="Example@rocket.mail"
            inputvalue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            source={Msg}
          />

          <Inputfields
            fieldtitle="Password"
            inputype="password"
            placeholder="**********"
            inputvalue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            source={Password}
          />
          <Inputfields
            fieldtitle="Confirm Password"
            inputype="password"
            placeholder="***********"
            inputvalue={cpassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
            source={Password}
          />

          <div
            className="font-medium"
            onClick={handleCheck}
          >
            {isMatch ? (
              <Link to="/signupotp">
                <Buttons text="Send Confirmation Code " />
              </Link>
            ) : (
              <Buttons text="Send Confirmation Code" />
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

export default Signup;
