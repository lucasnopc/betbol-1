import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { FcSettings } from 'react-icons/fc'
import { ImSpinner } from 'react-icons/im'
import { format } from "date-fns"


export default function Header(props) {
    let user = ""
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const datetoday = `${format(new Date(), `dd.MM.yy`)} - ${tzid}`
    const [session, loading] = useSession()
    const router = useRouter()
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState
    const [btnLogin, setBtnLogin] = useState(true)
    const registerUser = async data => {
        await signIn('email', { email: data.email })
    }
    if (props.userString) {
        user = JSON.parse(props.userString)
    }

    const Profile = () => {
        const [openSettings, setOpenSettings] = useState(false)
        return <>
            {!session && <>
                <div className="block-bgicon-enter items-center flex">
                    <div className={`${btnLogin ? 'hidden md:inline-block' : 'inline-block'}`}>
                        <form onSubmit={handleSubmit(registerUser)} className="absolute md:static z-10 bg-white top-10 right-0 p-2 grid grid-cols-12">
                            <div className="col-start-1 col-span-8"><input {...register('email', { required: true })} type="email" name="email" placeholder="Insira seu E-mail" className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10 float-right" required /></div>
                           <div className="col-start-9 col-span-4"> <button disabled={isSubmitting} type="submit" className="btn inline-block h-10"><ImSpinner className={`${isSubmitting ? `inline-block` : `hidden`} animate-spin`} /> Acessar</button></div>
                        </form>
                    </div>
                    <span className="cursor-pointer bg-yellow-500 p-1 uppercase font-medium text-white text-sm md:hidden mt-1" onClick={() => setBtnLogin(!btnLogin)}>Entrar</span>
                </div>
            </>}
            {session && <>
                <div className="fex items-center">

                    <div className="relative group inline-block block-bgicon-basketball opacity-50 hover:opacity-100 cursor-pointer">
                        <FcSettings className="text-3xl ml-3" onClick={() => setOpenSettings(!openSettings)} />
                        <div className={`${openSettings ? `block` : `hidden`} border border-gray-300 text-right absolute right-0 w-60 z-10 bg-white`} onMouseLeave={() => setOpenSettings(false)} >
                            <div><Link href="/register"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Atualizar Dados</a></Link></div>
                            <div><Link href="/finances"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Financeiro</a></Link></div>
                            <div><Link href="/myBetsHistory"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Historico Apostas</a></Link></div>
                            <div className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white" onClick={() => signOut()}>Sair</div>
                        </div>
                    </div>

                </div>
            </>}
        </>
    }


    return <>
    {session && <>
        <div id="logado" className="py-1 text-sm bg-gray-600 border-b text-gray-200 shadow-md flex justify-between px-5">
            <span className="font-medium hidden md:inline-block">{user ? user.email: ""}</span>
        <span className="font-medium">{datetoday}</span>
            <div id="points" className="inline-block h-full items-center">
                <span className="bgicon-coin"></span>
                <span className="ml-2 font-medium">R$ {user ? Number(user.points).toFixed(2) : `0.00`}</span>
            </div>
        </div>
        </>}
        <header className="bg-white border-b border-gray-200 shadow-xl px-1 pb-1.5 flex items-center justify-between">
            <div id="logo" className="mt-1 ml-10">
                <Link href="/">
                    <a>
                        <img width="100" height="38" src="/logoblack.png" className="hover:opacity-70 cursor-pointer" />
                    </a>
                </Link>
            </div>
            <nav id="menu-principal">

            </nav>
            <div id="profile" className="mr-10">
                <Profile />
            </div>

        </header>
        
    </>
}