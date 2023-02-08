import React from 'react'
import Header from "../components/Header"
import Star from "../../src/assests/Star.png"
import Half from "../../src/assests/Half.png"
import Bar from "../../src/assests/Bar.png"
import Bar1 from "../../src/assests/Bar1.png"
import Blank from "../../src/assests/Blank.png"

const Reviews = () => {
  return (
    <div>
        <Header/>
        <div className="lg:flex">
            <div className="flex flex-col">
                <div className="font-sans not-italic font-normal text-3xl ml-11">Reviews</div>
                <div className="flex">
                    <div className="font-sans not-italic font-medium text-5xl ml-11 mt-5">4.8</div>
                    <div className="flex flex-col">
                        <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] mt-6 ml-5">1234 Ratings 123 Reviews</div>
                        <div className="flex ml-5 mt-1"> 
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Half} alt=""/>
                            <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">4.8</div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8">
                    <img src={Bar} alt="" className="w-[196.76px] h-[18px] ml-11"/>
                    <img src={Bar1} alt="" className="w-[170.05px] h-[18px]"/>
                    <img src={Star} alt="" className='ml-5 w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">55%</div>
                </div>
                <div className="flex mt-2">
                    <img src={Bar} alt="" className="w-[120.86px] h-[18px] ml-11"/>
                    <img src={Bar1} alt="" className="w-[245.95px] h-[18px]"/>
                    <img src={Star} alt="" className='ml-5 w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">32%</div>
                </div>
                <div className="flex mt-2">
                    <img src={Bar} alt="" className="w-[37.95px] h-[18px] ml-11"/>
                    <img src={Bar1} alt="" className="w-[328.86px] h-[18px]"/>
                    <img src={Star} alt="" className='ml-5 w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">10%</div>
                </div>
                <div className="flex mt-2">
                    <img src={Bar1} alt="" className="w-[366.81px] h-[18px] ml-11"/>
                    <img src={Star} alt="" className='ml-5 w-[15px] h-[15px]'/>
                    <img src={Star} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">2%</div>
                </div>
                <div className="flex mt-2">
                    <img src={Bar1} alt="" className="w-[366.81px] h-[18px] ml-11"/>
                    <img src={Blank} alt="" className='ml-5 w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <img src={Blank} alt="" className='w-[15px] h-[15px]'/>
                    <div className="font-sans not-italic font-medium text-sm text-[#7C7C7C] ml-2">1%</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-sans not-italic font-semibold text-base lg:ml-[11rem] lg:w-[572px] lg:h-[24px] w-[572px] h-[24px] mt-5 ml-11">TOP REVIEWS FROM CONDUCT UX RESEARCH AND TEST EARLY CONCEPTS</div>
                <div className="flex lg:ml-[11rem] mt-5 ml-11">
                    <img src={Star} alt="" className="w-[20px] h-[17px]"/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                </div>
                <div className="font-sans not-italic font-semibold text-base tracking-tighter lg:ml-[11rem] mt-2 ml-11">By Nazneen Husain <span className="text-[#6C6C6C]">on feb 22, 2022</span></div>
                <div className="font-sans not-italic font-normal text-sm lg:ml-[11rem] tracking-tighter text-[#757095] mt-1 ml-11">UI UX Designer</div>
                <div className="font-sans not-italic font-semibold text-xl tracking-tighter lg:ml-[11rem] mt-2 ml-11 w-[503px] h-[30px]">Save Time Managing Social Media For Your Business</div>
                <div className="font-sans not-italic font-normal text-base tracking-tighter text-[#6C6C6C] lg:ml-[11rem] ml-11 lg:w-[680px] lg:h-[120px] w-[626px] h-[118px]">Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                      Believing neglected so so allowance existence departure in. In design active temper be uneasy.</div>
                      <div className="flex lg:ml-[11rem] mt-5 ml-11">
                    <img src={Star} alt="" className="w-[20px] h-[17px]"/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                </div>
                <div className="font-sans not-italic font-semibold text-base tracking-tighter lg:ml-[11rem] mt-2 ml-11">By Nazneen Husain <span className="text-[#6C6C6C]">on feb 22, 2022</span></div>
                <div className="font-sans not-italic font-normal text-sm lg:ml-[11rem] tracking-tighter text-[#757095] mt-1 ml-11">UI UX Designer</div>
                <div className="font-sans not-italic font-semibold text-xl tracking-tighter lg:ml-[11rem] mt-2 ml-11 w-[503px] h-[30px]">Save Time Managing Social Media For Your Business</div>
                <div className="font-sans not-italic font-normal text-base tracking-tighter text-[#6C6C6C] lg:ml-[11rem] ml-11 lg:w-[680px] lg:h-[120px] w-[626px] h-[118px]">Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                      Believing neglected so so allowance existence departure in. In design active temper be uneasy.</div>
                      <div className="flex lg:ml-[11rem] mt-5 ml-11">
                    <img src={Star} alt="" className="w-[20px] h-[17px]"/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                </div>
                <div className="font-sans not-italic font-semibold text-base tracking-tighter lg:ml-[11rem] mt-2 ml-11">By Nazneen Husain <span className="text-[#6C6C6C]">on feb 22, 2022</span></div>
                <div className="font-sans not-italic font-normal text-sm lg:ml-[11rem] tracking-tighter text-[#757095] mt-1 ml-11">UI UX Designer</div>
                <div className="font-sans not-italic font-semibold text-xl tracking-tighter lg:ml-[11rem] mt-2 ml-11 w-[503px] h-[30px]">Save Time Managing Social Media For Your Business</div>
                <div className="font-sans not-italic font-normal text-base tracking-tighter text-[#6C6C6C] lg:ml-[11rem] ml-11 lg:w-[680px] lg:h-[120px] w-[626px] h-[118px]">Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                      Believing neglected so so allowance existence departure in. In design active temper be uneasy.</div>
                      <div className="flex lg:ml-[11rem] mt-5 ml-11">
                    <img src={Star} alt="" className="w-[20px] h-[17px]"/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                </div>
                <div className="font-sans not-italic font-semibold text-base tracking-tighter lg:ml-[11rem] mt-2 ml-11">By Nazneen Husain <span className="text-[#6C6C6C]">on feb 22, 2022</span></div>
                <div className="font-sans not-italic font-normal text-sm lg:ml-[11rem] tracking-tighter text-[#757095] mt-1 ml-11">UI UX Designer</div>
                <div className="font-sans not-italic font-semibold text-xl tracking-tighter lg:ml-[11rem] mt-2 ml-11 w-[503px] h-[30px]">Save Time Managing Social Media For Your Business</div>
                <div className="font-sans not-italic font-normal text-base tracking-tighter text-[#6C6C6C] lg:ml-[11rem] ml-11 lg:w-[680px] lg:h-[120px] w-[626px] h-[118px]">Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.
                      Believing neglected so so allowance existence departure in. In design active temper be uneasy.</div>
                <div className="w-[177px] h-[60px] border-[#FE7524] border-2 ml-[11rem] rounded-full m-5">
                    <div className="text-center text-[#FE7524] mt-4 cursor-pointer">View All Reviews</div>
                </div>
                        
                      
            </div>
            
        </div>
    </div>
  )
}

export default Reviews
