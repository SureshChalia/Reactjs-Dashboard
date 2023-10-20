import React from 'react'
import { PiHandWavingLight } from 'react-icons/pi';
import { HiOutlineSearch } from 'react-icons/hi';
import ContentCard from './ContentCard';
import OverviewChart from './OverviewChart';
import CustomerChart from './CustomerChart';
import ProductTable from './ProductTable';

const MainContent = () => {
  return (
    <div className='bg-slate-100 h-full'>
      <div className='mx-16 pt-4'>
        <div className='flex justify-between'>
          <div className='flex font-bold text-lg'>Hello Shahrukh <span className='mt-1 text-yellow-400'><PiHandWavingLight /></span>,</div>
          <div>
            <form className="max-w-sm p-2 h-6">
              <div className="relative">
                <div className="absolute top-2 bottom-0 h-6 my-auto text-gray-400 left-3"><HiOutlineSearch /></div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-1 pl-9 pr-4 text-gray-500 border rounded-md outline-none bg-white focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
          </div>
        </div>
        <div className='mt-10'>
          <ContentCard />
        </div>
        <div className='mt-10 flex gap-8 flex-wrap w-[100%]'>
          <div className='flex grow w-[60%]'><OverviewChart /></div>
          <div className='sm:flex-grow '><CustomerChart /></div>
        </div>
        <div className='mt-10 mb-10'>
          <div>
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent