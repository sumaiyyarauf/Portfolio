import React, { useContext } from "react";
import BackgroundImage from '../../assets/image3.jpg';
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);

    const textColor = theme === "light" ? "text-white" : "text-rose-300";
    const bgColor = theme === "light" ? "bg-white" : "bg-black";

    return (
        <main className={`relative h-screen px-4 md:px-8 z-[-10] lg:px-16 text-center overflow-hidden pt-24 ${bgColor} ${textColor}`}>
            <div className="absolute inset-0">
                <div   
                    className={`absolute inset-0 bg-cover bg-center w-full top-0 left-0 ${bgColor} opacity-90`}
                    // style={{ backgroundImage: `url(${BackgroundImage})` }}
                >
                    <img
                    className="w-full max-md:h-[100vh] fixed z-[-5]"
                    src={BackgroundImage} alt="" />
                </div>
                <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
            </div>
            <div className=" fixed pr-[30px]">
                
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-sans leading-tight md:leading-snug lg:leading-relaxed pt-8 md:pt-12 lg:pt-20 font-bold animate-bounce ${textColor}`}>
                    Welcome To My Portfolio Website
                </h1>
                <h2 className={`text-lg md:text-xl lg:text-2xl backdrop-blur-sm font-serif mt-8 md:mt-12 lg:mt-20 ${textColor}`}>
                    Expertise: TailwindCSS, JavaScript, React.js
                </h2>
                <p className={`text-sm md:text-base lg:text-lg pt-4 md:pt-6 lg:pt-8 text-zinc-300 ${textColor}`}>
                    A full-stack developer with a passion for building scalable web applications. Explore my portfolio to see my latest projects and learn more about my expertise.
                </p>
            </div>
        </main>
    );
}

export default Hero;
