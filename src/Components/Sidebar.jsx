import React, { useState } from 'react'
import { RiSettingsLine } from 'react-icons/ri';
import { sidebarLinks } from '../Data/Dashboardlinks';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { BiSolidRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PersonImg from "../Assets/project-manager-img.jpg"
const Sidebar = () => {

  const [open, setOpen] = useState(true);

  return (
    <div className='bg-blue-900 h-full'>
      <div className={`${open ? "w-60" : "w-16"} transition-all duration-400 ease-in`}>
        <div className='flex text-white gap-2 p-5 relative'>
          <div className={`mt-1 text-4xl transition-all duration-400 ease-in ${open && "rotate-[360deg]"}`}> <RiSettingsLine /> </div>
          <div className={`text-xl mt-2 ${!open && "scale-0"}`}> Dashboard </div>
          <div className={`text-red-600 text-2xl absolute cursor-pointer -right-4 top-7 w-7 mt-1 transition-all duration-400 ease-in ${!open && "rotate-180 left-11 duration-200"}`} onClick={() => setOpen(!open)}><BiSolidRightArrowCircle /></div>
        </div>
        <div className='flex flex-col text-white justify-between gap-40'>
          <div className='flex flex-col mt-5'>
            {
              sidebarLinks.map((link) => {
                return (
                  <div className='text-white mr-10 pl-5 pt-4' key={link.id}>
                    <div className=' hover:cursor-pointer'>
                      <div className={`flex justify-between ${open && "hover:bg-gray-400 rounded-md p-1"} `}>
                        <div className={`mt-1 text-2xl flex items-center justify-center gap-2 ${!open && "hover:bg-slate-400 rounded-md p-1"}`}>{link.icon}
                          <span className={`text-lg ${!open && "hidden"} origin-left duration-200`}><Link to={link.path}> {link.name} </Link></span>
                        </div>
                        <div className={`mt-3 ${!open && "hidden"}`}><IoIosArrowForward/></div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className={`flex gap-2  mx-2 rounded-md p-1 ${open && "bg-slate-400"}`}>
            <div className='w-10 h-10 rounded-full overflow-hidden'><img className="w-full h-full object-cover" src={PersonImg} alt="" /></div>
            <div className={`flex gap-10 ${!open && "hidden"}`}>
              <div className='flex flex-col'>
                <div>Evano</div>
                <div className='text-sm opacity-50'>Project Manager</div>
              </div>
              <div className='mt-3'><IoIosArrowDown /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar