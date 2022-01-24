import { useSession } from 'next-auth/client'
import Logo from '../logo'
import Profile from './profile'

export default function Header(props) {
    let user = ""
    const [session] = useSession()
   
    if (props.userString) {
        user = JSON.parse(props.userString)
    }

    return <>
        <header className=" bg-green-600 border-b border-gray-200 w-full z-30 md:overflow-hidden">
            <div className='md:pl-2 flex items-center justify-between'>
            <Logo />
            <div id="profile">
            {session && <><div id="points" className="inline-block h-full mr-5">
                    <span className="bgicon-coin align-middle"></span>
                    <span className="ml-2 font-medium text-xs align-middle text-white">R$ {user ? Number(user.points).toFixed(2) : `0.00`}</span>
                </div>
                </>}
                <Profile user={user} />
            </div>
            </div>
        {/* <SportNav /> */}
        </header>
    </>
}