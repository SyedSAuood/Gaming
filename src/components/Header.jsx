import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextsProvider';
import userimage from '../data/avatar3.png'
import Userprofile from './UserProfile'


const Navbutton = ({title,customFunc,icon,color,dotColor}) =>
(
  <TooltipComponent content={title} position='BottomCenter' >
    <button type='button' onClick={customFunc} style={{color}}
    className='relative text-xl rounded-lg p-3 hover:bg-black transition-all' >
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2
       right-2 top-2'/>
        {icon}
      
    </button>
  </TooltipComponent>
)

const Header = () => {

  const { setActiveMenu, isClicked, handleClick } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <Navbutton title="Menu" customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
      color='white' icon={<AiOutlineMenu/>}  />

  <TooltipComponent content="Profile" position='BottomCenter' >
        <div className='flex items-center gap-2 cursor-pointer p-1
        hover:bg-black transition-all rounded-lg fixed md:right-8 ' onClick={()=> handleClick('UserProfile')} >
          <img src={userimage} alt='User_Image' className='rounded-full w-8 h-8'/>
            <p>
              <span className='text-14 text-gray-400' > Hi,</span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14' > SMS</span>
            </p>
            <MdKeyboardArrowDown className='text-14 text-gray-400' />
        </div>

      </TooltipComponent>
      {isClicked.UserProfile && <Userprofile/>}
    </div>
  )
}

export default Header