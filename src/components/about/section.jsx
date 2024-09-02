import React, { useContext } from "react";
import Image from '../../assets/image2.jpg';
import Projects from "../home/projects";
import ThemeContext from "../../context/themContext";

function Section() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-black";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    return(

        <main
        className={` px-10 text-center relative overflow-hidden pt-28 ${textColor} ${bgColor} bg-cover `}
    >
              <div className="bg-pink-200 border-[1px] border-[white] ">
            <div className="flex">
                    <h1 className=" p-[10px] pl-[95px] w-[40%] text-[40px] text-center bg-pink-900 text-[white] ">DOB:</h1>
                    <p className="w-[60%] text-[30px] p-[20px] ">- 16 MAY 2000</p>
                </div>
                <div className="flex">
                    <h1 className=" p-[10px] w-[40%] text-[40px] text-center bg-pink-900 text-[white] ">Education: </h1>
                    <p className="w-[60%] text-[25px] p-[20px] ">- Bachelor of Science in CBZ,<br /> SGBA Univercity,<br />2022 [Passed out year]</p>
                </div>
                <div className="flex">
                    <h1 className=" p-[10px] pl-[95px] w-[40%] text-[40px] text-center bg-pink-900 text-[white] ">Skills:</h1>
                    <p className="w-[60%] text-[25px] p-[20px] ">- Proficient in HTML, CSS, JavaScript, React, and Node.js
                        <br />Familiarity with MongoDB and Git</p>
                </div>
            </div>
           
            <div className="flex my-[40px] bg-pink-200  border-[1px] border-[white] ">
                 <img src={Image} className="w-[50%] h-[350px] m-[24px] rounded-[10px] " alt="" />
                 <p className=" w-[50%] p-[20px] text-center pt-[90px] bg-pink-900 text-[white] ">
                 <h1 className="text-[40px]">My Journey:</h1>
                    I've always been fascinated by technology and problem-solving. As a self-taught developer,
                     I've worked hard to hone my skills in full-stack development. I'm excited to bring my 
                     expertise to innovative projects and collaborations."</p>
            </div>
            <div className="flex mt-[40px] mb-[40px] border-[1px] border-[white] ">
               <h1 className=" pl-[95px] w-[50%] text-[40px] text-[white] content-center text-center bg-pink-900 ">Present:</h1>
               <p className="w-[60%] text-[20px] p-[30px] bg-pink-200 ">
                      I'm currently a graduate in CBZ, recent complete my <strong>Full-Stack Development</strong> course looking to
                       apply my skills and knowledge in a real-world setting. I'm excited to explore opportunities in
                        research, conservation, and sustainability. My current goals include:
                       <br />- Developing my skills in web development and scientific writing
                       <br />- Contributing to projects that align with my values and passions
                       <br />- Networking with like-minded professionals in my field

                       <br /><strong>I'm looking forward to collaborating with others and learning from their experiences.</strong>
               </p>
            </div>
            <div className="flex mt-[40px] mb-[40px]  border-[1px] border-[white] ">
               <h1 className=" pt-[40px] pl-[95px] w-[40%] text-[40px] text-center bg-pink-200 ">Goals:</h1>
               <p className="w-[60%] text-[20px] p-[30px] bg-pink-900 text-[white] ">- To collaborate on innovative projects and continuously improve my skills
                  <br />- To become a proficient full-stack developer and contribute to the tech community</p>
            </div>

            <Projects />
               
        </main>
    )
}

export default Section;