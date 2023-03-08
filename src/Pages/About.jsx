import React from 'react'
import Title from '../components/reusable/Title'

const About = (props) => {
  const { setMenuState } = props;

  return (
    <div className="w-full p-8">
      <Title titleSection="About Me" heading="Know Me More" />
      <div className="w-full flex flex-wrap justify-between gap-6 p-2 text-[#fff]">
        <div className="flex-[65%] text-lg">
          <h2 className="text-3xl font-bold mb-3 ">I'm <span className="text-primary">Bishnu Dahal,</span> a Frontend
            Developer</h2>
          <p className="">I help you build brand for your business at an affordable price. Thousands of
            clients have procured exceptional results while working with our dedicated team. when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className="">Delivering work within time and budget which meets client’s requirements is our
            moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown
            printer took a galley.</p>
        </div>
        <div className="flex-[30%]">
          <div className="divide-y divide-slate-200  ">
            <div className="p-4 text-lg">
              <span className="font-bold text-xl mr-2">Name:</span>Bishnu Dahal
            </div>
            <div className="p-4 text-lg">
              <span className="font-bold text-xl mr-2">Email:</span><a
                href="mailto:chat@simone.com" className='text-primary'>bishnu.dahal630@gmail.com</a>
            </div>
            <div className="p-4 text-lg"><span className="font-bold text-xl mr-2">DOB:</span>1996-06-13</div>
            <div className="p-4 text-lg">
              <span className="font-bold text-xl mr-2">From:</span> Kathmandu, Nepal
            </div>
          </div>
          <div className="p-4 text-lg">
            <button className='bg-primary border-2 border-primary text-2xl text-[#fff]  px-[12px] py-[12px] rounded-full font-500 hover:text-primary hover:bg-transparent'>Downlaod CV</button>
          </div>
        </div>
      </div>
     
    </div>

  )
}

export default About