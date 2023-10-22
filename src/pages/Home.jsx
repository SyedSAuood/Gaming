// import React, { useState, useEffect } from 'react'
import './homebg.css';
import GameSwiper from './GameSwiper';
import News from './News';
import Shop from './Shop';
import Ranking from './Ranking';


const Home = ({games}) => {
  

  return (
<div className='homebg bg-scroll'>
    <div className='mt-12 justify-center ' >

      <div className='pt-10 m-5  flex flex-wrap lg:flex-nowrap justify-center row ' >
        <GameSwiper games={games} />
      </div>

      <div className="m-5">
        <Ranking games={games} />
      </div>

      <div className="m-5">
        <News games={games} />
      </div>

      <div className="m-5">
        <Shop games={games} />
      </div>

    </div>
    </div>
  )
}

export default Home