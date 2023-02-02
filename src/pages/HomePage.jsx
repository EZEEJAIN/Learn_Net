import React from "react";
import HomeHeader from "../components/HomeHeader";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import Nav from "../components/Nav";
import ProgressCourseCard from "../components/ProgressCourseCard";
import CardImg1 from "../assests/cardImg1.png";
import Nextarrow from "../assests/nextarrow.png";
import CardImg2 from "../assests/cardImg2.png";
import CardImg3 from "../assests/cardImg3.png";
import { Link } from "react-router-dom";
import RatingCards from "../components/RatingCards";
import BrowseCourseCard from "../components/BrowseCourseCard";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const cardlist = [
    {
      image: CardImg1,
      title: "UI UX Design Course by-Adam Evan",
      progress: "Overall Progress",
      percent: "40",
      description: "Next Up- Prototyping ",
      about: "Week 4 | Video | 20min",
      link: "/classstart1",
    },
    {
      image: CardImg2,
      title: "UI UX Design Course by-Adam Evan",
      progress: "Overall Progress",
      percent: "80",
      description: "Next Up- Prototyping ",

      about: "Week 4 | Video | 20min",
      link: "",
    },
    {
      image: CardImg3,
      title: "Graphic Design Course by -Adam Evan",
      progress: "Overall Progress",
      percent: "20",
      description: "Next Up- Prototyping ",
      about: "Week 4 | Video | 20min",
     link:""
    },
  ];

  const cardlist1 = [
    {
      image: CardImg1,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor  ",
      starcount: 4.8,
      ratings: "120",
      review: "80",
      link: "",
    },
    {
      image: CardImg2,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor ",
      starcount: 4.8,
      ratings: "120",
      review: "80",
      link: "",
    },
    {
      image: CardImg3,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor ",
      starcount: 4.8,
      ratings: "120",
      review: "80",
      link: "",
    },
  ];
  const cardlist3 = [
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
  ];
  const cardlist4 = [
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
    {
      title: "Science & Tech",
      link: "",
    },
  ];
  const routePath = useLocation();
  useEffect(()=>{
  window.scrollTo(0,0);
},[routePath.pathname])
  return (
    <div>
      <Nav />
      <Sidebar/>
      <HomeHeader />
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-14 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Ongoing Courses
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist.map((elem, index) => (
            <ProgressCourseCard
              key={index}
              img={elem.image}
              title={elem.title}
              progress={elem.progress}
              percent={elem.percent}
              description={elem.description}
              about={elem.about}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16 xl:mx-32 lg:mx-16 " />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>      
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-12 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Subscribed Courses
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist.map((elem, index) => (
            <ProgressCourseCard
              key={index}
              img={elem.image}
              title={elem.title}
              progress={elem.progress}
              percent={elem.percent}
              description={elem.description}
              about={elem.about}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16  xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-5 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Browse Top Essential Career Courses
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-col justify-start` items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 lg:gap-5 items-center">
            {cardlist3.map((elem, index) => (
              <BrowseCourseCard
                key={index}
                title={elem.title}
                link={elem.link}
              />
            ))}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 lg:gap-5 items-center">
            {cardlist4.map((elem, index) => (
              <BrowseCourseCard
                key={index}
                title={elem.title}
                link={elem.link}
              />
            ))}
          </div>
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16  xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">Free Courses</p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className=" grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist1.map((elem, index) => (
            <RatingCards
              key={index}
              img={elem.image}
              title={elem.title}
              description={elem.description}
              starcount={elem.starcount}
              ratings={elem.ratings}
              review={elem.review}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16  xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-16 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist1.map((elem, index) => (
            <RatingCards
              key={index}
              img={elem.image}
              title={elem.title}
              description={elem.description}
              starcount={elem.starcount}
              ratings={elem.ratings}
              review={elem.review}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16 xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
      <div className="xl:mx-20 lg:mx-5 md:mx-20 mx-16 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist1.map((elem, index) => (
            <RatingCards
              key={index}
              img={elem.image}
              title={elem.title}
              description={elem.description}
              starcount={elem.starcount}
              ratings={elem.ratings}
              review={elem.review}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16 xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
      <div className=" xl:mx-20 lg:mx-5 md:mx-20 mx-16 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-5 xl:gap-16 lg:gap-16 items-center">
          {cardlist1.map((elem, index) => (
            <RatingCards
              key={index}
              img={elem.image}
              title={elem.title}
              description={elem.description}
              starcount={elem.starcount}
              ratings={elem.ratings}
              review={elem.review}
              link={elem.link}
            />
          ))}
        </div>
        <Link>
          <img src={Nextarrow} alt="next" className="hidden md:block xl:w-24 xl:h-24 lg:w-16 lg:h-16 md:w-16 md:h-16 md:mx-16 xl:mx-32 lg:mx-16" />
        </Link>
      </div>
      <Link>
       <p className="md:hidden block text-base pb-6 font-bold justify-center items-center mx-28 underline underline-offset-2">See More</p>
       </Link>
    </div>
  );
};

export default HomePage;
