import { useState } from "react"
import { BiUserCircle } from "react-icons/bi"
import Link from 'next/link'
import { signOut, useSession } from "next-auth/client"
import SignInButton from "./signIn"

export default function Profile({ user }) {
    const [openSettings, setOpenSettings] = useState(false)
    const [session] = useSession()
    console.log()
  return <>
      <SignInButton />
      {session && <>
          <div className=" flex items-center">
              <div className="rounded-full border-2 border-gray-300 hover:border-white group inline-block cursor-pointer text-white" onClick={() => setOpenSettings(!openSettings)}>
              {user.image && <img
                    className="rounded-full"
                    src={user?.image}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    />
              }
                  {!user.image && <BiUserCircle className="text-3xl mx-1 inline-block group-hover:text-black" /> }
                  <div className={`${openSettings ? `opacity-100` : `opacity-0`} duration-500 transition-opacity fixed top-20 shadow-lg right-1 bg-white z-10`} onMouseLeave={() => setOpenSettings(false)} >
                        <div className={`${openSettings ? `block` : `hidden`}`}>
                            <div><Link href="/user/register"><a className="list-styles block">Atualizar dados</a></Link></div>
                            <div><Link href="/user/deposit"><a className="list-styles block">Depósitos</a></Link></div>
                            <div><Link href="/user/withdraw"><a className="list-styles block">Saques</a></Link></div>
                            <div><Link href="/user/hystory-bets"><a className="list-styles block">Apostas</a></Link></div>
                            <div className="list-styles" onClick={() => signOut()}>Sair</div>
                        </div>
                  </div>
              </div>

          </div>
      </>}
  </>
}