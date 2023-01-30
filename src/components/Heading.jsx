import React from 'react'

const Heading = ({subheading}) => {
  return (
    <>
    <div className="flex items-center mb-5 justify-center ">
    <p className="text-[#FE7524] text-4xl  font-bold">Learn</p>
    <p className=" font-semibold text-4xl text-[#151515]"> Net</p>
  </div>
  <div className="flex items-center justify-center">
    <p className="font-bold text-[#151515] mb-6">{subheading}</p>
  </div>
  </>
  )
}

export default Heading