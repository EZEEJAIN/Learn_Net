import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Password from "../assests/password.png";
import Msg from "../assests/msg.png";
import axios from "axios";
//import Cookies from 'universal-cookie';
//import Dot from "../assests/dot.png";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
import { base_url } from "../utils/base_url";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
 const navigate=useNavigate()
//const cookies=new Cookies()


  //console.log(email,password);
  const handleSignIn = () => {
    setErrors("");
  
    const requestBody = {
      email: email,
      password: password,
    };
    axios.post(`${process.env.REACT_APP_SERVER_URL || base_url}/auth/check-email-verification`, {email:requestBody.email},{
      headers: {
        // Authorization: "Token " + cookies.get("token"),
      },
    })
    .then(function (response) {
      console.log("jaadu",response)
      if(response?.data===true){
        axios
        .post(`${process.env.REACT_APP_SERVER_URL || base_url}/auth/user/login`, requestBody, {
          headers: {
            // Authorization: "Token " + cookies.get("token"),
          },
        })
  
        .then(function (response) {
          console.log(
            "successful RESPONSE ",
            response.data
          );
          if (response?.request?.status === 400) {
            
            navigate("/")
          } else if (response?.request?.status === 200) {
            
            navigate("/loginsuccess")
            //cookies.set("Token",response?.data?.user?.token)
  
          }
          //console.log(response);
          //console.log("Token",response?.data?.user?.token)
        })
        .catch(function (error) {
          console.log("ERROR from Catch", error);
    
          if ( error?.response?.data?.errors?.email || error?.response?.data?.errors?.password ) 
          {
             if (email.length === 0 && password.length === 0) {
              setErrors("Both the fields are empty");
            }
            else if (email.length === 0) {
              setErrors("Email Field cannot not be blank");
             
            } else if (password.length === 0) {
              setErrors("Password Field cannot not be blank");
            }
          } 
          
          else if (error?.response?.data?.errors?.error) 
          setErrors("A user with this email and password was not found.");
        });
      }
      else {
        navigate("/signupotp")
      }
    })
    .catch(function (error) {
      console.log("error",error)
    })
    
  };
  

  return (
    <div className="flex">
      <Welcome />
      <div className="flex items-center sm:px-0  px-5 mx-auto md:mx-6 lg:mx-20 justify-center space-y-4 ">
        <div className="sm:mt-20 mt-24 md:mt-5 ">
          <Heading subheading="SIGN IN" />

          <Inputfields
            fieldtitle="Email Address"
            inputype="text"
            placeholder="Example@rocket.mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            source={Msg}
          />

          <Inputfields
            fieldtitle="Password"
            inputype="password"
            placeholder="***********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            source={Password}
          />

          <div className="flex justify-end items-center">
            <p className="text-[#FE7524] mb-4  font-semibold text-sm">
              <Link to="/forgot">Forgot Password?</Link>
            </p>
          </div>

          {errors.length > 0 && (
            <div className="text-red-700 font-medium text-sm text-center">
              {" "}
              <span>{errors}</span>{" "}
            </div>
          )}

          <div className=" font-medium " onClick={handleSignIn}>
          <Buttons text="Login" />
           
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

          <Buttons1 />
        </div>
      </div>
    </div>
  );
};

export default Signin;
