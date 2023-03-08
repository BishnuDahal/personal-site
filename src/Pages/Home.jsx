import React from 'react'

const Home = (props) => {
  const { setMenuState } = props;
  return (
    <>
      <div className="landing-page-body " id="landing-page-body">
        <div className="landing-page-body-content">
          <h1>Hi I'm Bishnu Dahal</h1>
          <p>I'm a Front End Developer Living In Kathmandu,Nepal.I am a student of Computer Science Information
            Technology.I develop all aspects of frontend with
            <span className="uppercase font-bold text-white bg-[#111418] px-1 rounded-sm">React</span>,
            <span className="uppercase font-bold text-white bg-[#111418] px-1 rounded-sm">React Native</span> &
            <span className="uppercase font-bold text-white bg-[#111418] px-1 rounded-sm">Electron Js</span> </p>

          <button
            className='bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
            onClick={() => setMenuState("About")}
          >Learn more</button>

        </div>
      </div>
    </>
  )
}

export default Home