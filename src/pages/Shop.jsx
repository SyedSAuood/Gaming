import React from 'react';
import img from '../data/download.jpg';
import {LiaCartPlusSolid} from 'react-icons/lia';

const ShopItem = ({ game }) => (
  <div className=" w-[250px]  bg-main-dark-bg mb-2 rounded-[10px]  hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.6)] hover:cursor-pointer">
    <div className="relative w-full ">
      <img
        className="w-full h-[133.41px] rounded-[10px]"
        alt="Jpg"
        src={img}
      />
    </div>
    <div className="py-3 pl-4 pr-4">
      <div className="font-normal text-[#777777] text-[10.8px] leading-[18.0px]">
        ALL RANKED ACCOUNTS
      </div>
      <div className="pt-2">
        <p className="font-normal text-[#1e73be] text-[13.5px] leading-[18.7px]">
          [PC / Xbox / PS]
          <br />
          {game.title}
          <br />
          {game.category}
          <br />
          Full Access
        </p>
      </div>
      <div className="pt-2">
        <div className="font-normal text-[17.7px] text-white leading-[20.7px]">
          <br/>
          $19.99<LiaCartPlusSolid className='relative bottom-8 left-44 text-[40px] p-1 hover:bg-main-bg rounded-[10px]'/>
        </div>
      </div>
    </div>
  </div>
);

const Shop = ({ games }) => (
  <div className="ms-6 flex flex-wrap max-w-[1080px] w-[1080px] gap-5 pt-5 pb-0 px-0 relative ">
    {games.map((item, index) => (
      <ShopItem key={index} game={item} />
    ))}
  </div>
);

export default Shop;
