import './App.css';
import Home from './Pages/Home';
import ProfileImage from './assets/123.jpg';
import About from './Pages/About';
import Education from './Pages/Education';
import { useRef, useState } from 'react';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

import FacebookIcon from './assets/facebook.svg';
import LinkedInIcon from './assets/linkedin.svg';
import YoutubeIcon from './assets/youtube.svg';
import GithubIcon from './assets/github.svg';
import Nav from './components/Nav';

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
  const ref = useRef()
  const handleMobileMenu = () => {
    console.log(ref)
    const btn = document.querySelector("button.mobile-menu-button")
    const menu = document.querySelector(".mobile-menu")

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
  return (
    <div className="w-full h-[100vh] md:flex items-center bg-[#111418]">
      <div className="hidden md:block relative sm:w-full h-full w-[10%] flex-[20%] border-r-[1px]">
        <div className=" text-center p-[8px] md:p-[16px] text-[#fff]">
          <div className="w-[60px] md:w-[160px] m-auto">
            <img className="bg-[#000] cursor-pointer rounded-full w-full h-full border-4 border-solid border-[#343a40]"
              src={ProfileImage} alt=""
            />
          </div>
          <h3 className="text-center text-sm md:text-xl md:m-[12px] font-bold">Bishnu Dahal</h3>
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
      <div ref={ref} onClick={() => handleMobileMenu()} class="md:hidden flex items-center absolute top-2 right-2 bg-gray-800 rounded-full p-2 z-50">
        <button class="outline-none mobile-menu-button">
          <svg class=" w-6 h-6 text-white hover:text-[#FF13B1] "
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>````````````````````````````````````````````````````
      <div class="hidden mobile-menu">
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
        {/* <ul class="">
          <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
          <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">SKills</a></li>
          <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
        </ul> */}
      </div>
      <div className="sm:w-full h-full">
        {handleSwitch(menuState)}
      </div>

    </div>
  );
}

export default App;
