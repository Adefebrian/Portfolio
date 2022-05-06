import React from 'react';
import styled from "styled-components";
import glow from './assets/img/Glow1.svg';
import glow2 from './assets/img/Glow2.svg';
import glow3 from './assets/img/Glow3.svg';
import adefebrian from './assets/img/adefebrian.png';
import resume from './assets/cv.pdf';
const home = () => {

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

  // link styles

  let linkStyles1 = {
    animation: 'opacity 1s'
    };

  let linkStyles2 = {
    animation: 'opacity 3s'
    };

  let linkStyles3 = {
    animation: 'opacity 4s'
    };

  let linkStyles4 = {
    animation: 'opacity 5s'
    };

  // bg styles
  const Glow = {
    zIndex: '-10',
    position: 'fixed',
    width: '1300px',
    transform: 'translateY(40px)',
    transform: 'translateX(-50px)',
    opacity: '0.175',
    filter: 'blur(25px)'
  }

  const Tag = {
    color: '#b3aae2',
    fontWeight: 'normal'
  }

  return (

    // main div
    <div className='flex'>
      <div className='top' id="home"></div>
        <div>
          <img src={adefebrian} alt="That's me!" title="That's me!" className="intro reveal-delay" />
        </div>

      <div id='bg-repeat' className='reveal-delay'>
        <img src={glow} style={Glow}></img>
      </div>
      <div>
        <div className="slide-effect">
          <span className="wip reveal-nav">Hi, my name is</span>
        </div>
        
        <div>
          <h1 className="line-1 anim-typewriter">Ade Febrian</h1>
          <p className="intro reveal-text main">I am a <strong style={Tag}>Community Moderator </strong> with a passion on Cryptocurrency and Programming. Currently in my second year of studying Computer Science at Amikom University in Yogyakarta, Indonesia. Outside of University, you can find me spending time with my community on telegram channel "Airdrop Sultan Indonesia" or creating video content on youtube "Ade Febrian  ".</p>
          
          <p className="intro reveal-text">A few aspects that i specialiaze</p>
        </div>

        <ul className="interests reveal-delay">
          <li>Community Moderator</li>
          <li>Grapich Designer</li>
          <li>Crypto Ambassador</li>
          <li>Front End Developer</li>
        </ul>

      </div>

      {/* social media section */}
      <div className="interests reveal-delay">
        <a onClick={Email}><button className="intro">Let's talk</button></a> 
      </div>

      <div id="skills"></div>

      <div className="socials">
        <a onClick={Github} alt="GitHub" className="reveal-opacity" style={linkStyles1} >GitHub</a>

        <a onClick={Linkedin} className="reveal-opacity" style={linkStyles2}>LinkedIn</a>

        <a onClick={Telegram} className="reveal-opacity" style={linkStyles3}>Telegram</a>

        <a onClick={Youtube} className="reveal-opacity" style={linkStyles3}>Youtube</a>

        <a href={resume}
        target="_blank"
        rel="noopener noreferrer" className="reveal-opacity" style={linkStyles4} >Resume</a>

      </div>

    </div>
  )
}

export default home