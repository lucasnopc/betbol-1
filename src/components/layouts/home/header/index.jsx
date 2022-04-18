import { useSession } from 'next-auth/client'
import Logo from '../logo'
import Profile from './profile'
import HeaderAdmin from '../../admin/headeradmin'
import Link from 'next/link'
import { useStore } from '../../../../context/store'

export default function Header() {
    const [session] = useSession()
    const { user } = useStore()

    return <>
        <header className={`${user?.nivel == 5 ? `mt-6` : ``} bg-green-600 border-b border-green-500 w-full basis-auto z-10`}>
    {user?.nivel == 5 &&<HeaderAdmin />}
            <div className='md:pl-2 flex items-center justify-between'>
            <Logo />
            <div id="profile" className='flex items-center px-2'>
            {session && user && <Link href="/user/deposit"><div id="points" className="inline-block h-full mr-1 group">
                    <span className="bgicon-coin align-middle"></span>
                    <span className="ml-2 font-semibold cursor-pointer group-hover:font-bold text-xs align-middle text-white">R$ {user ? Number(user.points).toFixed(2) : `0.00`}</span>
                </div>
                </Link>}
                {user && <Profile user={user} />}
            </div>
            </div>
        {/* <SportNav /> */}
        </header>
    </>
}