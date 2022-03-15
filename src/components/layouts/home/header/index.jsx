import { useSession } from 'next-auth/client'
import Logo from '../logo'
import Profile from './profile'
import HeaderAdmin from '../../../layoutAdmin/headeradmin'
import Link from 'next/link'

export default function Header({userString: user}) {
    const [session] = useSession()

    return <>
    {user?.nivel == 5 &&
        <div className=''>
            <HeaderAdmin />
        </div>
    }
        <header className={`${user?.nivel == 5 ? `mt-6` : ``} bg-green-600 border-b border-green-500 w-full z-10 md:overflow-hidden`}>
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