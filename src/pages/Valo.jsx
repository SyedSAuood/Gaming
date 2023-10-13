import React from 'react'
import './valo.css'
import valoicon from'../data/icons8-valorant-50-2.png'
import Ranking from './Ranking'
import News from './News'
import { gamedata } from '../data/SidebarData'
import { NavLink } from 'react-router-dom'
import Shop from './Shop'

const Valo = ({games}) => {
  return (
  <div className='MEOW   '>
      <div className="flex flex-col items-center pl-[246px] pr-[470px] py-0 relative">
      <div className="flex flex-col max-w-screen-lg w-[972px] items-start relative flex-[0_0_auto]">
        <div className="relative self-stretch w-full h-[210px]">
          <img
            className="absolute top-[60px] left-0"
            alt="Img2"
            src={valoicon}
          />
        </div>

        <div className="flex flex-col items-start gap-[16px] relative self-stretch w-full flex-[0_0_auto] mt-[-50px]">
          <div className="min-h-[48px] items-center self-stretch w-full flex-[0_0_auto] z-[1] flex relative">


            <div className="flex-col items-start flex-1 grow flex relative">
              <div className="flex items-start pl-0 pr-[442.83px] py-0 w-full relative self-stretch flex-[0_0_auto]">
                <NavLink to={`/Valorant`}>
                    <div className="pl-[15.83px] pr-[15.62px] pt-[10.41px] pb-[9.59px] self-stretch hover:bg-[#1155f5] rounded-[80px] inline-flex flex-col max-w-[360px] items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[16px] text-center tracking-[0.15px] leading-[19.2px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        All
                      </div>
                    </div>
                </NavLink>
                   

                {
                  gamedata.map((item)=>(
                    <NavLink to={`/${item.name}`}>
                      <div className="pl-[15.83px] pr-[15.62px] pt-[10.41px] pb-[9.59px] self-stretch hover:bg-[#1155f5] rounded-[80px] inline-flex flex-col max-w-[360px] items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[16px] text-center tracking-[0.15px] leading-[19.2px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        {item.name}
                      </div>
                    </div>
                    </NavLink>
                    
                  ))
                }
                
              

              </div>
            </div>
          </div>
          




          {/* Aby ya kia ho raha ha  */}
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-0">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto] mt-[-0.01px]">

              <div className="flex flex-col w-[762px] items-start relative self-stretch mr-[-1.00px]">
                <div className="relative self-stretch w-full h-[3186.75px]">
                 

                 
                
                  <div className="flex flex-col w-[762px] items-start gap-[10px] pt-[8px] pb-[24px] px-[16px] absolute top-[0] left-0 rounded-[20px]">
                     <Ranking games={games} /> 
                  </div>
                 
                  <div className="flex flex-col w-[762px] items-start gap-[24px] absolute top-[900px] left-0">
                    <News games={games} />
                  </div>

                  <div className="flex flex-col w-[762px] items-start gap-[24px] absolute top-[1550px] left-0">
                    <Shop games={games} />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
  
  </div>

     

  )
}

export default Valo