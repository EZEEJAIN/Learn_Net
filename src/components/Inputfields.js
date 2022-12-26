import React from 'react'

const Inputfields = ({fieldtitle,inputype,placeholder,inputvalue,onChange,source}) => {
  return (
    <div>
         <div className="flex items-center  justify-start">
            <p className="text-[#000000] text-sm  mb-2">{fieldtitle}</p>
          </div>
          <div className="flex mb-2 ring-[#939393] bg-[#FFFFFF] font-sans rounded-3xl border-[2.06px] py-1  px-9" >
            <input
              type={inputype}
              placeholder={placeholder}
              className="flex-1 outline-none"
              value={inputvalue}
              onChange={onChange}
            />
            <img src={source} alt="" className="w-4 mt-1 h-4" />
          </div>
    </div>
  )
}

export default Inputfields