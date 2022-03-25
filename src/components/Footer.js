import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faGithub } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
  return (
    <div>
      <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        {/* Social icons */}
        <div className="flex w-[100%] justify-center mt-14">
          {/* <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> */}
          {/* <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
        </div>

        {/* detail */}
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ex
          repellendus cumque commodi nobis! Vero aperiam, quo eos nihil autem
          molestias aspernatur at similique vel exercitationem amet rerum dicta
          odit.
        </span>
      </div>
    </div>
  );
}

export default Footer;
