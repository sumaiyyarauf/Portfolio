import React, { useContext } from "react";
import Image from "../../assets/project1.jpeg";
import ThemeContext from "../../context/themContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-rose-900"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px]`}
    >
        <h1 className="text-[50px]">
            Project1: Knest Aluminium Framwork
        </h1>
        <h1 className="text-[30px] ">
            HTML and CSS:
        </h1>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Description:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            A Knest Aluminium Framwork website showcasing my skills, experience, and projects as a web developer. 
            Built using HTML and CSS.

        </p>
        <img src={Image} className=" border-[1px] mt-[20px] border-[black] rounded-[15px] " alt="project1" />
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            HTML (Hypertext Markup Language):
        </h2>
        <p className="text-[20px] mt-[20px] ">
            HTML is the standard markup language used to create web pages. It provides the structure and content of a website, including:
        <br />
           - Headings, paragraphs, images, links, forms, tables, and more
           - Semantic meaning to web pages, making them readable by search engines and screen readers
           - The foundation for building web pages, allowing developers to add content, images, and functionality
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
            CSS (Cascading Style Sheets):
        </h2>
        <p className="text-[20px] mt-[20px] ">
            CSS is a styling language used to control the layout and visual appearance of web pages. It allows developers to:
            <br />
           <br />- Separate presentation from structure (HTML)
           <br />- Control colors, fonts, spacing, and layout
           <br />- Create responsive designs that adapt to different screen sizes and devices
           <br />- Enhance user experience and accessibility
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Features:
        </h2>
        <p className="text-[20px] mt-[20px] ">
           - Responsive design for optimal viewing on various devices and screen sizes
           <br />- Custom typography and color scheme to reflect my personal brand
           <br />- Interactive elements like hover effects, animations, and scrolling effects
           <br />- Semantic HTML structure for improved accessibility and SEO
           <br />- CSS grid and flexbox layouts for flexible and responsive design
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Challenges:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            - Creating a responsive design that works well on various devices and screen sizes
            <br />- Implementing interactive elements while maintaining accessibility and performance
            <br />- Balancing personal branding with a clean and simple design
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Solutions:    
        </h2> 
        <p className="text-[20px] mt-[20px] ">
           - Used CSS media queries and flexible units for responsive design
           <br />- Implemented accessibility features like alt text, ARIA attributes, and keyboard navigation
           <br />- Utilized CSS animations and transitions for interactive elements

        </p>      
    </main>
    );
}

export default Section;