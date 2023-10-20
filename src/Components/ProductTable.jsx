import React from 'react'
import { productdata } from '../Data/Productdata'
import { HiOutlineSearch } from 'react-icons/hi';

function ProductTable() {

  return (
    <div className="overflow-x-auto rounded-lg bg-white">
      <div className='flex justify-between p-5'>
        <div>
          <p className='font-bold'>Product Sell</p>
        </div>
        <div className='flex gap-4'>
          <div className=''>
            <form className="max-w-sm ">
              <div className="relative">
                <div className="absolute top-2 bottom-0 h-6 my-auto text-gray-400 left-3"><HiOutlineSearch /></div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-1 pl-9 pr-4 h-6 text-gray-500 border rounded-md outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
                />
              </div>
            </form>
          </div>
          <div>
            <select id="timePeriod" className='bg-gray-200 rounded text-gray-400 ' style={{ outline: 'none' }}>
              <option value="monthly">Last 30 Days</option>
              <option value="quarterly">Last 6 Months</option>
              <option value="yearly">Last Year</option>
            </select>
          </div>
        </div>

      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-400">Product Name</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-400">Stock</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-400">Price</th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-gray-400">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {productdata.map((data) => (
            <tr key={data.id} className=''>
              <td className="px-6 py-4 whitespace-nowrap "><div className='flex gap-2'><div className='rounded-md w-20 bg-slate-700 overflow-hidden'> <img src={data.image} alt="" className='object-cover w-full h-full' /> </div><div><p className='font-bold'>{data.title}</p> <p className='text-gray-400 text-sm'>{data.description}</p></div></div></td>
              <td className="px-6 py-4 whitespace-nowrap ">{data.availableStock} in stock</td>
              <td className="px-6 py-4 whitespace-nowrap font-normal">${data.price}k</td>
              <td className="px-6 py-4 whitespace-nowrap ">{data.totalSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable