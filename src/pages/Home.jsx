// import React, { useState, useEffect } from 'react'

import GameSwiper from './GameSwiper';
import News from './News';
import Shop from './Shop';
import Ranking from './Ranking';


const Home = ({games}) => {
  

  return (

    <div className='mt-12 justify-center' >

      <div className='flex flex-wrap lg:flex-nowrap justify-center row ' >
        <GameSwiper games={games} />
      </div>

      <div>

        <Ranking games={games} />
      </div>

      <div  >
        <h1 className='ms-8 font-bold text-white text-[18px]' >Gaming news</h1>
        <News games={games} />
      </div>

      <div>
        <h1 className='ms-8 font-bold text-white text-[18px]' >Shop</h1>
        <Shop games={games} />
      </div>

    </div>
  )
}

export default Home