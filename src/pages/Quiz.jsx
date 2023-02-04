import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Next from "../assests/next.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TimerIcon from "@mui/icons-material/Timer";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dropdown from "../components/Dropdown";
import Question from "../components/Question";
import QuestionData from "../utils/ques.json";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const Quiz = () => {
  const [quiz, setQuiz] = React.useState("");
 const[filteredQuestion,setFilteredQuestion]=useState([]);
 const[score,setScore]=useState(0);
 const[disable,setDisable]=useState(false)

const handleConfirm=()=>{
  if(score!=3){
    setScore((prev)=>prev+3)
  }
  else{
setDisable(true)
  }
}

  let QuizId = localStorage.getItem("QuizNumber");
  // console.log(QuizId)
  useEffect(() => {
    const SelectedQuestion = QuestionData.filter((elem, index) => {
      console.log(elem.id, parseInt(QuizId));
      // return elem.id === parseInt(QuizId);
     if(elem.id===parseInt(QuizId)) 
     {
      return elem;
     }
    });
    console.log(SelectedQuestion);
    setFilteredQuestion(SelectedQuestion)
  }, [QuizId]);

  useEffect(()=>{
    let QuizId = localStorage.getItem("QuizNumber");
  console.log(QuizId)
  })

  // console.log(QuestionData)
  const handleChange = (event) => {
    setQuiz(event.target.value);
  };
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="lg:mx-10 md:mx-10 mx-4 my-10 flex lg:text-2xl md:text-lg text-xl text-center xl:w-full  font-semibold text-black  items-center space-x-1 md:space-x-2">
        <p className="text-[#FE7524]  md:block hidden">UI UX Design Course by - Adam Evan </p>
        <img src={Next} alt="back" className=" md:block hidden w-2 h-2" />
        <p className="text-[#FE7524]  md:block hidden">Week 2</p>
        <img src={Next} alt="next" className=" md:block hidden w-2 h-2  " />
        <p>Importance of using panels</p>
      </div>
      <div className="lg:mx-10 md:mx-10 mx-4 flex-col block relative space-y-5 my-10 md:my-10">
        <div className="text-black xl:text-5xl lg:text-3xl md:text-2xl text-2xl font-semibold">
          <p>Quiz: Importance of using panels</p>
        </div>
      </div>
      <div className="lg:mx-10 md:mx-10 mx-4 flex items-center justify-between">
        <Dropdown />
        <div className="lg:mx-10 md:mx-10 mx-4 flex justify-center items-center md:space-x-10 space-x-3">
          <div className="flex justify-center md:space-x-2">
            <TimerIcon className="text-red-500" />
            <p className="text-red-500">30 sec</p>
          </div>
          <p className={`${score===0?"text-[#E5E5E5] font-semibold":"text-[#21B573] font-semibold"}`}>
            {score}<span className="text-black font-semibold">/3 Scores</span>
          </p>
        </div>
      </div>
      <div className="lg:mx-10 md:mx-10 mx-4 my-10">
        {" "}
        {filteredQuestion.map((elem,index)=>(
        <Question 
        key={index}
        questionNumber={elem.id}
        questionTitle={elem.questionTitle}
        option={elem.option}
        onClick={handleConfirm}
        disable={disable}
        />))}
      </div>{" "}
    </div>
  );
};

export default Quiz;
