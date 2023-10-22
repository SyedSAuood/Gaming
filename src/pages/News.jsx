import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const News = ({ games }) => {
  return (
<div className='p-5 bg-main-bg/50 max-w-screen-lg mx-auto rounded-[10px]  '>
    <div className="pl-0 pr-[580px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] ">
        <div className=" ms-4 relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
          Gaming news
        </div>
      </div>
    <div className="pt-4 mb-6 mt-4 relative place-content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      
      {games.map((item) => (
        <a
          target="_blank"
          rel="noreferrer"
          href={item.trailer}
          key={item._id}
          className="p-2 rounded-lg  overflow-hidden transform transition-transform duration-200 hover:scale-105 "
        >
          <div className="relative h-40">
            <img
              className="relative w-full h-full hover:opacity-75 rounded-[10px] z-30"
              alt={Text}
              src={item.img}
              
            />

            <div className="absolute w-full h-full bottom-[-8px] ">
              <div className="p-2 rounded-[10px] h-full ">
                <p className="mt-24 text-white font-bold text-[14px] leading-[15.8px] hover:underline relative z-40">
                  {/* Truncate the description if it's too long */}
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
      );
};

export default News;
