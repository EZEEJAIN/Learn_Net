import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import { base_url } from "../utils/base_url";

const Loginsuccess = () => {
 

  return (
    <div className="text-center font-bold">
      <div>
        <p>Login successfully to the dashboard</p>
      </div>

      <div className="flex justify-center items-center font-medium text-sm mb-20" >
       
          <Link to="/">
            <Buttons text="LOGOUT" />
          </Link>
       
      </div>
    </div>
  );
};

export default Loginsuccess;
