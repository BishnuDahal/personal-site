import React from 'react'
import Title from '../components/reusable/Title'


import FacebookIcon from '../assets/facebook.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import YoutubeIcon from '../assets/youtube.svg';
import MailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/call.svg';



const Contact = (props) => {
  const { setMenuState } = props;

  return (
    <div className="w-full p-8">
      <Title titleSection="Contact" heading="Get In Touch" />

      <div className="text-center text-md-start text-[#fff] m-12">
        <h2 className="mb-3 text-2xl text-uppercase font-bold">Address
        <span className="w-[8%] border-b-4 border-[#D1197E] block mx-auto p-1 rounded"></span></h2>
        <p className="text-base ">Kageshwori, Manohora Municipality</p>
        <p className="text-base ">Gothatar-09 Kathmandu, Nepal</p>
      </div>


      <div className="w-full flex flex-wrap justify-between p-4">
        <button
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={FacebookIcon} alt="" />
          Facebook</button>
        <button
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={LinkedInIcon} alt="" />
          LinkedIn</button>
        <button
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={GithubIcon} alt="" />
          Github</button>
        <button
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={YoutubeIcon} alt="" />
          Youtube</button>
      </div>

      <div className="text-center text-md-start text-[#fff] m-12">
        <h2 className="mb-3 text-2xl text-uppercase font-bold">Contact On
        <span className="w-[8%] border-b-4 border-[#D1197E] block mx-auto p-1 rounded"></span></h2>
        <span className=" text-lg text-[#fff] flex justify-center gap-2">
          <img lassName=" text-[#fff]" src={phoneIcon} alt="" />
          <p className="text-base ">
            (+977) 9863847606, 9803651165
          </p>
        </span>
        <span className=" text-lg flex justify-center gap-2">
          <img src={MailIcon} alt="" />
          <p className="text-base mb-0 text-primary ">
            bishnu.dahal630@gmail.com
          </p>
        </span>
      </div>
     
      <p class="mb-3 mb-lg-0 text-[#fff] absolute bottom-2">Copyright © 2023
        <a href="#home" class="font-bold text-primary ml-2">Bishnu</a>. All Rights Reserved.</p>
    </div>
  )
}


export default Contact