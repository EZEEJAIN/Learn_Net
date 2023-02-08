import React from 'react'
import Header from "../components/Header"
import Boy from "../../src/assests/Boy.png"
import Message from "../../src/assests/Message.png"
import Course from "../../src/assests/Course.png"
import Learner from "../../src/assests/Learner.png"
import Boy1 from "../../src/assests/Boy1.png"
import Boy2 from "../../src/assests/Boy2.png"
import Boy3 from "../../src/assests/Boy3.png"

const Instructor = () => {
  return (
    <div>
        <Header />
        <div className="lg:flex gap-11 lg:h-[500px] h-max">
            <div className="w-[195px] h-[288px] border-2 ml-[9rem] rounded-2xl shadow-2xl mt-5 md:ml-[18rem] lg:ml-11">
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={Boy} alt="" className="m-5"/>
                        <img src={Message} alt="" className="w-[30px] h-[30px] m-4"/>
                    </div>
                    <div className="font-sans not-italic font-semibold text-xl text-center">Toru Wannabe</div>
                    <div className="font-sans not-ialic font-medium text-base text-[#6C6C6C] text-center mt-1">Graphic designer</div>
                    <div className="font-sans not-italic font-medium text-sm text-[#853100] ml-9 mt-1">School of Arts</div>
                    <div className="flex mt-2"><img src={Learner} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">2345</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Learner</span></div>
                    <div className="flex mt-2"><img src={Course} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">5</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Courses</span></div>
                </div>
            </div>
            <div className="w-[195px] h-[288px] border-2 ml-[9rem] rounded-2xl shadow-2xl mt-11 lg:mt-5 md:ml-[18rem] lg:ml-0 xl:ml-11">
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={Boy1} alt="" className="m-5"/>
                        <img src={Message} alt="" className="w-[30px] h-[30px] m-4"/>
                    </div>
                    <div className="font-sans not-italic font-semibold text-xl text-center">Toru Wannabe</div>
                    <div className="font-sans not-ialic font-medium text-base text-[#6C6C6C] text-center mt-1">Graphic designer</div>
                    <div className="font-sans not-italic font-medium text-sm text-[#853100] ml-9 mt-1">School of Arts</div>
                    <div className="flex mt-2"><img src={Learner} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">2345</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Learner</span></div>
                    <div className="flex mt-2"><img src={Course} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">5</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Courses</span></div>
                </div>
            </div>
            <div className="w-[195px] h-[288px] border-2 ml-[9rem] rounded-2xl shadow-2xl mt-11 lg:mt-5 md:ml-[18rem] lg:ml-0 xl:ml-11">
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={Boy2} alt="" className="m-5"/>
                        <img src={Message} alt="" className="w-[30px] h-[30px] m-4"/>
                    </div>
                    <div className="font-sans not-italic font-semibold text-xl text-center">Toru Wannabe</div>
                    <div className="font-sans not-ialic font-medium text-base text-[#6C6C6C] text-center mt-1">Graphic designer</div>
                    <div className="font-sans not-italic font-medium text-sm text-[#853100] ml-9 mt-1">School of Arts</div>
                    <div className="flex mt-2"><img src={Learner} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">2345</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Learner</span></div>
                    <div className="flex mt-2"><img src={Course} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">5</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Courses</span></div>
                </div>
            </div>
            <div className="w-[195px] h-[288px] border-2 ml-[9rem] rounded-2xl shadow-2xl mt-11 lg:mt-5 md:ml-[18rem] lg:ml-0 xl:ml-11">
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={Boy3} alt="" className="m-5"/>
                        <img src={Message} alt="" className="w-[30px] h-[30px] m-4"/>
                    </div>
                    <div className="font-sans not-italic font-semibold text-xl text-center">Toru Wannabe</div>
                    <div className="font-sans not-ialic font-medium text-base text-[#6C6C6C] text-center mt-1">Graphic designer</div>
                    <div className="font-sans not-italic font-medium text-sm text-[#853100] ml-9 mt-1">School of Arts</div>
                    <div className="flex mt-2"><img src={Learner} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">2345</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Learner</span></div>
                    <div className="flex mt-2"><img src={Course} alt="" className="ml-9"/><span className="font-sans not-italic font-medium text-sm ml-1 text-[#151515]">5</span><span className="font-sans not-italic font-medium text-sm ml-1 text-[#6C6C6C]">Courses</span></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Instructor
