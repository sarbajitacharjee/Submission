import React from 'react';

const SurveyCard = () => {
  return (
    <>

<div className="w-full max-w-lg mt-96  md:mt-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto flex  mx-auto bg-white shadow-md rounded-lg overflow-hidden border-8 border-black border-opacity-10 p-4 sm:p-6">
      <div className="flex flex-col ">
        <h1 className="text-xl sm:text-2xl text-center font-bold mb-2 sm:mb-4">Welcome to the Survey!</h1>
        <p className="mb-2 sm:mb-4 text-center text-orange-600">Hello, Human</p>
        <p className="mb-4 text-start text-sm sm:text-base">
          We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. Hello new data enrolled data.
        </p>
        <p className="mb-4 text-start text-sm sm:text-base">
          We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort  services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping.
        </p>
      
        <p className="mb-4 text-start text-sm sm:text-base text-red-600">
        You must fill all columns to Continue.
        </p>
        <div className="flex justify-end w-full">
          <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default SurveyCard;
