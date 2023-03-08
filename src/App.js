import './App.css';
import Home from './Pages/Home';
import ProfileImage from './assets/profiles.jpg';
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
    <div className="landing-page">
      <div className="landing-page-sidebar">
        <div className="text-center p-[16px] text-[#fff]">
          <div className="w-[160px] m-auto">
            <img className="bg-[#000] cursor-pointer rounded-full w-full h-full border-4 border-solid border-[#343a40]"
              src={ProfileImage} alt=""
            />
          </div>
          <h3 className="text-center text-xl m-[12px] font-bold">Bishnu Dahal</h3>
        </div>
        <div className="text-center mt-[8px] list-style-none text-[#fff]">
          <ul>
            <li className="cursor-pointertext-lg font-medium py-[8px] hover:text-[#FF13B1]"
              onClick={() => setMenuState("Home")}
            >Home</li>
            <li className="cursor-pointer text-lg font-medium py-[8px] hover:text-[#FF13B1] "
              onClick={() => setMenuState("About")}
            >About Me</li>
            <li className="cursor-pointer text-lg font-medium py-[8px] hover:text-[#FF13B1] "
              onClick={() => setMenuState("Resume")}
            >Resume</li>
            <li className="cursor-pointer text-lg font-medium py-[8px] hover:text-[#FF13B1] "
              onClick={() => setMenuState("Skill")}
            >Skills</li>
            <li className="cursor-pointer text-lg font-medium py-[8px] hover:text-[#FF13B1] "
              onClick={() => setMenuState("Contact")}
            >Contact</li>
          </ul>
        </div>
        <div className="w-full absolute bottom-2 flex justify-center p-2 gap-4 cursor-pointer">
          <img src={FacebookIcon} alt="" />
          <img src={LinkedInIcon} alt="" />
          <img src={GithubIcon} alt="" />
          <img src={YoutubeIcon} alt="" />
        </div>
      </div>
      <div className="container">
        {handleSwitch(menuState)}
      </div>

    </div>
  );
}

export default App;
