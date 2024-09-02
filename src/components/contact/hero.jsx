import React, { useContext } from "react";
import Image from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);

    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";
    
    const handleClick = () => {
      window.scrollTo({top: 565, left: 0 });
    };

  return(
    <main className={`relative h-screen px-4 md:px-8 lg:px-16 text-center overflow-hidden pt-24 ${bgColor} ${textColor}`}>
    <h1 className="text-[60px] text-center font-semibold pt-[130px] leading-[120%] ">
        Fillout the form below to get in touch with me
    </h1>

    <div className="flex justify-center items-center mt-[120px]">
     <Link
     onClick={handleClick}
     to="">
      {/* to="/form"> */}
      <img src={Image} alt="logo" className=" rounded-[50%] bg-slate-300 animate-bounce" />
      </Link>
    </div>
    </main>
    
  )
}
 
export default Hero;