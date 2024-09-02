import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-black";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";

    return (
        <main className={`h-screen px-4 sm:px-8 lg:px-10 overflow-hidden pt-20 lg:pt-28 ${bgColor} ${textColor} relative`}>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold bg-pink-900 text-white mt-8 sm:mt-12 lg:mt-16 rounded-lg text-center p-6 sm:p-8 lg:p-10 border border-transparent sm:border-white capitalize z-10">
                Learn more about my skills and experience through my projects
            </h1>
        </main>
    );
}

export default Hero;
