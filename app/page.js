import Link from "next/link";
import React from "react";
import SurveyForm from "./Components/SurveyForm";
import Questionform from './Components/Questionform'
const page = () => {
  return (
    <>
    
  
      <div className="back w-full h-screen flex justify-center items-center ">
      <SurveyForm/>

      </div>
      <div className="back2 w-full h-screen flex justify-center items-center ">
      <Questionform/>

      </div>
    </>
  );
};

export default page;
