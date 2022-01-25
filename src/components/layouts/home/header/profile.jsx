import { useState } from "react"
import { BiUserCircle } from "react-icons/bi"
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/client"
import SignInButton from "./signIn"

export default function Profile({ user }) {
    const [openSettings, setOpenSettings] = useState(false)
    const [session] = useSession()

  return <>
      <SignInButton />
      {session && <>
          <div className="inline-block fex items-center">

              <div className="group inline-block cursor-pointer text-white" onClick={() => setOpenSettings(!openSettings)}>
                  <span className="mt-2 inline-block font-semibold group-hover:text-black">Olá {user.user?.name}</span>
                  <BiUserCircle className="text-3xl ml-3 inline-block group-hover:text-black" />
                  <div className={`${openSettings ? `block` : `hidden`} fixed top-14 right-0 bg-white z-10`} onMouseLeave={() => setOpenSettings(false)} >
                      <div><Link href="/register"><a className="list-styles block">Atualizar Dados</a></Link></div>
                      <div><Link href="/finances"><a className="list-styles block">Financeiro</a></Link></div>
                      <div><Link href="/user/hystory-bets"><a className="list-styles block">Historico Apostas</a></Link></div>
                      <div className="list-styles" onClick={() => signOut()}>Sair</div>
                  </div>
              </div>

          </div>
      </>}
  </>
}