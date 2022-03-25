import React from 'react';
import DownloadADS from './DownloadADS';

function Hero() {
  return (
    <section className="wrapper bg-[#071630] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[5] ">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Experience The</span>
        <span>
          <strong>Best Quality Music</strong>
        </span>
        <span className="text-[15px] text-[#525d6e]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>

        {/* dowload ads */}
        <div>
          <span className="text-[13px]">Dowload now on IOS and Android</span>
          <DownloadADS />
        </div>
      </div>

      {/* rigth side */}
      <div className="imagens relative w-[50%]">
        <img
          src={require('../img/backgraphics.png')}
          alt="bg"
          className="absolute top-[-3rem] left-[19rem] w-[40rem]"
        />

        <img
          src={require('../img/p1.png')}
          alt="mobile phone"
          className="absolute top-[-17rem] left-[13rem] h-[34rem]"
        />
        <img
          src={require('../img/p2.png')}
          alt="mobile phone"
          className="absolute top-[3.8rem] left-[14.55rem] w-[11rem]"
        />
        <img
          src={require('../img/p3.png')}
          alt="mobile phone"
          className="absolute top-[9rem] left-[13rem] w-[5rem]"
        />
        <img
          src={require('../img/p4.png')}
          alt="mobile phone"
          className="absolute top-[8.8rem] left-[12.6rem] w-[5rem]"
        />
      </div>
    </section>
  );
}

export default Hero;
