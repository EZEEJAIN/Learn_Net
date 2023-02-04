import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Like from "../assests/Like.png";
import Back from "../assests/back1.png";
import { Link } from "react-router-dom";
// import FormLabel from "@mui/material/FormLabel";

const Question = ({questionNumber,questionTitle,option,onClick,disable}) => {
  const[optionValue,setOptionValue]=useState("");
  const onChange=(e)=>{
    setOptionValue(e)
  }
  const current=localStorage.getItem("QuizNumber")
  console.log(current)
  return (
    <div className="flex-coljustify-start items-center space-y-5 md:text-2xl text-lg text-black font-semibold">
      <p>Q{questionNumber}{")"} {questionTitle}</p>
      <div className="flex justify-start items-center space-x-5 text-base text-[#6C6C6C] font-medium">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
           
            
          >
            {option.map((elem,index)=>(
            <FormControlLabel
              value={elem}
              control={<Radio />}
              label={elem}
              color="#6C6C6C"
              onChange={()=>onChange(elem)}
            />))}
            {/* <FormControlLabel
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
            /> */}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="box-content rounded-full md:w-[90px] w-[60px] lg:mx-80 md:mx-60 drop-shadow-2xl px-7 py-3 bg-[#FE7524] shadow-md shadow-orange-300" onClick={optionValue.length>0 && !disable && onClick}>
          <button className="text-white text-base md:text-2xl font-bold shadow-md shadow-[#FE7524] drop-shadow-2xl">
            {" "}
            Confirm
          </button>
        </div>
        <div className="flex items-center justify-end text-base font-semibold text-[#6C6C6C] space-x-5">
         
        
            <div className="flex-col items-center">
              <Link to="/classstart3">
                {" "}
                <img src={Back} alt="back" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8" />
                <p className="flex justify-center">Back</p>
              </Link>
            </div>

            <div className="flex-col items-center">
              <Link to="">
                {" "}
                <img src={Back} alt="next" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8 rotate-180" />
                <p className="flex justify-center" onClick={()=>localStorage.setItem("QuizNumber",parseInt(current)+1)}>Next</p>
              </Link>
            </div>
          </div>
    </div>

  );
};

export default Question;
