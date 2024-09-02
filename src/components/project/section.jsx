import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Section() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    return(
        <section className={`px-[40px] overflow-hidden pt-[110px] ${bgColor} ${textColor} relative`}  >
        <h1 className="text-[50px] font-semibold capitalize z-10">
            Experience and skills
        </h1>
        <p className="pt-[20px]">
        I'm inspired by innovative solutions, clean code, and collaborative communities. 
        I learn from online resources like FreeCodeCamp, Udemy, and YouTube tutorials, as well as 
        through contributions to open-source projects on GitHub. I'm currently learning web development 
        through Parallel Education`s online (full stack development) course. My favorite tools include Visual Studio
        Code, Nood.js, and Tailwind CSS. I'm passionate about building scalable, accessible, 
        and user-friendly applications. I believe in continuous learning, experimentation, and 
        knowledge sharing. Let's connect and build something amazing together.
        </p>
        <h1 className="text-[50px] font-semibold capitalize z-10">
            Project 1
        </h1>
        <p className="pt-[20px]">
            After compeleting <strong> HTML & CSS</strong> I did a project using these skills,  A Knest Aluminium Framwork website showcasing my skills, experience, and projects as a web developer. 
            Built using HTML and CSS.<a href="" className="font-semibold">Click here</a>  to vist my project.
        </p>
        <h1 className="text-[50px] font-semibold capitalize z-10">
            Project 2
        </h1>
        <p className="pt-[20px]">
            After compeleting <strong>Tailwind CSS & React.js</strong> I did a project using these skills, A personal portfolio website showcasing my skills, experience, and projects as a web 
            developer.This website is built using React.js and Tailwind CSS, offering a seamless user
            experience with its fast and scalable performance<a href="" className="font-semibold">Click here</a>  to vist my project.
        </p>
       
    </section>
    )
}

export default Section;