import { useState } from 'react'
import { BiFootball, BiBasketball, BiBaseball } from 'react-icons/bi'
import { FaHockeyPuck, FaVolleyballBall } from 'react-icons/fa'
import { MdHeight, MdSportsHandball, MdSportsRugby } from 'react-icons/md'

export default function SportNav() {
  const [scrollX, setScrollX] = useState(0)

  return <div className='bg-green-500 overflow-auto'>
    <div className='transition-all h-14 md:h-8' style={{
      marginLeft: scrollX,
      width: 7 * 110,
    }}>
      <div className='pl-10 md:p-0'>
        <div className='md:table md:mx-auto'>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <BiFootball className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Futebol</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <BiBasketball className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Basquetbol</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <BiBaseball className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Basebol</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <FaHockeyPuck className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Hockey</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <FaVolleyballBall className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Voley</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <MdSportsHandball className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Handbol</span>
          </div>
          <div className='inline-block text-center p-1 group hover:bg-gray-100 cursor-pointer'>
            <MdSportsRugby className='md:text-lg text-2xl text-black group-hover:text-primary w-full md:w-min md:inline-block md:mr-1' />
            <span className='text-xs font-bold uppercase'>Rugby</span>
          </div>
        </div>
      </div>
    </div>
  </div>
}