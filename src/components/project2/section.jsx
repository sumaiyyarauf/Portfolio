import React, { useContext } from "react";
import ThemeContext from "../../context/themContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-rose-900"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px]`}
    >
        <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        Description and Skills:
      </h1>
        <p className="text-[20px] mt-[20px] ">
            A personal portfolio website showcasing my skills, experience, and projects as a web 
            developer.This website is built using React.js and Tailwind CSS, offering a seamless user
            experience with its fast and scalable performance. The website features a customizable and 
            responsive design, making it accessible on various devices and screen sizes. With its 
            interactive and dynamic user interface, users can engage with the website's content in a
            meaningful way. The website is also designed with accessibility in mind, ensuring that all 
            users can navigate and use the website with ease.
            .
        </p>
        <h1 className="text-[30px] mt-[20px] ">
            Built with:
        </h1>
        <h2 className="text-[30px] mt-[20px] font-semibold ">
            Frontend:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            1-React.js (JavaScript library for building user interfaces)
        </p>
        <p className="text-[20px] mt-[20px] ">
            2-Styling: Tailwind CSS (utility-first CSS framework for rapid UI development)
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
            Features:
        </h2>
        <p className="text-[20px] mt-[20px] ">
           - Fast and scalable performance with React.js
           <br />- Customizable and responsive design with Tailwind CSS
           <br />- Interactive and dynamic user interface
           <br />- Accessible and mobile-friendly design
           <br />- Easy to maintain and update with modular code structure
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
            Technologies Used:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            - React.js
            <br />- Tailwind CSS
            <br />- HTML5
            <br />- JavaScript
            <br />- npm for package management
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
        Benefits:
        </h2>
        <p className="text-[20px] mt-[20px] ">
          - Fast and efficient development with React.js and Tailwind CSS
          <br />- Easy maintenance and updates with modular code structure
          <br />- Accessible and mobile-friendly design
          <br />- Customizable and responsive design for unique branding
          <br />- Interactive and dynamic user interface for engaging user experience
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
            Challenges:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            1. Performance Optimization: Ensuring fast page loads and smooth user experience.
            <br />2. Responsive Design: Creating a consistent and accessible design across various devices and screen sizes.
            <br />3. State Management: Managing complex state changes and data flow in the application.
            <br />4. Accessibility: Ensuring the website is accessible and usable for users with disabilities.
            <br />5. Browser Compatibility: Ensuring compatibility with different browsers and versions.
             <br />6. Security: Protecting user data and preventing common web vulnerabilities.
            <br />7. Scalability: Scaling the website to handle increased traffic and user growth
        </p>
        <h2 className="text-[30px] mt-[20px] font-semibold">
            Solutions:
        </h2>
        <p className="text-[20px] mt-[20px] ">
            <ul className="mt-[10px]">
            1. Performance Optimization:
                <li>- Use React's virtual DOM and shouldComponentUpdate method.</li>
                <li>- Optimize images and use lazy loading.</li>
                <li>- Use code splitting and caching.</li>
            </ul>
            <ul className="mt-[10px]">
            2. Responsive Design:
                <li>- Use Tailwind CSS's responsive design utilities.</li>
                <li>- Implement mobile-first design approach.</li>
                <li> - Use media queries and flexible units.</li>
            </ul>
            <ul className="mt-[10px]">
            3. State Management:
                <li>- Use Redux or MobX for state management.</li>
                <li>- Implement a clear and consistent data flow.</li>
                <li>- Use React's Context API for global state.</li>
            </ul>
            <ul className="mt-[10px]">
            4. Accessibility:
                <li>- Follow Web Content Accessibility Guidelines (WCAG).</li>
                <li>- Use semantic HTML and ARIA attributes.</li>
                <li>  - Implement keyboard navigation and focus management.</li>
            </ul>
            <ul className="mt-[10px]">
            5. Browser Compatibility:
                <li>- Use Babel for JavaScript transpilation.</li>
                <li>- Use Autoprefixer for CSS vendor prefixes.</li>
                <li>- Test on different browsers and versions.</li>
            </ul>
            <ul className="mt-[10px]">
            6. Security:
                <li> - Use HTTPS and SSL encryption.</li>
                <li>- Validate user input and prevent XSS attacks.</li>
                <li>- Use secure authentication and authorization methods.</li>
            </ul>
            <ul className="mt-[10px]">
            7. Scalability:
                <li>- Use a load balancer and CDN.</li>
                <li>- Optimize database queries and use caching.</li>
                <li>- Use a scalable hosting solution and monitor performance.</li>
            </ul>
        </p>

        </section>

    )
};
export default Section;