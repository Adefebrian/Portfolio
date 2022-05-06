import React from 'react';

const floaters = () => {

  // social media links
  const Github = () => {
    window.open("https://github.com/adefebrian");
  };

  const Linkedin = () => {
    window.open("https://www.linkedin.com/in/adefebrianpro/");
  };

  const Telegram = () => {
    window.open("https://t.me/airdropsultanindonesia");
  };

  const Youtube = () => {
    window.open("https://youtube.com/c/AdeFebrian");
  };

  const Email = () => {
    window.open("mailto:Adefebrianft@gmail.com");
  };

  return (
    <div className='reveal-opacity'>
        <div className="floaters">  
            <button onClick={Email}><i className='bx bx-envelope'></i></button>
            <button onClick={Youtube}><i className='bx bxl-youtube'></i></button>
            <button onClick={Telegram}><i className='bx bxl-telegram'></i></button>
            <button onClick={Github}><i className='bx bxl-github'></i></button>
            <button onClick={Linkedin}><i className='bx bxl-linkedin'></i></button>
        </div>
      
    </div>
  );
}

export default floaters