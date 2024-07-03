import React from "react";

export default function Home() {
  return (
    <>
      <main className=" relative m-4 flex flex-col h-screen ">
        {/* Welcome Section */}
        <div className="flex-none back h-1/2 w-full mb-3 rounded-lg bg-blue-500 flex items-center justify-center">
          <p className="text-center text-white text-3xl">Welcome to My Website</p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-grow flex-col md:flex-row">
          {/* Navigation Section */}
          <div className="navigation w-full md:w-1/3 bg-yellow-200 rounded-lg mb-4 md:mb-0 md:mr-4 p-4">
            <p className="text-center text-black text-2xl underline">Navigation</p>
            <ul className="mt-4">
              {/* Navigation Links */}
              <li><a href="#" className="text-blue-600 hover:text-blue-800 text-lg hover:text-xl">Instagram</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 text-lg hover:text-xl">Facebook</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 text-lg hover:text-xl">Twitter</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800 text-lg hover:text-xl">LinkedIn</a></li>
            </ul>
          </div>

          {/* Content Area */}
          <div className="content w-full md:w-2/3 bg-green-400 rounded-lg p-4">
            <p className="text-center text-2xl text-black underline">Content Area</p>
            <div className="mt-4">
              {/* Content Text */}
              <p className="text-black">This is some text in the content area.</p>
              <p className="text-black">This is some text in the content area.</p>
              <ul className="mt-4">
                {/* Content Links */}
                <li><a href="#" className="text-blue-800">Content Link 1</a></li>
                <li><a href="#" className="text-blue-800">Content Link 2</a></li>
                <li><a href="#" className="text-blue-800">Content Link 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      <div className="absolute text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] opacity-50 w-[200px] bg-blue-500">
      BOX
      </div>
      </main>
    </>
  );
}
