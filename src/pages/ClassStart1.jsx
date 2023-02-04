import React from "react";
import ClassTestcard1 from "../components/ClassTestcard1";
import ClassTestcard2 from "../components/ClassTestcard2";
import Nav from "../components/Nav";
import Tick from "../assests/tickk.png";
import Text from "../assests/text.png";
import Books from "../assests/books.png";
import Playblack from "../assests/playblack.png";
import Like from "../assests/Like.png";
import Back from "../assests/back1.png";
import Next from "../assests/next.png";
import Galaxy from "../assests/Galaxy.mp4" 
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ClassStart1 = () => {
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
  ];
  const cardlist2 = [
    {
      img: Playblack,
      text: "video",
    },
    {
      img: Books,
      text: "Reading",
    },
    {
      img: Text,
      text: "Quiz",
    },
  ];
  return (
    <div className="mb-10">
      <Nav />
      <div className="lg:mx-20 md:mx-10 mx-2 my-10 flex lg:text-2xl md:text-lg text-xl text-center md:w-full w-[300px] font-semibold text-black  items-center space-x-1 md:space-x-2">
        <p className="text-[#FE7524] md:block hidden">UI UX Design Course by - Adam Evan </p>
        <img src={Next} alt="back" className=" md:block hidden w-2 h-2" />
        <p className="text-[#FE7524] md:block hidden">Week 2</p>
        <img src={Next} alt="next" className=" w-2 h-2 md:block hidden " />
        <p>Importance of using panels</p>
      </div>
      <div className="lg:mx-20 md:mx-10 mx-5 my-7 md:space-x-14 space-x-4 flex">
        <div className=" md:text-lg text-base font-semibold text-black">
          <p>Introduction to Course 1</p>
        </div>
       
       
        <div className="md:flex hidden space-x-4 ">
          <img src={Next} alt="back" className="rotate-180 md:w-6 md:h-10 w-7 h-7" />
          <p>Back</p>
          <p>Next</p>
          <img src={Next} alt="back" className=" md:w-6 md:h-10 w-7 h-7"/>
        </div>

        <div className="flex md:hidden items-center justify-end xl:mx-72 lg:mx-20 md:mx-10 mx-5 text-base font-semibold text-[#6C6C6C] space-x-5">
        <div className="flex-col items-center">
          <Link to="/">
            {" "}
            <img src={Back} alt="back" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8" />
            <p className="flex justify-center">Back</p>
          </Link>
        </div>

        <div className="flex-col items-center">
          <Link to="/classstart2">
            <img src={Back} alt="next" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8 rotate-180" />
            <p className="flex justify-center">Next</p>
          </Link>
        </div>
      </div>


      </div>
      <div className="xl:space-x-28 lg:space-x-10 block lg:flex lg:mx-20 md:mx-10 mx-2  justify-center md:justify-start">
        <div className="flex-col space-y-4 my-2 items-center ">
          {
            cardlist.map((elem, index) => (
              <ClassTestcard1 key={index} img={elem.img} text={elem.text} />
            ))
            //   <ClassTestcard />
          }
          {
            cardlist2.map((elem, index) => (
              <ClassTestcard2 key={index} img={elem.img} text={elem.text} />
            ))
            //   <ClassTestcard />
          }
        </div>
        <div className="lg:mx-20 md:mx-10 mx-2 justify-start space-y-5 ">
          <div className="text-black xl:text-5xl lg:text-3xl md:text-2xl text-xl font-semibold">
            <p>Importance of using panels</p>
          </div>
          <video width="320" height="240" controls src={Galaxy}>
</video>
          {/* <img
            src={cardImg1}
            alt="img"
            className="w-[600px] xl:h-[380px] lg:h-[280px] md:h-[230px] rounded-b-3xl"
          />
          <img
            src={Play}
            alt="play"
            className="absolute xl:top-[200px] xl:right-64 lg:top-[150px] lg:right-[140px]"
          /> */}
        </div>
      </div>
      <div className="flex items-center justify-end xl:mx-72 lg:mx-20 md:mx-10 mx-5 mt-6 text-base font-semibold text-[#6C6C6C] space-x-5">
        <div className="flex-col items-center">
          <img src={Like} alt="like" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8" />
          <p className="flex justify-center">Like</p>
        </div>
        <div className="flex-col items-center">
          <Link to="/">
            {" "}
            <img src={Back} alt="back" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8" />
            <p className="flex justify-center">Back</p>
          </Link>
        </div>

        <div className="flex-col items-center">
          <Link to="/classstart2">
            <img src={Back} alt="next" className="lg:w-16 lg:h-16 md:w-10 md:h-10 w-8 h-8 rotate-180" />
            <p className="flex justify-center">Next</p>
          </Link>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ClassStart1;
