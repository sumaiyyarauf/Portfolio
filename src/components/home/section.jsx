import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/themContext";

function Section() {
    
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    const border = theme === "light" ? "border-pink-900" : "border-white";

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0 });
      };
    return(

        <section className={`flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-16 border-y-[20px] border-white py-12 sm:py-16 lg:py-24 ${textColor} ${bgColor}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center w-full sm:w-3/4 lg:w-1/2 leading-tight font-semibold">
                Want To Know More About Me.
            </h1>
            <button className={`border ${border} px-6 py-2 rounded-full hover:bg-rose-200 hover:text-black transition-colors duration-300`}>
                <Link
                onClick={handleClick}
                to={"/about"}>About</Link>
            </button>
        </section>
    );
}

export default Section;