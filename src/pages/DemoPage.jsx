import React, { useState } from "react";

const DemoPage = () => {
    const[page,setPage]=useState(1);
  return (
    <div className="flex space-x-9">
      <p onClick={()=>{setPage(1)}}>About</p>
      <p onClick={()=>{setPage(2)}}>Instructor</p>
      <p onClick={()=>{setPage(3)}}>Syllabus</p>
      <p onClick={()=>{setPage(4)}}>Reviews</p>
      <p onClick={()=>{setPage(5)}}>FAQs</p>
      {page===1?(<About/>):page===2?(<Instructor/>):page===3?(<Syllabus/>):page===4?(<Reviews/>):page===5&&(<Faqs/>)}
    </div>
  );
};

export default DemoPage;

const About = () => {
  return (
    <div>
      <p>about</p>
    </div>
  );
};

const Instructor = () => {
  return (
    <div>
      <p>Instructor</p>
    </div>
  );
};

const Syllabus = () => {
  return (
    <div>
      <p>syllabus</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <p>reviews</p>
    </div>
  );
};

const Faqs = () => {
  return (
    <div>
      <p>faqs</p>
    </div>
  );
};
