import React from 'react'
import Title from '../components/reusable/Title'


import FacebookIcon from '../assets/facebook.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import YoutubeIcon from '../assets/youtube.svg';
import MailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/call.svg';



const Contact = () => {

  return (
    <div className="w-full p-8">
      <Title titleSection="Contact" heading="Get In Touch" />

      <div className="text-center text-md-start text-[#fff] m-12">
        <h2 className="mb-3 text-2xl text-uppercase font-bold">Address
        <span className="w-[8%] border-b-4 border-[#D1197E] block mx-auto p-1 rounded"></span></h2>
        <p className="text-base ">Dartbrook Rd Auburn</p>
        <p className="text-base ">Sydney NSW, Australia</p>
      </div>


      <div className="w-full flex flex-wrap justify-between p-4 gap-2">
        <a
          target="_blank"
          href="https://www.facebook.com/bishnu.dahal.5872"
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={FacebookIcon} alt="" />
          Facebook</a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bishnudahal"
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={LinkedInIcon} alt="" />
          LinkedIn</a>
        <a
          target="_blank"
          href="https://github.com/BishnuDahal"
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={GithubIcon} alt="" />
          Github</a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCWTlZSeBAZN2ErsLfCsb1uA"
          className='flex gap-2 justify-center items-center bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
        >
          <img src={YoutubeIcon} alt="" />
          Youtube</a>
      </div>

      <div className="text-center text-md-start text-[#fff] m-12">
        <h2 className="mb-3 text-2xl text-uppercase font-bold">Contact On
          <span className="w-[8%] border-b-4 border-[#D1197E] block mx-auto p-1 rounded"></span></h2>
        <span className=" text-lg text-[#fff] flex justify-center gap-2">
          <img lassName=" text-[#fff]" src={phoneIcon} alt="" />
          <p className="text-base ">
            (+61) 423 542 135
          </p>
        </span>
        <span className=" text-lg flex justify-center gap-2">
          <img src={MailIcon} alt="" />
          <p className="text-base mb-0 text-primary ">
            <a href="mailto:email@example.com">bishnu.dahal630@gmail.com</a>
          </p>
        </span>
      </div>

      <p class="mb-3 mb-lg-0 text-[#fff] absolute bottom-2">Copyright © 2023
        <a href="#home" class="font-bold text-primary ml-2">Bishnu</a>. All Rights Reserved.</p>
    </div>
  )
}


export default Contact