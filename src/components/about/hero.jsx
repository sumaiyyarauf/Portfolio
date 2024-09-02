import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Hero() {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === "light" ? "text-black" : "text-white";
    const bgColor = theme === "light" ? "bg-white" : "bg-pink-900";

    return (
        <main
            className={`h-screen px-10 text-center relative overflow-hidden pt-28 ${textColor} ${bgColor} bg-cover `}
        >
            <div className="mx-20">
                <span className="block text-[50px]  md:text-center">
                    About Me:
                </span>
                <p className="mt-[40px] mx-20 font-semibold px-8 py-4 text-3xl md:text-center">
                    Hey,<br /> I'm <strong >Sumaiyya Abdul Rauf</strong>,<br /> a passionate full-stack developer eager to launch my career 
                    in building scalable web applications. With a strong foundation in web development, I'm 
                    excited to apply my skills in real-world projects.
                </p>
            </div>
        </main>
    );
}

export default Hero;
