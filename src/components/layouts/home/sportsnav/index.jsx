import { useState } from 'react'
import { BiFootball, BiBasketball, BiBaseball } from 'react-icons/bi'
import { FaHockeyPuck, FaVolleyballBall } from 'react-icons/fa'
import { MdHeight, MdSportsHandball, MdSportsRugby } from 'react-icons/md'

export default function SportNav() {
  const [scrollX, setScrollX] = useState(-100)

  return <div className='bg-white overflow-auto md:invisible'>
    <div className='transition-all' style={{
      marginLeft: scrollX,
      width: 7 * 90,
      height: 70
    }}>
      <div className='visible pl-32 md:p-0 md:absolute md:w-screen md:top-0 md:left-0 h-16'>
        <div className='md:table md:mx-auto'>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <BiFootball className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Footbal</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <BiBasketball className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Basketball</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <BiBaseball className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Baseball</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <FaHockeyPuck className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Hockey</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <FaVolleyballBall className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Volleyball</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <MdSportsHandball className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Handball</span>
          </div>
          <div className='inline-block text-center px-3 group hover:bg-gray-100 py-2'>
            <MdSportsRugby className='text-3xl text-black group-hover:text-primary w-full' />
            <span className='text-xs font-bold uppercase'>Rugby</span>
          </div>
        </div>
      </div>
    </div>
  </div>
}