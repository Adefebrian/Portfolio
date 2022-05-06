import React from 'react';

// image and file imports
import cinekom from './assets/img/cinekom.png'
import covid from './assets/img/covid.png'
import scrap from './assets/img/scrap.png'
import standar from './assets/img/standar.png'

// projects section
const projects = () => {
  return (
    <div className='reveal projects-header'>
        <h2>Projects</h2>
        <p className='tag reveal'>Beberapa Project yang telah saya buat</p>
        <br></br>

  <div className="projects">

  <div>
    <div className="container reveal">
      <div className='image'><img src={cinekom} alt="Weather calculator"></img></div>
      <div className='text'>
        <h3>01. Cinekom</h3>
        <b>C++</b><b>CLI</b>
        <p>Cinekom adalah project pemesanan tiket berbasis command line yang dibangun menggunakan bahasa c++.</p>
        <span>Command Line App


        <a class='external' target="_blank" rel="noopener noreferrer" alt='Live demo'
        href="https://aoyewol2.notion.site/Console-Based-Projects-2b1d0d3fd84e441595f00db72fbd73d8">
        <i class='bx bx-link-external'></i></a>
        </span> 
      </div>
  
    </div>

    <div className="container reveal">
      <div className='image'><img src={standar} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>02. Standar 8</h3>
        <b>UI/UX</b><b>Figma</b><b>Flutter</b>
        <p>Standar 8 adalah project mobile Apps yang dibangun menggunakan framework flutter yang ditujukan untuk para tenaga pendidik dalam menghandle data standar 8.</p> 
        <span>Still on development 
          <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/SmKENsLifUQw6UiXKQIVRD/Untitled?node-id=0%3A1"><i class='bx bx-link-external'></i></a>
        </span>
      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={scrap} alt="Intelliview"></img></div>
      <div className='text'>
        <h3>03. Coingecko Scrapper</h3>
        <b>Python</b><b>Big Data</b><b>AI</b>
        <p>Coingecko Scrapper adalah project scrapping website yang dibuat dengan tujuan untuk memudahkan dalam melakukan analisis token crypto.</p> 
        <span>Jupyter notebook 
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/Adefebrian/Scraping-Website-Coingecko/"><i class='bx bxl-github'></i></a>       
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Adefebrian/Scraping-Website-Coingecko/blob/main/Scraping%20Website%20Coingecko.ipynb"><i class='bx bx-link-external'></i></a>
        </span>

      </div>
    </div>

    <div className="container reveal">
      <div className='image'><img src={covid} alt="Western University information site"></img></div>
      <div className='text'>
        <h3>04. Covid Checker</h3>
        <b>Vue</b><b>React</b><b>Tailwind</b>
        <p>Covid Checker adalah aplikasi berbasis website yang saya buat atas permintaan Relawan TIK Kota Cirebon dalam membantu masyarakat untuk mengidentifikasi gejala-gejala covid yang sedang marak saat ini.</p> 
        <span>Relawan TIK Kota Cirebon
          <a class='external' target="_blank" rel="noopener noreferrer" href="https://github.com/Adefebrian/covid19-check"><i class='bx bxl-github'></i></a>
          <a target="_blank" rel="noopener noreferrer" href="http://covid19.rtikcirebonkota.id/"><i class='bx bx-link-external'></i></a>
        </span>
      </div>
    </div>
  </div>

  <span className='reveal github wip'>See more projects on my <a a target="_blank" rel="noopener noreferrer" href="https://github.com/adefebrian">GitHub</a></span>

</div>

    </div>
  )
}

export default projects