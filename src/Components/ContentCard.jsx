import React from 'react'
import { HiOutlineArrowDown, HiOutlineArrowUp } from 'react-icons/hi';
import { selldata } from '../Data/Selldata';

function ContentCard() {
  return (
    <div className='flex gap-5 flex-wrap'>
      {
        selldata.map((data,index) => {
          let arrowClass = '';
          let textColorClass = '';
          // Determine arrow and text color classes based on the value
          if (data.changeInValue < 0) {
            arrowClass = 'downward-arrow text-red-500';
            textColorClass = 'text-red-500';
          } else if (data.changeInValue > 0) {
            arrowClass = 'upward-arrow text-green-500';
            textColorClass = 'text-green-500';
          }
          return (
            <div className='grow' key={index}>
              <div
                className="flex grow rounded-lg border px-5 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className='w-24 h-24 rounded-full  relative m-4' style={{ backgroundColor: data.backgroundColor }}>
                  <div className='absolute top-6 left-6 mx-auto flex justify-center items-center text-5xl' style={{ color: data.iconColor }}>{data.icon}</div>
                </div>
                <div className="flex flex-col justify-center">
                  <h5
                    className="text-sm  text-neutral-80 text-gray-400">
                    {data.title}
                  </h5>
                  <p className=" text-xl font-bold dark:text-neutral-200">
                    ${data.value}k
                  </p>
                  <p className={`text-xs text-neutral-500 dark:text-neutral-300 ${textColorClass}`}>
                    <div className={`flex ${arrowClass}`}>
                      <div className='mt-[1.5px]'>{data.changeInValue < 0 ? <HiOutlineArrowDown /> : <HiOutlineArrowUp />}</div>
                      <div>{Math.abs(data.changeInValue)} %</div>
                      <div className='ml-1 text-gray-400'>{data.changeDuration}</div>
                    </div>
                  </p>
                </div>
              </div>
            </div >
          )
        })
      }
    </div>
  )
}

export default ContentCard