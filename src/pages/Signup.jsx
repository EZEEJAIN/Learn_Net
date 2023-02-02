import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Password from "../assests/password.png";
import Msg from "../assests/msg.png";
import Cookie from 'cookie-universal'
//import Dot from "../assests/dot.png";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
import { base_url } from "../utils/base_url";
import axios from "axios";
const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate=useNavigate()
  const cookies = Cookie()

  const handleSignUp = () => {
    setErrors("");
    if (password.length > 0 && cpassword.length > 0 && email.length > 0) {
      if (password === cpassword) {
        const requestBody = {
          email: email,
          password: password,
        };

        axios
          .post(`${process.env.REACT_APP_SERVER_URL || base_url}/auth/user/register`, requestBody, {
            headers: {},
          })
          .then(function (response) {
            console.log("successful RESPONSE ", response.data);
            if (response?.request?.status === 400) {
             navigate("/signup")
            } else if (response?.request?.status === 200) {
              navigate("/signupotp")
              cookies.set('token',response?.data?.token)
              cookies.set('otp',response?.data?.otp)
              //cookies.set('password',password)
            }
          })
          .catch(function (error) {
            console.log("ERROR RESPONSE ", error);

            if (
              error?.response?.data?.errors?.email ||
              error?.response?.data?.errors?.password
            ) {
              if (error?.response?.data?.errors?.email?.toString()==="user with this email already exists.") {
                setErrors(error?.response?.data?.errors?.email?.toString());
              }
              else if(error?.response?.data?.errors?.email?.toString()==='Enter a valid email address.')
              {
                setErrors(error?.response?.data?.errors?.email?.toString()); 
              }
              else if (error?.response?.data?.errors?.password) {
                setErrors("Ensure password has at least 8 characters.");
              }
            } 
          });
      } else {
        setErrors("Password and Confirm password is not same");
      }
    } else {
      setErrors("Please fill the required field");
    }
  };

  
  
  return (
    <div className="flex">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
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

            {errors.length>0 &&
            <div className="text-sm font text-red-700 text-center font-medium"><span>{errors}</span></div>
            }

          <div className="font-medium" onClick={handleSignUp}>
            
              <Buttons text="Send Confirmation Code" />
          
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
