import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themContext";


function Footer() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    return(
        <footer className={`flex justify-between ${bgColor} ${textColor} text-[white] px-[80px] pb-[20px] pt-[50px] `}>
            <ul className="flex gap-[30px]">
                <div>
                <li>
                    Linkedin
                </li>
                <li>
                    Github
                </li>
                <li>
                    Instagram
                </li>
                </div>
                <div>
                   <li>
                      Mail
                    </li>
                    <li>
                       Phone no
                    </li>
                </div>
            </ul>

            <ul>
                <li>
                    About
                </li>
                <li>
                    Projects
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