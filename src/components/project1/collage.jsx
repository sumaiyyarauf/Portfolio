import React, { useContext } from "react";
import image1 from "../../assets/p1-a.jpeg";
import image2 from "../../assets/p1-b.jpeg";
import image3 from "../../assets/project1.jpeg";
import ThemeContext from "../../context/themContext";

function Collage() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? " bg-white" : " bg-pink-800"
      } px-[80px] max-sm:px-[20px] max-md:px-[40px] max-sm:py-[30px] py-[81px]`}
    >
      <div className="flex max-sm:flex-col gap-[20px]">
        <img src={image1} className="w-[49%] max-sm:w-full" alt="" />
        <img src={image2} className="w-[49%] max-sm:w-full" alt="" />
      </div>
      <img src={image3} className="mt-[20px]" alt="" />
    </section>
  );
}

export default Collage;