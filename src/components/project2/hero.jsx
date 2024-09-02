import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Project2() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-rose-900"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:h-[500px] max-sm:pt-[120px] h-[100vh] relative pt-[300px]`}
    >
        <h1 className="text-[50px]">
            Personal Portfolio Website 
        </h1>
        <h1 className="text-[30px] ">
            Tailwind CSS And React.js:
        </h1>
       
        </main>
    );
}

export default Project2;