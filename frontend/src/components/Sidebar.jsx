import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {IoLogoGameControllerB} from 'react-icons/io'

import {links} from './../data/SidebarData'
import { useStateContext } from '../contexts/ContextsProvider';

const Navbutton = ({title,customFunc,icon,color,dotColor}) =>
(
  <TooltipComponent content={title} position='RightCenter' >
    <button type='button' onClick={customFunc}  style={{color}}
    className='relative text-xl rounded-lg p-5 hover:bg-black'>
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2
       right-2 top-2'/>
        {icon}
      
    </button>
  </TooltipComponent>
)

const Sidebar = () => {

const { activeMenu ,setActiveMenu } = useStateContext()


const isActiveLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2  hover:bg-main-dark-bg'
const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white   hover:bg-main-dark-bg m-2'
 
  return(
    <div className="ml-3 h-screen 
    md:overflow-hidden overflow-auto
    md:hover:overflow-auto pd-10 " > 
    {/* border-r-[#20232a] */}
      {activeMenu && (
      <>
        <div className='flex justify-between items-center ' >
        <Link to='/' onClick={()=>{}} 
        className='items-center gap-3
         ml-2 mt-2 flex text-xl font-extrabold tracking-tight
         text-cyan-50' >
          <IoLogoGameControllerB/> <span>Gaming Lounge</span>
        </Link>

        <TooltipComponent content="Menu" position="BottomCenter"  >
            <button type='button ' onClick={()=>setActiveMenu((prevActiveMenu)=>
            !prevActiveMenu)}
            className='text-2xl invert rounded-lg
             p-2 hover:bg-inverted-bg mt-3 pad block mr-2 transition-all'>
              <AiOutlineLeft/>
            </button>
        </TooltipComponent>
        </div>
        <div className='mt-10' >
          {links.map((item)=>(
            <div key={item.title} >
              <p className='text-white m-3 mt-4 uppercase ' >
              {item.title}
              </p>
              {item.links.map((Link)=>(
                <NavLink to={`/${Link.name}`}
                key={Link.name}
                onClick={()=>{}}
                className={({isActive})=>
                isActive ? isActiveLink : normalLink}
                >
                {Link.icon}
                <span className='capitalize' >
                  {Link.name}
                </span>
                </NavLink>
              ))}

            </div>
          ))}
        </div>

        </>)}

      </div>
  )
}

export default Sidebar