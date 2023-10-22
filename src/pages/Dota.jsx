import React from 'react';
import './backgroundimg.css';
import dotaIcon from '../data/icons8-dota-2-30.png'
import Ranking from './Ranking';
import News from './News';
import { gamedata } from '../data/SidebarData';
import { NavLink } from 'react-router-dom';
import Shop from './Shop';

const Dota = ({ games }) => {
  return (
    <div className="dota bg-scroll ">
        <div className="p-4">

          <div className="mt-20 flex justify-center">

            <img className="pr-5 " alt="Img2" src={dotaIcon} />

            <div className="min-h-48 flex items-center justify-center ">

              <NavLink to="/Valorant" className="rounded-full px-6 py-2 hover:bg-main-dark-bg hover:bg-opacity-75">

                <div className="font-bold text-white text-16">
                  All
                </div>
              </NavLink>

              {gamedata.map((item) => (
                <NavLink to={`/${item.name}`} key={item.name} className="rounded-full px-6 py-2 hover:bg-main-dark-bg hover:bg-opacity-75">
                  <div className="font-bold text-white text-16">
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          </div>
          <div className="w-full ">
            <div className="pt-8 px-2">
              <Ranking games={games} />
            </div>
          </div>

          <div className="w-full ">
            <div className="pt-8 px-4">
              <News games={games} />
            </div>
          </div>

          <div className="w-full ">
            <div className="pt-8 px-4">
              <Shop games={games} />
            </div>
          </div>
        
      </div>
  );
};

export default Dota;
