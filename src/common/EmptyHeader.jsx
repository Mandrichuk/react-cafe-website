import React from 'react';
import images from "../constants/index";


function EmptyHeader() {
  return (
    <div className={`w-full bg-black h-[70px] fixed top-0 flex flex-col items-center justify-center`}>
      <img src={images.textLogo} className={`h-[25px] object-cover`} />
    </div>
  );
}

export default EmptyHeader;