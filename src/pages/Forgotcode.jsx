import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
//import Password from "../assests/password.png";
import Msg from "../assests/msg.png";
import Cookie from 'cookie-universal'
//import Dot from "../assests/dot.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
import axios from "axios";
import { base_url } from "../utils/base_url";

const Forgotcode = () => {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState("");
  const navigate=useNavigate()
  const cookiesFPC = Cookie()
  const EMAIL = localStorage.getItem("email");
    const OTP = cookiesFPC.get("otp");
  //console.log(EMAIL)
  useEffect(() => {
    
    toast.success(`your OTP is:${OTP}`, {
      position: "top-right",
      autoClose: true,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);
  
  const handleForgotPasswordCode = () => {
    setErrors("");
    if (code.length > 0) {
      const requestBody = {
       
    email:EMAIL,
    otp:code

      };
      axios
        .post(`${base_url}/auth/user/forgot/password/verify`, requestBody, {
          headers: {
            Authorization: "Token " + cookiesFPC.get("token"),
          },
        })
        .then(function (response) {
          console.log("successful Entered OTP ", response.data);
          if (response?.request?.status === 400)
          {
           navigate("/forgotcode")
           
          }
          else if(response?.request?.status === 200)
          {
            navigate("/newpass")
          }
        })
        .catch(function (error) {
          console.log("ERROR IN Entered OTP ", error);
          if (error?.response?.data?.user) {
            setErrors("Something went wrong");
          }
          else if (error?.response?.data?.error)
          setErrors("The verification code entered does not match")
        });
    } else {
      setErrors("You have not entered the OTP sent");
    }
  };

  // console.log(code)
  return (
    <div className="flex ">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
          <Heading subheading="FORGOT PASSWORD" />

          <Inputfields
            fieldtitle="Enter Code"
            inputype="number"
            placeholder="12345678"
            inputvalue={code}
            onChange={(e) => setCode(e.target.value)}
            source={Msg}
          />
          {errors.length > 0 && (
            <div className="text-sm font text-red-700 text-center font-medium">
              <span>{errors}</span>
            </div>
          )}
          <div className="font-medium" onClick={handleForgotPasswordCode}>
            
              <Buttons text="Create New Password" />
            
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

export default Forgotcode;
