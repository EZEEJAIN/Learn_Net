import React from 'react'


const ClassTestcard2 = ({img,text}) => {
  return (
    <div className='flex  '>
        <div className='flex justify-center bg-[#DBDBDB] rounded-l-3xl xl:w-[80px] lg:w-[52px] md:w-[60px] w-[40px] h-[50px] items-center'><img src={img} alt="tick" className='w-5 h-5' /></div>
        <div className='flex justify-center shadow-xl px-2 border-2 border-slate-200 rounded-r-3xl lg:w-[320px] md:w-[280px]  h-[50px] items-center text-xs font-medium text-black '><p className='w-[250px]'>{text}<span className='text-[#6C6C6C]'> Understand the Importance of 
Research in design </span></p></div>
    </div>
  )
}

export default ClassTestcard2