import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themContext";


function Footer() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0 });
      };
    return(
        <footer className={`flex justify-between ${bgColor} ${textColor} text-[white] border-t-[20px] border-white px-[80px] pb-[20px] pt-[50px] `}>
            <ul className="flex gap-[30px]">
                <div>
                <li>
                   <a href="https://github.com/sumaiyyarauf">
                     Github
                   </a>
                </li>
                <li>
                   <a href="https://linkedin.com/in/sumaiyya-abdul-rauf">
                   linkedin
                   </a>
                </li>
                </div>
                <div>
                   <a href="mailto:sumaiyasheikh088gmail.com">
                     Email
                   </a>
                <li>
                    <a href="">
                     Phone no
                   </a>
                </li>
                </div>
            </ul>

            <ul>
                <li>
                    <Link
                      onClick={handleClick}
                      to={"/projects/tailwind-project"}>
                        Tailwind Project
                    </Link>
                </li>
                <li>
                    <Link
                      onClick={handleClick}
                      to={"/projects/portfolio-project"}>
                        Portfolio Project 
                    </Link>
                </li>
                <li>
                    <Link
                      onClick={handleClick}
                      to={"/projects/knst-project"}>
                        Knest Project 
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                   <Link to="/about">
                    About
                   </Link>
                </li>
                <li>
                   <Link to="/projects">
                    Projects
                   </Link>
                </li>
                <li>
                    <Link to='/contact'>
                     Contact
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;