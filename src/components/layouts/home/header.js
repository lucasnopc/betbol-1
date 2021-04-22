import Link from 'next/link'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useForm } from "react-hook-form"
import { useRouter } from 'next/router'

export default function Header() {
    const [session, loading] = useSession()
    const router = useRouter()
    const pageSoccer = () => {
        if(router.asPath == '/') {
            return true
        }
        return false
    }
    const pageBasket = () => {
        if(router.asPath == '/sports/basket') {
            return true
        }
        return false
    }
    const Profile = () => {
        return <>
            {!session && <>
                <div className="inline-block block-bgicon-enter items-center flex">
                    <span className="bgicon-enter cursor-pointer mx-3" onClick={() => setBtnLogin(!btnLogin)}></span>
                    <div className={`${btnLogin ? 'inline-block' : 'hidden'}`}>
                        <form onSubmit={handleSubmit(registerUser)}>
                            <input {...register('email', { required: true })} type="email" name="email" placeholder="Insira seu E-mail" className="inline-block p-1 border-2 border-gray-200 focus:outline-none focus:border-gray-300 rounded-full" required />
                            <button type="submit" className="btn mt-2 inline-block">Acessar</button>
                        </form>
                    </div>
                </div>
                {/* <div className="relative group inline-block block-bgicon-register">
                    <Link href="/register"><a><span className="bgicon-register cursor-pointer mx-3"></span></a></Link>
                    <div className=" text-gray-600 rounded-md p-1 border bg-gray-100 border-gray-200 top-8 -left-5 absolute hidden group-hover:inline-block">CADASTRAR</div>
                </div> */}
            </>}
            {session && <>
                <div className="fex items-center">

                <div className="relative group inline-block block-bgicon-soccerball opacity-50 hover:opacity-100">
                    <Link href="/"><a className="flex items-center"><span className={`${pageSoccer()?`bgicon-soccer-active`: `bgicon-soccer`} cursor-pointer mx-3`}></span> <span className="font-normal text-gray-500 hidden sm:inline-block">FUTEBOL</span></a></Link>
                </div>
                <div className="relative group inline-block block-bgicon-basketball opacity-50 hover:opacity-100">
                    <Link href="/sports/basket"><a className="flex items-center"><span className={`${pageBasket()?`bgicon-basket-active`: `bgicon-basket`} cursor-pointer mx-3`}></span> <span className="font-normal text-gray-500 hidden sm:inline-block">BASQUETE</span></a></Link>
                </div>

                <div className="relative group inline-block block-bgicon-basketball opacity-50 hover:opacity-100 cursor-pointer">
                    <a className="flex items-center" onClick={() => signOut()}><span className="bgicon-enter mx-3"></span><span className="font-normal text-gray-500 hidden sm:inline-block">SAIR</span></a>
                </div>
                
                </div>
            </>}
        </>
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [btnLogin, setBtnLogin] = useState(true)
    const registerUser = async data => {
        await signIn('email', { email: data.email })
    }

    return (
        <header className="bg-white border-b-2 border-gray-200 h-16 flex items-center justify-between">
            <div id="logo" className="mt-1 ml-10">
                <Link href="/">
                    <a>
                        <img width="100" height="38" src="/logoblack.png" className="hover:opacity-70 cursor-pointer" />
                    </a>
                </Link>
            </div>
            <nav id="menu-principal">

            </nav>
            <div id="profile" className="mr-10 mt-2">
                <Profile />
            </div>

        </header>
    )
}