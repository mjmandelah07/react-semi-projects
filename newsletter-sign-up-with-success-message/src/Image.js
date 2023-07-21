import React from "react";
import mobileImg from "./images/illustration-sign-up-mobile.svg";
import desktopImg from "./images/illustration-sign-up-desktop.svg";

const Image = () => {
  const isMobile = window.innerWidth <= 767; // Check if the screen width is less than or equal to 768 pixels (you can adjust this value as needed)

  return (
    <div className="w-full ">
      {isMobile ? (
        <img src={mobileImg} alt="Mobile" />
      ) : (
        <img src={desktopImg} alt="Desktop" />
      )}
    </div>
  );
};

export default Image;
