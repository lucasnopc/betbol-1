import { useState } from "react"
import Link from 'next/link'
import { signOut, useSession } from "next-auth/client"
import SignInButton from "./signIn"

export default function Profile({ user }) {
    const [openSettings, setOpenSettings] = useState(false)
    const [session] = useSession()
    console.log("user ", user)
  return <>
      <SignInButton />
      {session && <>
          <div className=" flex items-center">
              <div className="mr-1 w-30 h-30 rounded-full border-2 border-gray-300 hover:border-white group inline-block cursor-pointer text-white" onClick={() => setOpenSettings(!openSettings)}>
                {user.image && <img className="rounded-full" src={user?.image} alt="Picture of the author" width={30} height={30}/> }
                {!user.image && <img className="rounded-full" src="/defaultuser.png" alt="Picture of the author" width={30} height={30}/> }
                  <div className={`${openSettings ? `opacity-100` : `opacity-0`} duration-500 transition-opacity fixed top-12 shadow-lg right-1 bg-white z-10`} onMouseLeave={() => setOpenSettings(false)} >
                        <div className={`${openSettings ? `block` : `hidden`}`}>
                            <div><span className="p-2 text-black font-semibold block">{session.user.email}</span></div>
                            <div><Link href="/user/register"><a className="list-styles block">Atualizar dados</a></Link></div>
                            <div><Link href="/user/deposit"><a className="list-styles block">Depósitos</a></Link></div>
                            <div><Link href="/user/withdraw"><a className="list-styles block">Saques</a></Link></div>
                            <div><Link href="/user/hystory"><a className="list-styles block">Apostas</a></Link></div>
                            <div className="list-styles" onClick={() => signOut()}>Sair</div>
                        </div>
                  </div>
              </div>

          </div>
      </>}
  </>
}