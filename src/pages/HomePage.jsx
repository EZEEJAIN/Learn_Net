import React from "react";
import HomeHeader from "../components/HomeHeader";
import Nav from "../components/Nav";
import ProgressCourseCard from "../components/ProgressCourseCard";
import CardImg1 from "../assests/cardImg1.png";
import Nextarrow from "../assests/nextarrow.png";
import CardImg2 from "../assests/cardImg2.png";
import CardImg3 from "../assests/cardImg3.png";
import { Link } from "react-router-dom";
import RatingCards from "../components/RatingCards";
import BrowseCourseCard from "../components/BrowseCourseCard";

const HomePage = () => {
  const cardlist = [
    {
      image: CardImg1,
      title: "UI UX Design Course by-Adam Evan",
      progress: "Overall Progress",
      percent: "40%",
      description: "Next Up- Prototyping ",
      about: "Week 4 | Video | 20min",
      link: "",
    },
    {
      image: CardImg2,
      title: "UI UX Design Course by-Adam Evan",
      progress: "Overall Progress",
      percent: "80%",
      description: "Next Up- Prototyping ",

      about: "Week 4 | Video | 20min",
      link: "",
    },
    {
      image: CardImg3,
      title: "Graphic Design Course by -Adam Evan",
      progress: "Overall Progress",
      percent: "20%",
      description: "Next Up- Prototyping ",
      about: "Week 4 | Video | 20min",
      link: "",
    },
  ];

  const cardlist1 = [
    {
      image: CardImg1,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor  ",
      ratings: "120",
      review: "80",
      link: "",
    },
    {
      image: CardImg2,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor ",
      ratings: "120",
      review: "80",
      link: "",
    },
    {
      image: CardImg3,
      title: "UI UX Design Course by-Google",
      description: "Daniel Walter Scott, Instructor ",
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
  return (
    <div>
      <Nav />
      <HomeHeader />
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Ongoing Courses
        </p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
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
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Subscribed Courses
        </p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
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
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Browse Top Essential Career Courses
        </p>
      </div>
      <div className="flex justify-center items-center">
      <div className="flex-col justify-start` items-center">
        <div className="grid grid-cols-4 gap-5 items-center">
          {cardlist3.map((elem, index) => (
            <BrowseCourseCard key={index} title={elem.title} link={elem.link} />
          ))}
         
        </div>
        <div className="grid grid-cols-4 gap-5 items-center">
          {cardlist4.map((elem, index) => (
            <BrowseCourseCard key={index} title={elem.title} link={elem.link} />
          ))}
       
        </div>
      </div>
      <Link>
            <img src={Nextarrow} alt="next" className="w-24 h-24 mx-20" />
          </Link>
          </div>

      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">Free Courses</p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
        {cardlist1.map((elem, index) => (
          <RatingCards
            key={index}
            img={elem.image}
            title={elem.title}
            description={elem.description}
            ratings={elem.ratings}
            review={elem.review}
            link={elem.link}
          />
        ))}
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
        {cardlist1.map((elem, index) => (
          <RatingCards
            key={index}
            img={elem.image}
            title={elem.title}
            description={elem.description}
            ratings={elem.ratings}
            review={elem.review}
            link={elem.link}
          />
        ))}
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
        {cardlist1.map((elem, index) => (
          <RatingCards
            key={index}
            img={elem.image}
            title={elem.title}
            ratings={elem.ratings}
            review={elem.review}
            link={elem.link}
          />
        ))}
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
      <div className="mx-20 flex-col my-5">
        <p className="font-bold my-5 text-[#2F2F2F] text-2xl">
          Popular Courses
        </p>
      </div>
      <div className="grid grid-cols-4 gap-32 items-center">
        {cardlist1.map((elem, index) => (
          <RatingCards
            key={index}
            img={elem.image}
            title={elem.title}
            description={elem.description}
            ratings={elem.ratings}
            review={elem.review}
            link={elem.link}
          />
        ))}
        <Link>
          <img src={Nextarrow} alt="next" className="w-24 h-24 mx-32" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
