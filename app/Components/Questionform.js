import React from 'react';

const SurveyCard = () => {
  return (
    <>
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl h-auto mt-[1000px] sm:mt-0 flex justify-center items-center text-center mx-auto bg-white shadow-md rounded-lg overflow-hidden border-8 border-black border-opacity-10 p-4 sm:p-6">
        <div className="flex flex-col items-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-blue-800">QUESTION ONE</h1>
          <p className="mb-5 sm:mb-4 text-orange-600">We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. </p>

          <div className="flex flex-col justify-center items-center text-gray-600">
            <div className="flex space-x-32 mb-10">
              a<div>
                <label  className="block mr-40 mb-2">Choose An Activity:</label>
                <select id="activity" className="border w-80 rounded px-4 py-2">
                  <option value="">Select an Activity</option>
                  <option value="2">Option 1</option>
                  <option value="3">Option 2</option>
                  <option value="4">Option 3</option>
                </select>
              </div>
              <div>
                <label className=" mr-40 block mb-2">Choose Frequency:</label>
                <select id="frequency" className="border w-80 rounded px-4 py-2">
                  <option value="">Select frequency</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
            <div className='flex space-x-32'>
              <div>
                <select id="name" className="border w-80 rounded px-4 py-2">
                  <option value="">Select a Name</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
              <div>
                <select id="frequency2" className="border w-80 rounded px-4 py-2">
                  <option value="">Select Frequency</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
            <button className="bg-blue-500 mt-6 text-white rounded px-4 py-2">ADD A NEW ACTIVITY</button>
          </div>

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
