import { useState } from 'react'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { format } from "date-fns"
import Logo from '../logo'
import SportNav from '../sportsnav'
import Profile from './profile'

export default function Header(props) {
    let user = ""
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const datetoday = `${format(new Date(), `dd.MM.yy`)} - ${tzid}`
    const [session] = useSession()
    const router = useRouter()
   
    if (props.userString) {
        user = JSON.parse(props.userString)
    }

    return <>
        <header className=" bg-green-600 border-b border-gray-200  absolute top-0 left-0 w-full z-30 md:h-24 md:overflow-hidden">
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
        <SportNav />
        </header>
    </>
}