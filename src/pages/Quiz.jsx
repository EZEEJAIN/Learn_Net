import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Next from "../assests/next.png";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TimerIcon from '@mui/icons-material/Timer';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dropdown from '../components/Dropdown';
import Question from '../components/Question';

const Quiz = () => {
    const [quiz, setQuiz] = React.useState('');

    const handleChange = (event) => {
      setQuiz(event.target.value);
    };
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <div className="mx-20 my-10 flex text-2xl font-semibold text-black  items-center space-x-2">
        <p className="text-[#FE7524]">UI UX Design Course by - Adam Evan </p>
        <img src={Next} alt="back" className=" w-2 h-2" />
        <p className="text-[#FE7524]">Week 2</p>
        <img src={Next} alt="next" className=" w-2 h-2  " />
        <p>Importance of using panels</p>
      </div>

      <div className="mx-20 my-7 space-x-14 flex">
        <div className=" text-4xl font-semibold text-black">
          <p>Quiz: Importance of using panels</p>
        </div>
        </div>

        <div className='mx-20 flex items-center justify-between'>
       
     <Dropdown/>
<div className='mx-20 flex justify-center items-center space-x-10'>
    <div className='flex justify-center space-x-2'>
        <TimerIcon className='text-red-500'/>
<p className='text-red-500'>30 sec</p>
    </div>
   <p className='text-red-500'>0/3 Scores</p>
</div>
        </div>
       <div className='mx-20 my-10'> <Question/>
       </div>    </div>
  )
}

export default Quiz

