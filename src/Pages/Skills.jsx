import React from 'react'
import Title from '../components/reusable/Title'

const Skills = (props) => {
  const { setMenuState } = props;

  return (
    <div className="w-full p-8">
      <Title titleSection="Skills" heading="My Skills" />
      <div className="skillanimate p-2">
        <li>
          <h3>HTML</h3><span className="bar"><span className="html"></span></span>
        </li>
        <li>
          <h3>CSS</h3><span className="bar"><span className="Css"></span></span>
        </li>
        <li>
          <h3>Tailwind</h3><span className="bar"><span className="Css"></span></span>
        </li>
        <li>
          <h3>SAAS</h3><span className="bar"><span className="Saas"></span></span>
        </li>
        <li>
          <h3>JAVASCRIPT</h3><span className="bar"><span className="Javascript"></span></span>
        </li>
        <li>
          <h3>Typescript</h3><span className="bar"><span className="Javascript"></span></span>
        </li>
        <li>
          <h3>React</h3><span className="bar"><span className="React"></span></span>
        </li>
        <li>
          <h3>React Native</h3><span className="bar"><span className="ReactNative"></span></span>
        </li>
        <li>
          <h3>Electron JS</h3><span className="bar"><span className="Electron"></span></span>
        </li>
        <li>
          <h3>Grapes Js</h3><span className="bar"><span className="GrapesJs"></span></span>
        </li>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className='bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
          onClick={() => setMenuState("Contact")}
        >Connect On</button>
      </div>
     
    </div>
  )
}

export default Skills