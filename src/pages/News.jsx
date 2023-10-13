import React from 'react'
//import './news.css'
import { Typography } from 'antd'
// import img from '../data/download.jpg'



const { Text } = Typography;


const News = ({ games }) => {
  return (
    <div className="mb-6 mt-4 flex flex-wrap ">
      {games.map((item) => (
        <a
          target='_blank'
          rel='noreferrer'
          href={item.trailer}
          key={item._id}
          className='mb-4'
          >


          <div className="ms-6 relative h-[141px] ">
            <img
              className="w-[250px] h-[133.88px] rounded-[10px] "
              alt={Text}
              src={item.img}
            />

            <div className="absolute z-10 w-full h-[130px]  opacity-90 bottom-0  rounded-[10px] hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.9)]">
              <div className="p-2">
                <p className="mt-20 z-50 text-white  font-bold text-[14px] leading-[15.8px] hover:underline">
                  {/* {item.description.length < 100 ? `${item.description.length.substring[]`}
                   */}
asdafseadsadfsgdsfdafdsf sdaafcqwafa fad...
                </p>
              </div>
            </div>
          </div>
        </a>))}
    </div>

  )

}
export default News