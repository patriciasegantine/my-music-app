import React from 'react';

function DownloadADS() {
  const downloadImagensStyle =
    'border-[2px] border-[#232a4e] rounded-[13px] h-[3rem] w-[10rem] mr-[.5rem]';

  return (
    <div className="download flex ">
      <div className="downloadImagens">
        <img
          src={require('../img/App Store.png')}
          alt="Apple Store"
          className={downloadImagensStyle}
        />
      </div>

      <div className="downloadImagens">
        <img
          src={require('../img/Google Play.png')}
          alt="Google Play"
          className={downloadImagensStyle}
        />
      </div>
    </div>
  );
}

export default DownloadADS;
