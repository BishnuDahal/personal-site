import React from 'react'

const Title = (props) => {
  const { titleSection, heading } = props;
  return (
    <div className="relative flex text-center justify-center mb-5">
      <h2 className="text-9xl uppercase font-600 w-full mb-0 text-[#dee3e4] opacity-40">{titleSection}</h2>
        <p className="text-3xl top-12 font-bold absolute w-full align-self-center mb-0 text-[#fff]">
        {heading}
        <span className="w-[8%] border-b-4 border-[#D1197E] block mx-auto p-1 rounded"></span>
        </p>
      </div>
  )
}

export default Title