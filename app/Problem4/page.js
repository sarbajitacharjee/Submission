// import Link from "next/link";
import React from "react";
import SurveyCard from "../Components/SurveyForm";
import Questionform from '../Components/Questionform'
const page = () => {
  return (
    <>
    
  
      <div className="back2 w-full flex flex-col justify-center items-center ">
      <SurveyCard/>
      <Questionform/>
    
      </div>
      
    </>
  );
};

export default page;
