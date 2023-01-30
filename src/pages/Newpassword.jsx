import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Buttons1 from "../components/Buttons1";
import Rectangle from "../assests/Rectangle.png";
import Password from "../assests/password.png";
import Cookie from "cookie-universal";
//import Msg from "../assests/msg.png";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Inputfields from "../components/Inputfields";
import { base_url } from "../utils/base_url";
import axios from "axios";

const Newpassword = () => {
  const [newPass, setNewPass] = useState("");
  const [newCPass, setNewCPass] = useState("");
  const navigate=useNavigate()
  const [errors, setErrors] = useState("");
  const cookies = Cookie();
  //const PASSWORD = cookies.get("password");

  //console.log(cookies.get("password"));
  const handleResetPassword = () => {
    if (newPass.length > 0 && newCPass.length > 0) {
      if(newPass.length >= 8 && newCPass.length >= 8){
      
        
        if (newPass === newCPass) {
          const requestBody = {
            password: newPass,
          };
          axios
            .post(`${base_url}/auth/user/reset/password`, requestBody, {
              headers: {
                Authorization: "Token " + cookies.get("token"),
              },
            })
            .then(function (response) {
              console.log("successful RESPONSE ", response.data);
              if (response?.request?.status === 200) {
                if(response?.data?.message.toString()==="You have Successfully Changed your password"){
                  navigate("/")
                  //setErrors(response?.data?.message)
                }
                else if(response?.data?.message)
                {
                 navigate("/newpass")
                  setErrors(response?.data?.message)
                }
                //console.log("java");
              }
            })
            .catch(function (error) {
              console.log("ERROR RESPONSE ", error);
              if (error?.response?.data?.user) {
                setErrors("Something went wrong");
              }
            });
        } else {
          setErrors("Password and Confirm password is not same");
        }
      }
        else{
          setErrors("Ensure password and Confirm Password have at least 8 characters.")
        }
    }
     else {
      setErrors("Please fill the required field");
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
           {errors.length > 0 && (
            <div className="text-sm font text-red-700 text-center font-medium">
              <span>{errors}</span>
            </div>
          )}
          <div className="font-medium" onClick={handleResetPassword}>
            
              <Buttons text="Confirm" />
            
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
