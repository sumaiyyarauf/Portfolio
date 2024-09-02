import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-black";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    return(
        <>
          <main className= {`h-[100vh] px-[40px] overflow-hidden pt-[110px] ${bgColor} ${textColor}  relative`}  >
            <h1 className="text-[60px] font-semibold bg-pink-900 text-[white] mt-[40px] rounded-[20px] text-center p-[80px] border-[1px] capitalize z-10">
                Learn more about my skills and experience through my project 
            </h1>
           
        </main>

        </>
    )
}

export default Hero;