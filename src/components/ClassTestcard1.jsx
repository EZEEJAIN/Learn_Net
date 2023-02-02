import React from 'react'


const ClassTestcard = ({img,text}) => {
  return (
    <div className='flex  '>
        <div className='flex justify-center bg-[#21B573] rounded-l-3xl w-[80px]  h-[50px] items-center'><img src={img} alt="tick" className='w-5 h-5' /></div>
        <div className='flex justify-center shadow-xl border-2 border-slate-200 rounded-r-3xl w-[320px]  h-[50px] items-center text-xs font-medium text-black '><p className='w-[250px]'>{text}<span className='text-[#6C6C6C]'> Understand the Importance of 
Research in design </span></p></div>
    </div>
  )
}

export default ClassTestcard