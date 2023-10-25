import React from 'react';
import './backgroundimg.css';
import codIcon from '../data/icons8-call-of-duty-modern-warfare-50.png'
import Ranking from './Ranking';
import News from './News';
import { gamedata } from '../data/SidebarData';
import { NavLink } from 'react-router-dom';
import Shop from './Shop';

const Callofduty = ({ games }) => {
  return (
    <div className="cod bg-scroll ">
        <div className="p-4">

          <div className="mt-20 flex justify-center">

            <img className="pr-5 " alt="Img2" src={codIcon} />

            <div className="min-h-48 flex items-center justify-center ">

              <NavLink to="/CALLOFDUTY" className="rounded-full px-6 py-2 hover:bg-main-dark-bg hover:bg-opacity-75">

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

export default Callofduty;