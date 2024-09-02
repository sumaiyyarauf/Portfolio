import React, { useContext } from "react";
import Image from "../../assets/project1.jpeg";
import ThemeContext from "../../context/themContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-pink-900"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px]`}
    >
        <h1 className="text-[50px]">
            Project1: Knest Aluminium Framwork
        </h1>
        <h1 className="text-[30px] ">
            HTML and TailwindCSS:
        </h1>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Description:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            A Knest Aluminium Framwork website showcasing my skills, experience, and projects as a web developer. 
            Built using HTML and CSS.

        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            HTML (Hypertext Markup Language):
        </h2>
        <p className="text-[20px] mt-[20px] ">
            - HTML is the standard markup language used to create web pages. It provides the structure and content of a website, including:
           <ul>
             <li> Headings, paragraphs, images, links, forms, tables, and more</li>
             <li>Semantic meaning to web pages, making them readable by search engines and screen readers</li>
             <li>The foundation for building web pages, allowing developers to add content, images, and functionality</li>
           </ul>
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
           TailwindCSS:
        </h2>
        <p className="text-[20px] mt-[20px] ">
         -CSS is Tailwind CSS is a utility-first CSS framework for building custom user interfaces. It provides:
            <ul>
                <li>A set of pre-defined classes for styling HTML elements</li>
                <li>A flexible and customizable system for building responsive designs</li>
                <li>A focus on utility classes over pre-designed components</li>
                <li>Easy integration with popular frameworks like React.js</li>
            </ul>
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Features:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            <ul>
             <li>1. Responsive Design: Adapts to different screen sizes and devices.</li>
             <li>2. Customizable Layout: Uses Tailwind's utility classes for flexible layout options.</li>
             <li>3. Consistent Styling: Tailwind's pre-defined classes ensure consistent design patterns.</li>
             <li>4. Fast Development: Rapid development with Tailwind's utility-first approach.</li>
             <li>5. Accessibility: HTML semantic elements and ARIA attributes ensure accessibility.</li>
            </ul>

        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Challenges:
        </h2>
        <p className="text-[20px] mt-[20px] ">
             <ul>
                <li>1. Steep Learning Curve: Mastering Tailwind's unique approach requires time and effort.</li>
                <li>2. Class Overload: Too many utility classes can lead to cluttered HTML.</li>
                <li>3. Customization Limitations: Tailwind's opinionated design may limit customization options.</li>
                <li>4. Browser Compatibility: Ensuring compatibility with older browsers can be challenging.</li>
                <li>5. Performance Optimization: Large CSS file size can impact page load times.</li>
             </ul>
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Solutions:    
        </h2> 
        <p className="text-[20px] mt-[20px] ">
           <ul>
             <li>1. Learning Resources: Utilize Tailwind's documentation, tutorials, and community resources.</li>
             <li>2. Class Management: Use tools like PurgeCSS to remove unused classes and optimize CSS file size.</li>
             <li>3. Customization: Use Tailwind's configuration options and plugins to extend its functionality.</li>
             <li>4. Browser Compatibility: Use autoprefixer and polyfills to ensure compatibility with older browsers.</li>
             <li>5. Performance Optimization: Use techniques like code splitting, lazy loading, and caching to optimize page load times.</li>
           
           </ul>

        </p>      
    </main>
    );
}

export default Section;