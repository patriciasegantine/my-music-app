import React from 'react';
import CenterMenu from '../components/CenterMenu.js';

function Header() {
  const buttonStyle =
    'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[3px] mx-[2px]';

  return (
    <header className="header text-white bg-[#081730] flex items-center justify-between px-[5rem] pt-[3rem] pb-[1rem] text-[0.9rem] ">
      {/* logo */}
      <img
        src={require('../img/MuzicLogo.png')}
        alt="logo"
        className="logo w-[42px] h-[42px]"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex justify-between">
        <button className={buttonStyle + ` hover:bg-[#232a4e] `}>SignUp</button>
        <button className={buttonStyle + ` bg-[#232a4e] hover:bg-[#0a0c1a]`}>
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
