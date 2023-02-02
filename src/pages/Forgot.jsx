import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Msg from "../assests/msg.png";
import Welcome from "../components/Welcome";
import { Link, useNavigate } from "react-router-dom";
import Cookie from 'cookie-universal'
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
import { base_url } from "../utils/base_url";
import axios from "axios";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [errors, setErrors] = useState("");
  const navigate=useNavigate()
  const cookies = Cookie()
  const handleForgotPassword = () => {
   // console.log(errors);

    setErrors("");
    if (email.length > 0) {
      const requestBody = {
        email: email,
      };
      axios
        .post(`${process.env.REACT_APP_SERVER_URL || base_url}/auth/user/forgot/password`, requestBody, {
          headers: {
            // Authorization: "Token " + cookies.get("token"),
          },
        })
        .then(function (response) {
          console.log("successful Entered OTP ", response.data);
          if (response?.request?.status === 500) {
            navigate("/forgot")
            setErrors("You have not entered valid Email")
          } else if (response?.request?.status === 200) {
            navigate("/forgotcode")
            cookies.set('token',response?.data?.token)
            cookies.set('otp',response?.data?.otp)
            // cookies.set('email',email.toString())
            localStorage.setItem('email',email)
          }
        })
        .catch(function (error) {
          console.log("ERROR IN Entered OTP ", error);
          setErrors("This type of Email does not exist")
        });
    } else {
      setErrors("You have not entered your Email");
    }
  };
  //console.log(cookies)
  return (
    <div className="flex ">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
          <Heading subheading="FORGOT PASSWORD" />

          <Inputfields
            fieldtitle="Enter Email"
            inputype="text"
            placeholder="Nazneen@gmail.com"
            inputValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            source={Msg}
          />
          
          {errors.length>0 &&
            <div className="text-sm font text-red-700 text-center font-medium"><span>{errors}</span></div>
            }
          <div className="font-medium" onClick={handleForgotPassword}>
           
              <Buttons text="Send Confirmation Code " />
           
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
