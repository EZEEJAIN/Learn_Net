import React from 'react'
import Header from "../components/Header"
import Image from "../../src/assests/Image.png"

const Enrollment = () => {
  return (
    <div>
        <Header/>
        <div className="flex">
            <img src={Image} alt="" className="sm:block hidden w-[445px] h-[453px] md:w-[356px] md:h-[450px] md:ml-0 md:mt-3 xl:ml-11"/>
            <div className="lg:w-[561px] lg:h-[461px] xl:w-[619px] xl:h-[480px] border-2 rounded-3xl lg:shadow-2xl shadow-lg lg:ml-[3rem] xl:ml-[11rem] mt-7 w-[619px] h-[480px] md:w-[361px] md:h-[516px] ml-7 md:ml-[-12px] md:mt-3">
                <div className="font-sans not-italic font-semibold text-3xl text-[#FE7524] m-9 lg:w-[557px] md:ml-1 md:w-[419px] w-[324px]">Get Premium Access for ₹1,069</div>
                <ul className="list-disc list-inside text-[#6C6C6C] font-sans not-italic font-medium text-xl m-4">
                    <li>Taught by top companies and universities</li>
                    <li>Affordable programs</li>
                    <li>Apply your skills with hands-on projects</li>
                    <li>Learn on your own schedule</li>
                    <li>Course videos and readings</li>
                    <li>Graded quizzers and assignments</li>
                    <li>No degree or experience required for many programs</li>
                    <li>Shareable Certificate upon completion</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Enrollment
