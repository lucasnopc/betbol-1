import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { FcSettings } from 'react-icons/fc'
import { ImSpinner } from 'react-icons/im'
import { format } from "date-fns"
import { FcGoogle } from 'react-icons/fc'
import Logo from './logo'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export default function Header(props) {
    let user = ""
    const [enterSis, setEnterSis] = useState(false)
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
                <div className="z-2">
                    <div className={`${enterSis ? `block` : `hidden`} absolute bg-white w-screen p-4 h-screen left-0 top-0 z-10`}>
                        <span className="absolute top-3 right-2 md:right-8 font-bold text-2xl" onClick={() => setEnterSis(!enterSis)}><AiOutlineCloseCircle className="text-red-500" /></span>
                        <div className="p-3 table mx-auto"><Logo /></div>
                        <h3 className="font-semibold text-xl text-center mt-5">ENTRAR</h3>
                        <p className="font-medium mt-5 mb-3 text-center text-gray-900">Escolha se deseja entrar a partir de <br /> um e-mail ou de uma conta Google.</p>
                            <form onSubmit={handleSubmit(registerUser)} className="flex">
                                <div className="flex-auto"><input {...register('email', { required: true })} type="email" name="email" placeholder="exemplo@ex.com" className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10 float-right" required /></div>
                                <div className="flex-auto"> <button disabled={isSubmitting} type="submit" className="bg-primary hover:bg-primary-ligth p-2 font-medium inline-block text-white"><ImSpinner className={`${isSubmitting ? `inline-block` : `hidden`} animate-spin`} /> Acessar</button></div>
                            </form>

                        <div className="group cursor-pointer p-1.5 mt-10 bg-gray-200 hover:bg-gray-100 table md:transform md:-translate-y-3.5 mx-auto" onClick={() => signIn('google')}>
                            <FcGoogle className="text-2xl inline" />
                            <span className="font-medium text-gray-900 p-2">Entrar com uma conta Google</span>

                        </div>
                    </div>
                    <span className="cursor-pointer bg-primary hover:bg-primary-ligth p-2 uppercase font-medium text-white text-sm block mt-1.5" onClick={() => setEnterSis(!enterSis)}>Entrar</span>
                </div>
            </>}
            {session && <>
                <div className="fex items-center">

                    <div className="relative group inline-block block-bgicon-basketball opacity-50 hover:opacity-100 cursor-pointer">
                        <FcSettings className="text-3xl ml-3" onClick={() => setOpenSettings(!openSettings)} />
                        <div className={`${openSettings ? `block` : `hidden`} border border-gray-300 text-right absolute right-0 w-60 z-10 bg-white`} onMouseLeave={() => setOpenSettings(false)} >
                            <div><Link href="/register"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Atualizar Dados</a></Link></div>
                            <div><Link href="/finances"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Financeiro</a></Link></div>
                            <div><Link href="/user/hystory-bets"><a className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white border-b border-gray-300 block">Historico Apostas</a></Link></div>
                            <div className="p-2 hover:bg-gray-700 font-normal text-gray-900 hover:text-white" onClick={() => signOut()}>Sair</div>
                        </div>
                    </div>

                </div>
            </>}
        </>
    }


    return <>
        {session && <>
            {/* <div id="logado" className="py-1 text-sm bg-black border-b text-gray-200 shadow-md flex justify-between px-5">
                <span className="font-medium hidden md:inline-block">{user ? user.email : ""}</span>
                <span className="font-medium">{datetoday}</span>
                <div id="points" className="inline-block h-full items-center">
                    <span className="bgicon-coin"></span>
                    <span className="ml-2 font-medium">R$ {user ? Number(user.points).toFixed(2) : `0.00`}</span>
                </div>
            </div> */}
        </>}
        <header className="pl-4 bg-white border-b border-gray-200 shadow-xl px-1 pb-1.5 flex items-center justify-between">
            <Logo />
            <div id="profile" className="mr-10">
                <Profile />
            </div>

        </header>

    </>
}