import Link from 'next/link'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { BiUserCircle } from 'react-icons/bi'
import { ImSpinner } from 'react-icons/im'
import { format } from "date-fns"
import Logo from './logo'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import LogInGoogle from '../../logingoogle'
import SportNav from './sportsnav'


export default function Header(props) {
    let user = ""
    const [enterSis, setEnterSis] = useState(false)
    const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const datetoday = `${format(new Date(), `dd.MM.yy`)} - ${tzid}`
    const [session, loading] = useSession()
    const router = useRouter()
    const { register, handleSubmit, formState } = useForm();
    const { isSubmitting } = formState
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
                <div>
                    <div className={`${enterSis ? `block` : `hidden`} absolute bg-white w-screen p-4 h-screen left-0 top-0 z-10`}>
                        <span className="absolute top-3 right-2 md:right-8 font-bold text-2xl cursor-pointer" onClick={() => setEnterSis(!enterSis)}><AiOutlineCloseCircle className="text-red-500" /></span>
                        <div className="p-3 table mx-auto"><Logo /></div>
                        <h3 className="font-semibold text-xl text-center mt-5">ENTRAR</h3>
                        <p className="font-medium mt-5 mb-3 text-center text-gray-900">Escolha se deseja entrar a partir de <br /> um e-mail ou de uma conta Google.</p>
                        <form onSubmit={handleSubmit(registerUser)} className="flex">
                            <div className="flex-auto"><input {...register('email', { required: true })} type="email" name="email" placeholder="exemplo@ex.com" className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10 float-right" required /></div>
                            <div className="flex-auto"> <button disabled={isSubmitting} type="submit" className="bg-primary hover:bg-primary-ligth p-2 font-medium inline-block text-white"><ImSpinner className={`${isSubmitting ? `inline-block` : `hidden`} animate-spin`} /> Acessar</button></div>
                        </form>
                        <div className='mx-auto table'>
                        <LogInGoogle />
                        </div>
                    </div>
                    <span className="cursor-pointer bg-primary hover:bg-primary-ligth p-2 uppercase font-medium text-white text-sm block" onClick={() => setEnterSis(!enterSis)}>Entrar</span>
                </div>
            </>}
            {session && <>
                <div className="inline-block fex items-center">

                    <div className="group inline-block cursor-pointer text-white" onClick={() => setOpenSettings(!openSettings)}>
                        <span className="mt-2 inline-block font-semibold group-hover:text-black">Olá {user.user.name}</span>
                        <BiUserCircle className="text-3xl ml-3 inline-block group-hover:text-black" />
                        <div className={`${openSettings ? `block` : `hidden`} absolute top-10 right-0 bg-white z-10`} onMouseLeave={() => setOpenSettings(false)} >
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
    return <>
        <header className=" bg-green-600 border-b border-gray-200  absolute top-0 left-0 w-screen z-30 md:h-16 md:overflow-hidden">
            <div className='pl-2 md:p-3 flex items-center justify-between'>
            <Logo />
            <div id="profile">
            {session && <><div id="points" className="inline-block h-full mr-5">
                    <span className="bgicon-coin align-middle"></span>
                    <span className="ml-2 font-medium text-xs align-middle text-white">R$ {user ? Number(user.points).toFixed(2) : `0.00`}</span>
                </div>
                </>}
                <Profile />
            </div>
            </div>
        <SportNav />
        </header>
    </>
}