import React from "react";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.png";
import Resume from "../assets/resume.png";
import Arrow from "../assets/arrow.svg";
import { useState } from "react";

function Sidebar() {
  const [visibility, setVisibility] = useState(false);
  const view = () => {
    setVisibility(!visibility);
  };

  return (
    <aside className="fixed bottom-[150px]">
      <ul className="flex flex-col items-center gap-[12px]">
        <li
          onClick={view}
          className="w-[50px] h-[50px] bg-[#f0f0f0] flex items-center justify-center rounded-[7px]"
        >
          <img src={Arrow} className={`${visibility ? 'rotate-[180deg]' : 'rotate-[0deg]'}`} width={30} height={30} alt="" />
        </li>
        <div className=
        {`flex-col relative ${visibility ? 'translate-0' : '-translate-x-[50px]'} transition-transform duration-300 ease-in-out  flex bg-white p-[8px] rounded-[13px] gap-[14px]`}
        >
          <li>
            <a href="https://github.com/sumaiyyarauf">
              <img
                src={Github}
                className="bg-white rounded-[50%]"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/sumaiyya-abdul-rauf">
            <img 
              src={Linkedin} 
               className="bg-white rounded-[50%]"
              width={30} 
              height={30} 
              alt="" 
            />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src={Resume}
                className="rounded-[50%]"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
