import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import { Link } from "react-router-dom";
import Msg from "../assests/msg.png";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Cookie from "cookie-universal";
import Inputfields from "../components/Inputfields";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../utils/base_url";
const Signupotp = () => {
  const cookies = Cookie();
  const OTP = cookies.get("otp");
  useEffect(() => {
    toast.success(`your OTP is:${OTP}`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, []);
  const [code, setCode] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [errors, setErrors] = useState("");
//console.log(errors)
  const handleSignupCode = () => {
    setErrors("");
    if (code.length > 0) {
      const requestBody = {
        otp: code,
      };
      axios
        .post(`${base_url}/auth/user/email/verification`, requestBody, {
          headers: {
            Authorization: "Token " + cookies.get("token"),
          },
        })
        .then(function (response) {
          console.log("successful Entered OTP ", response.data);
          if (response?.request?.status === 200) {
            if(response?.data?.message.toString()==="Successfully verified your email"){
              setIsCorrect(true)
              //setErrors(response?.data?.message)
            }
            else if(response?.data?.message.toString()==="Verification code does not match")
            {
              setIsCorrect(false)
              setErrors(response?.data?.message)
            }
            //console.log("java");
          }
        })
        .catch(function (error) {
          console.log("ERROR IN Entered OTP ", error);
          if (error?.response?.data?.user) {
            setErrors("Something went wrong");
          }
        });
    } else {
      setErrors("You have not entered the OTP sent");
    }
  };
  return (
    <div className="flex ">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
          <Heading subheading="SIGN UP" />

          <Inputfields
            fieldtitle="Enter Code"
            inputype="number"
            placeholder="123566"
            inputvalue={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            source={Msg}
          />
          {errors.length > 0 && (
            <div className="text-sm font text-red-700 text-center font-medium">
              <span>{errors}</span>
            </div>
          )}

          <div className="font-medium" onClick={handleSignupCode}>
            {isCorrect ? (
              <Link to="/">
                <Buttons text="Sign up" />
              </Link>
            ) : (
              <Buttons text="Sign up" />
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

export default Signupotp;
