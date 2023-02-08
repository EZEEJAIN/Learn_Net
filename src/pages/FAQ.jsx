import React from 'react'
import Header from "../components/Header"
import Divider from "../../src/assests/Divider.png"
import xmark from "../../src/assests/xmark.png"
import Plus from "../../src/assests/Plus.png"

const FAQ = () => {
  return (
    <div>
        <Header/>
        <img src={Divider} alt="" className="ml-11 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Where can I watch?</div>
            <img src={xmark} alt="" className="w-[13px] h-[13px] xl:ml-[1000px] mt-3 md:ml-[504px]"/>
        </div>
        <div className="font-sans not-italic font-normal text-base text-[#6C6C6C] ml-11 mt-2 xl:w-[884px] xl:h-[24px] md:w-[480px] md:h-[45px]">Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.</div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Mauris id nibh eu fermentum mattis purus?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[800px] mt-3 md:ml-[304px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Eros imperdiet rhoncus?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[965px] mt-3 md:ml-[467px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Fames imperdiet quam fermentum?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[866px] mt-3 md:ml-[369px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Varius vitae, convallis amet lacus sit aliquet nibh?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[753px] mt-3 md:ml-[256px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex w-[1233px] h-[23px] ml-11 mt-3">
            <div className="font-sans not-italic font-bold text-lg">Tortor nisl pellentesque sit quis orci dolor?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[807px] mt-3 md:ml-[314px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 mt-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
        <div className="flex xl:w-[1583px] xl:h-[23px] md:w-[687px] md:h-[50px] ml-11 mt-3 ">
            <div className="font-sans not-italic font-bold text-lg">Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?</div>
            <img src={Plus} alt="" className="w-[13px] h-[13px] xl:ml-[484px] mt-3 md:ml-[-7px]"/>
        </div>
        <img src={Divider} alt="" className="ml-11 m-5 xl:w-[1200px] xl:h-[3px] md:w-[698px] md:h-[3px]"/>
    </div>
  )
}

export default FAQ
