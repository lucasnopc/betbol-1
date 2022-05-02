import Image from 'next/image'
import Logo from '../layouts/home/logo'

export default function FullLoading({ message = "" }) {
    return <div className="w-screen h-screen bg-gray-50 text-center pt-20 fixed top-0 left-0 z-50 flex flex-col">
        <Logo theme={'dark'} />
        <div className='w-20 h-20 mx-auto'><Image src="/ico64.png" width={20} height={20} className="animate-spin" /></div>
        <h3 className='text-gray-500 font-semibold text-xl'>{message}</h3>

    </div>
}