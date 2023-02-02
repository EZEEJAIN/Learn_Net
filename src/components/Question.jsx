import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Like from "../assests/Like.png";
import Back from "../assests/back1.png";
import { Link } from "react-router-dom";
// import FormLabel from "@mui/material/FormLabel";

const Question = () => {
  return (
    <div className="flex-coljustify-start items-center space-y-5 text-2xl text-black font-semibold">
      <p>Q1 ) Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
      <div className="flex justify-start items-center space-x-5 text-base text-[#6C6C6C] font-medium">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
           
            
          >
            <FormControlLabel
              value="burger"
              control={<Radio />}
              label="Bob’s Burgers"
              color="#6C6C6C"
            />
            <FormControlLabel
              value="stranger"
              control={<Radio />}
              label="Stranger Things"
              color="#6C6C6C"
            />
            <FormControlLabel
              value="naruto"
              control={<Radio />}
              label="Naruto"
              color="#6C6C6C"
            />
            <FormControlLabel
              value="sins"
              control={<Radio />}
              label="Seven deadly sins"
              color="#6C6C6C"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="box-content rounded-full w-[90px] mx-80 drop-shadow-2xl px-7 py-3 bg-[#FE7524] shadow-md shadow-orange-300">
          <button className="text-white font-bold shadow-md shadow-[#FE7524] drop-shadow-2xl">
            {" "}
            Confirm
          </button>
        </div>
        <div className="flex items-center justify-end  text-base font-semibold text-[#6C6C6C] space-x-5">
         
        
            <div className="flex-col items-center">
              <Link to="/classstart3">
                {" "}
                <img src={Back} alt="back" className="w-16 h-16" />
                <p className="flex justify-center">Back</p>
              </Link>
            </div>

            <div className="flex-col items-center">
              <Link to="">
                {" "}
                <img src={Back} alt="next" className="w-16 h-16 rotate-180" />
                <p className="flex justify-center">Next</p>
              </Link>
            </div>
          </div>
    </div>

  );
};

export default Question;
