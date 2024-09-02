import React from "react"; 
import Image2 from "../../assets/project2.jpeg";




function Project(){
    return( 
        <>
         <section className="bg-pink-900 text-white px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 ">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                    <img src={Image2} alt="Project 2" className=" rounded-md" />
                    <h2 className="text-xl font-semibold mt-4">Project 2</h2>
                    <h3 className="text-lg font-semibold mt-2">Basic Tailwind Website</h3>
                    <p className="text-base mt-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">HTML</p>
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">Tailwind</p>
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">React.js</p>
                    </div>
                    <button className="mt-4 px-4 py-2 text-sm border-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                        Learn More
                    </button>
                </div>
                <div className="bg-white text-black rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                    <img src={Image2} alt="Project 3" className=" rounded-md" />
                    <h2 className="text-xl font-semibold mt-4">Project 3</h2>
                    <h3 className="text-lg font-semibold mt-2">Basic Tailwind Website</h3>
                    <p className="text-base mt-2">Skills Used:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">HTML</p>
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">Tailwind</p>
                        <p className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full">JavaScript</p>
                    </div>
                    <button className="mt-4 px-4 py-2 text-sm border-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                        Learn More
                    </button>
                </div>
           </div>
         </section>
        </>     

    )
}

export default Project;