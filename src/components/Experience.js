import React from 'react';
import Feature from './Feature';

function Experience() {
  return (
    <section className="experience flex flex-col items-center justify-start px-[5rem] text-white bg-[#020917] h-[60rem] pt-[18rem] mt-[-5rem] relative z-[2] rounded-b-[5rem]">
      {/* title icon */}
      <img src={require('../img/wave.png')} alt="" className="w-[5rem]" />

      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>

      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature
          icon="group1"
          title="For Live Music"
          text="ipsum dolor sit amet consectetur adipisicing elit. Sint, magni"
          textbtn="Lear More"
        />
        <Feature
          icon="group2"
          title="For Daily Music"
          text="ipsum dolor sit amet consectetur adipisicing elit. Sint, magni"
          textbtn="Click here"
        />
        <Feature
          icon="group3"
          title="For Artists"
          text="ipsum dolor sit amet consectetur adipisicing elit. Sint, magni"
          textbtn="Lear More"
        />
      </div>
    </section>
  );
}

export default Experience;
