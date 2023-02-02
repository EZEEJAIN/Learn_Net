import React from 'react'
// import Tick from "../assests/tickk.png";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Link } from 'react-router-dom';
const DownloadCard = () => {
  return (
    <div className='flex-col '>
        <div className='box-content border-2 w-[120px] px-3 h-[120px] bg-red-600 rounded-t-3xl'>
    <div className='flex justify-center items-center my-12'>
<p className='text-white text-2xl font-extrabold'>PDF</p>
    </div>
<Link><DownloadForOfflineIcon className='-mt-20 mx-24 text-green-100'/></Link>
</div>
    <div className='box-content border-2 w-[120px] px-3 h-[40px] bg-white rounded-b-3xl'>
<p className='text-black text-xs font-normal'>The Principal of Major Graphic Designs</p>
    </div>
    </div>
  )
}

export default DownloadCard