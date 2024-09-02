import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";

    return (
        <main
            className={`h-screen px-4 md:px-10 text-center relative overflow-hidden pt-20 md:pt-28 ${textColor} ${bgColor} bg-cover`}
        >
            <div className="mx-4 md:mx-20">
                <span className="block text-[30px] md:text-[50px]">
                    About Me:
                </span>
                <p className="mt-[20px] md:mt-[40px] mx-4 md:mx-20 font-semibold px-4 md:px-8 py-2 md:py-4 text-xl md:text-3xl">
                    Hey,<br /> I'm <strong>Sumaiyya Abdul Rauf</strong>,<br /> a passionate full-stack developer eager to launch my career 
                    in building scalable web applications. With a strong foundation in web development, I'm 
                    excited to apply my skills in real-world projects.
                </p>
            </div>
        </main>
    );
}

export default Hero;
