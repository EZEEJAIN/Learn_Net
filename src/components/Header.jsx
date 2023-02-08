import React from 'react'
import Nav from "./Nav"
import Ellipse from "../../src/assests/Ellipse.png"
import Star from "../../src/assests/Star.png"
import Half from "../../src/assests/Half.png"
import DR from "../../src/assests/DR.png"
import Person from "../../src/assests/Person.png"
import Girl from "../../src/assests/Girl.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate= useNavigate()
  return (
    <>
        <div className="bg-pink-100 default-background w-full lg:h-[600px] h-[650px] whitespace-pre-line">
            <Nav />
            <div className="w-full h-[500px] flex">
                <div className="w-[50%] flex flex-col">
                    <div className="flex gap-4 ml-11 mt-11">
                        <img src={Ellipse} alt="" className="w-[40px] h-[40px]"/>
                        <div className="lg:w-[181px] lg:h-[50px] font-sans not-italic font-semibold text-3xl">Edavan Van</div>
                    </div>
                    <div className="lg:w-[560px] lg:h-[105px] w-[310px] h-[195px] font-sans not-italic font-semibold text-4xl ml-11 mt-5">Project Management Course Professional</div>
                    <div className="lg:w-[535px] lg:h-[46px] w-[282px] h-[75px] font-sans font-medium text-sm ml-11 mt-5 lg:mt-1">Our e-learning program has been developded to be a vehicle of delivering 
                            miltimedia learning solutions for your career.</div>
                    <div className="flex ml-11 mt-2">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Half} alt=""/>
                        <div className="font-sans not-italic font-normal text-base ml-3">4.8<span className="font-bold ml-2">120ratings</span></div>
                    </div>
                    <div className="w-[177px] h-[60px] bg-[#FE7524] ml-11 rounded-full mt-5 shadow-xl">
                        <div className="text-center text-white lg:mt-4 cursor-pointer mt-2">ENROLL NOW</div>
                    </div>
                    <div className="font-bold w-[165px] h-[24px] font-sans not-italic text-base mt-4 ml-11">120 Already Enrolled</div>
                </div>
                <div className="w-[50%] sm:block hidden">
                    <div className="flex">
                        <img src={Girl} alt="" className="xl:ml-11 mt-[6rem] md:ml-0"/>
                        <img src={DR} alt="" className="xl:ml-[10rem] mt-11 md:ml-0 md:w-[200px] md:h-[200px]"/>
                    </div>
                    <img src={Person} alt="" className="xl:ml-[12rem] md:ml-[7rem]"/>
                </div>
            </div>
        </div>
        <div className="flex">
            <div onClick={() => navigate("/about")} className="lg:ml-11 w-[150px] h-[70px] ml-1 hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">About</div>
            </div>
            <div onClick={() => navigate("/instructor")} className="lg:ml-11 ml-2 w-[150px] h-[70px] hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">Instructor</div>
            </div>
            <div onClick={() => navigate("/syllbus")} className="lg:ml-11 ml-2 w-[150px] h-[70px] hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">Syllbus</div>
            </div>
            <div onClick={() => navigate("/reviews")} className="lg:ml-11 ml-2 w-[150px] h-[70px] hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">Reviews</div>
            </div>
            <div onClick={() => navigate("/enrollment")} className="lg:ml-11 ml-2 w-[200px] h-[70px] hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">Enrollment Option</div>
            </div>
            <div onClick={() => navigate("/faq")} className="lg:ml-11 ml-1  w-[150px] h-[70px] hover:bg-[#FE7524] hover:text-white rounded-bl-3xl rounded-br-3xl text-center cursor-pointer">
                <div className="font-sans not-italic font-medium lg:text-xl mt-3">FAQ</div>
            </div>
        </div>
    </>
  )
}

export default Header
