import './App.css';
import Home from './Pages/Home';
import ProfileImage from './assets/123.jpg';
import About from './Pages/About';
import Education from './Pages/Education';
import { useState } from 'react';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

import FacebookIcon from './assets/facebook.svg';
import LinkedInIcon from './assets/linkedin.svg';
import YoutubeIcon from './assets/youtube.svg';
import GithubIcon from './assets/github.svg';






function App() {
  const [menuState, setMenuState] = useState("Home")
  const handleSwitch = (expression) => {
    switch (expression) {
      case "Home":
        return <Home
          setMenuState={setMenuState}
        />
      case "About":
        return <About
          setMenuState={setMenuState}
        />
      case "Resume":
        return <Education
          setMenuState={setMenuState}
        />
      case "Skill":
        return <Skills
          setMenuState={setMenuState}
        />
      case "Contact":
        return <Contact />
      default:
        return <Home />
    }
  }
  return (
    <div className="w-full h-[100vh] flex items-center bg-[#111418]">
      <div className="relative sm:w-full h-full w-[10%] flex-[20%] border-r-[1px]">
        <div className="sm:visible hidden text-center p-[16px] text-[#fff]">
          <div className="w-[160px] m-auto">
            <img className="bg-[#000] cursor-pointer rounded-full w-full h-full border-4 border-solid border-[#343a40]"
              src={ProfileImage} alt=""
            />
          </div>
          <h3 className="text-center text-xl m-[12px] font-bold">Bishnu Dahal</h3>
        </div>
        <div className="visible sm:hidden text-center p-[16px] text-[#fff]">
          <div className="w-[60px] m-auto">
            <img className="bg-[#000] cursor-pointer rounded-full w-full h-full border-4 border-solid border-[#343a40]"
              src={ProfileImage} alt=""
            />
          </div>
          <h3 className="text-center text-sm m-[12px] font-bold">Bishnu Dahal</h3>
        </div>
        <div className="text-center mt-[8px] list-style-none text-[#fff]">
          <ul>
            <li className={`cursor-pointer text-sm font-medium py-[8px] hover:text-primary ${menuState === "Home" ? 'text-primary' : 'text-[#fff]'}`}
              onClick={() => setMenuState("Home")}
            >Home</li>
            <li className={`cursor-pointer text-sm font-medium py-[8px] hover:text-primary ${menuState === "About" ? 'text-primary' : 'text-[#fff]'}`}
              onClick={() => setMenuState("About")}
            >About Me</li>
            <li className={`cursor-pointer text-sm font-medium py-[8px] hover:text-primary ${menuState === "Resume" ? 'text-primary' : 'text-[#fff]'}`}
              onClick={() => setMenuState("Resume")}
            >Resume</li>
            <li className={`cursor-pointer text-sm font-medium py-[8px] hover:text-primary ${menuState === "Skill" ? 'text-primary' : 'text-[#fff]'}`}
              onClick={() => setMenuState("Skill")}
            >Skills</li>
            <li className={`cursor-pointer text-sm font-medium py-[8px] hover:text-primary ${menuState === "Contact" ? 'text-primary' : 'text-[#fff]'}`}
              onClick={() => setMenuState("Contact")}
            >Contact</li>
          </ul>
        </div>
        <div className="w-full absolute bottom-2 flex justify-center p-2 gap-4 cursor-pointer">
          <a target="_blank"
            href="https://www.facebook.com/bishnu.dahal.5872">
            <img src={FacebookIcon} alt="" className='-mt-1' />
          </a>
          <a target="_blank"
            href="https://www.linkedin.com/in/bishnudahal">
            <img src={LinkedInIcon} alt="" />
          </a>

          <a target="_blank"
            href="https://github.com/BishnuDahal">
            <img src={GithubIcon} alt="" />
          </a>

          <a target="_blank"
            href="https://www.youtube.com/channel/UCWTlZSeBAZN2ErsLfCsb1uA">
            <img src={YoutubeIcon} alt="" />
          </a>

        </div>
      </div>
      <div className="sm:w-full h-full w-[90%] flex-[80%]">
        {handleSwitch(menuState)}
      </div>

    </div>
  );
}

export default App;
