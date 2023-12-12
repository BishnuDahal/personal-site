import React from 'react'
import Title from '../components/reusable/Title'

const Education = (props) => {
  const { setMenuState } = props;

  return (
    <div classNameName="w-full p-8">
      <Title titleSection="Education" heading="Education" />
      <div className="w-full grid grid-cols-3 gap-6 p-6">
      <div className="bg-[#fff] rounded p-6 mb-4 border border-[#dee2e6]">
          <p className=" bg-primary text-center text-base font-600 p-1 text-[#fff] rounded w-1/2">2023 - Present</p>
          <h3 className="text-xl font-bold my-2">Master Degree</h3>
          <p className="text-[#dc3545] text-base font-bold my-2">Australian National Institute of Managemet and Commerce(IMC)</p>
          <p className="mb-0 text-[#4c4d4d] text-base my-2">Master in Data Analytics</p>
        </div>
        <div className="bg-[#fff] rounded p-6 mb-4 border border-[#dee2e6]">
          <p className=" bg-primary text-center text-base font-600 p-1 text-[#fff] rounded w-1/2">2014 - 2018</p>
          <h3 className="text-xl font-bold my-2">Bachelor Degree</h3>
          <p className="text-[#dc3545] text-base font-bold my-2">New Summit College, Tribuvan University</p>
          <p className="mb-0 text-[#4c4d4d] text-base my-2">Computer Science Information Technology Shantinagar Kathmandu, Nepal</p>
        </div>
        <div className="bg-[#fff] rounded p-6 mb-4 border border-[#dee2e6] my-2">
          <p className=" bg-primary text-center text-base font-bold p-1 text-[#fff] rounded w-1/2">2012 - 2014</p>
          <h3 className="text-xl font-bold my-2">Higher Secondary Level(+2)</h3>
          <p className="text-[#dc3545] text-base font-bold my-2">Classic College Internationl, HSEB</p>
          <p className="mb-0 text-[#4c4d4d] text-base my-2">Science Tiliganga Kathmandu, Nepal</p>
        </div>
        <div className="bg-[#fff] rounded p-6 mb-4 border border-[#dee2e6] my-2">
          <p className=" bg-primary text-center text-base font-600 p-1 text-[#fff] rounded w-1/2">2000 - 2012</p>
          <h3 className="text-xl font-bold my-2">Secondary Level</h3>
          <p className="text-[#dc3545] text-base font-bold my-2">Orchid Pupil Secondary School, NEPAL Govt.</p>
          <p className="mb-0 text-[#4c4d4d] text-base my-2">School Gothatar Kathmandu, Nepal</p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className='bg-transparent border-2 border-primary text-2xl text-[#fff]  px-[20px] py-[10px] rounded-sm font-500 hover:bg-primary'
          onClick={() => setMenuState("Skill")}
        >Experience</button>
      </div>
    </div>
  )
}

export default Education