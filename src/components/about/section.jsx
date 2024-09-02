import React, { useContext } from "react";
import Image from '../../assets/image2.jpg';
import ThemeContext from "../../context/themContext";

function Section() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-black";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";

    return (
        <main
            className={`px-4 md:px-10 text-center relative overflow-hidden pt-20 md:pt-28 ${textColor} ${bgColor} bg-cover`}
        >
            <div className="bg-pink-200 border border-white p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <h1 className="text-[30px] md:text-[40px] text-center bg-pink-900 text-white w-full md:w-[40%] p-4">
                        DOB:
                    </h1>
                    <p className="text-[20px] md:text-[30px] w-full md:w-[60%] p-4">
                        - 16 MAY 2000
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <h1 className="text-[30px] md:text-[40px] text-center bg-pink-900 text-white w-full md:w-[40%] p-4">
                        Education:
                    </h1>
                    <p className="text-[20px] md:text-[25px] w-full md:w-[60%] p-4">
                        - Bachelor of Science in CBZ,<br /> SGBA University,<br />2022 [Passed out year]
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                    <h1 className="text-[30px] md:text-[40px] text-center bg-pink-900 text-white w-full md:w-[40%] p-4">
                        Skills:
                    </h1>
                    <p className="text-[20px] md:text-[25px] w-full md:w-[60%] p-4">
                        - Proficient in HTML, CSS, JavaScript, React, and Node.js<br />
                        - Familiarity with MongoDB and Git
                    </p>
                </div>
            </div>
           
            <div className="flex flex-col md:flex-row my-10 bg-pink-200 border border-white p-4 md:p-6">
                <img src={Image} className="w-full md:w-[50%] h-auto md:h-[350px] m-4 md:m-6 rounded-lg" alt="My Journey" />
                <p className="w-full md:w-[50%] p-4 md:p-6 text-center bg-pink-900 text-white">
                    <h1 className="text-[30px] md:text-[40px]">My Journey:</h1>
                    I've always been fascinated by technology and problem-solving. As a self-taught developer,
                    I've worked hard to hone my skills in full-stack development. I'm excited to bring my
                    expertise to innovative projects and collaborations.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row my-10 border border-white bg-pink-200 p-4 md:p-6">
                <h1 className="text-[30px] pt-[10%] sm:text-[40px] text-center bg-pink-900 text-white w-full sm:w-[50%] p-4">
                    Present:
                </h1>
                <p className="w-full md:w-[50%] text-[16px] md:text-[20px] p-4 md:p-6 bg-pink-200">
                    I'm currently a graduate in CBZ, recently completed my <strong>Full-Stack Development</strong> course, looking to
                    apply my skills and knowledge in a real-world setting. I'm excited to explore opportunities in
                    research, conservation, and sustainability. My current goals include:
                    <ul>
                    <li>- Developing my skills in web development and scientific writing.</li>
                    <li>- Contributing to projects that align with my values and passions.</li>
                    <li>- Networking with like-minded professionals in my field.</li>
                    <li><strong>I'm looking forward to collaborating with others and learning from their experiences.</strong></li>
                    </ul>
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row my-10 border border-white p-4 md:p-6">
                <h1 className="text-[30px] md:text-[40px] text-center bg-pink-200 w-full md:w-[40%] p-4">
                    Goals:
                </h1>
                <p className="w-full md:w-[60%] text-[16px] md:text-[20px] p-4 md:p-6 bg-pink-900 text-white">
                    - To collaborate on innovative projects and continuously improve my skills.
                    <br />- To become a proficient full-stack developer and contribute to the tech community.
                </p>
            </div>
        </main>
    );
}

export default Section;
