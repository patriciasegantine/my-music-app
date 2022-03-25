import React from 'react';

function Feature({ icon, title, text, textbtn }) {
  return (
    <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
      {/* icon */}
      <div className="icon">
        <img
          src={require(`../img/${icon}.png`)}
          alt="icons"
          className="w-[3rem]"
        />
      </div>
      <span className="mt-5">{title}</span>

      <span className="text-[#707070] mt-4">{text}</span>

      <span className="text-[#E600FF]  mt-[3rem] hover:cursor-pointer hover:opacity-[.8]">
        {textbtn}
      </span>
      
    </div>
  );
}

export default Feature;
