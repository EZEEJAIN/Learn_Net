import React from 'react'
import Nav from "../components/Nav";
import Next from "../assests/next.png";
import Tick from "../assests/tickk.png";
import Like from "../assests/Like.png";
import Back from "../assests/back1.png";
import ClassTestcard1 from "../components/ClassTestcard1";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuizDetailsCard from '../components/QuizDetailsCard';
import Question from '../components/Question';

const ClassStart3 = () => {
    const routePath = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [routePath.pathname]);
    const cardlist = [
      {
        img: Tick,
        text: "video",
      },
      {
        img: Tick,
        text: "video",
      },
      {
        img: Tick,
        text: "video",
      },
      {
        img: Tick,
        text: "Reading",
      },
      {
        img: Tick,
        text: "video",
      },
      {
        img: Tick,
        text: "Reading",
      },
      {
        img: Tick,
        text: "Quiz",
      },
    ];
  return (
    
    <div className="mb-10">
    <Nav />
    <Sidebar/>
    <div className="flex-col mx-20">
      <div className="my-10 flex text-2xl font-semibold text-black  items-center space-x-2">
        <p className="text-[#FE7524]">UI UX Design Course by - Adam Evan </p>
        <img src={Next} alt="back" className=" w-2 h-2" />
        <p className="text-[#FE7524]">Week 2</p>
        <img src={Next} alt="next" className=" w-2 h-2  " />
        <p>Importance of using panels</p>
      </div>
      <div className="my-7 space-x-14 flex">
        <div className=" text-lg font-semibold text-black">
          <p>Introduction to Course 1</p>
        </div>
        <div className="flex space-x-4">
          <img src={Next} alt="back" className="rotate-180" />
          <p>Back</p>
          <p>Next</p>
          <img src={Next} alt="back" />
        </div>
      </div>
      <div className="flex space-x-28 ">
        <div className="flex-col space-y-4 my-2 items-center">
          {
            cardlist.map((elem, index) => (
              <ClassTestcard1 key={index} img={elem.img} text={elem.text} />
            ))
            //   <ClassTestcard />
          }
        </div>
        <div className="flex-col relative space-y-5">
          <div className="text-black text-5xl font-semibold">
            <p>Quiz : Importance of using panels</p>
          </div>
          <div className='flex py-10 justify-center'>
        <QuizDetailsCard/></div>
        </div>
        
      </div>
      <div className="flex items-center justify-end mx-44 text-base font-semibold text-[#6C6C6C] space-x-5">
        
        <div className="flex-col items-center">
          <Link to="/classstart2">
            {" "}
            <img src={Back} alt="back" className="w-16 h-16" />
            <p className="flex justify-center">Back</p>
          </Link>
        </div>

        <div className="flex-col items-center">
          <Link to="">
            <img src={Back} alt="next" className="w-16 h-16 rotate-180" />
            <p className="flex justify-center">Skip</p>
          </Link>
        </div>
      </div>
    </div>
   
    </div>
  )
}

export default ClassStart3
