import React from 'react';
import img from '../data/download.jpg';
import { LiaCartPlusSolid } from 'react-icons/lia';

const ShopItem = ({ game }) => (
  <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="bg-main-dark-bg rounded-lg hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.6)] hover:cursor-pointer">
      <div className="relative w-full">
        <img className="w-full rounded-t-lg" alt="Jpg" src={img} />
      </div>
      <div className="p-4">
        <div className="text-gray-500 text-sm">
          ALL RANKED ACCOUNTS
        </div>
        <div className="pt-2">
          <p className="text-blue-600 text-sm">
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
          <div className="text-white text-lg">
            $19.99
            <LiaCartPlusSolid className="inline-block text-4xl p-1 relative right-[-50px] hover:bg-main-bg rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Shop = ({ games }) => (

  <div className="place-content-center flex flex-wrap gap-5 max-w-screen-lg mx-auto relative rounded-[10px] p-5 bg-main-bg/50 ">
    <div className="pl-0 pr-[580px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] ">
    <div className=" ms-4 relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
      Shop
    </div>
    </div>
    {games.map((item, index) => (
      <ShopItem key={index} game={item} />
    ))}
  </div>
);

export default Shop;
