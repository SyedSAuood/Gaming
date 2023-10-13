import React from 'react'
import avatar from '../data/avatar3.png'
import { IoMdCloseCircle } from 'react-icons/io';

import { useStateContext } from '../contexts/ContextsProvider';
const UserProfile = () => {

  const {  setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
    <div className="flex justify-between items-center">
      <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button class="text-gray-600 bg-gray-200 hover:bg-gray-300 text-2xl rounded-full"
         onClick={()=>setIsClicked(false)}>
           <IoMdCloseCircle />
          </button>
    </div>
    <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
      <img
        className="rounded-full h-24 w-24"
        src={avatar}
        alt="user-profile"
      />
      <div>
        <p className="font-semibold text-xl dark:text-gray-200"> Syed Sauood </p>
        <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
        <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
      </div>
    </div>
   
    <div className="mt-5">
      <button className='bg-black text-white rounded-full w-100 px-3 h-10 hover:bg-gray-400 '>
        Logout
      </button>
          
    </div>
  </div>
  )
}


export default UserProfile