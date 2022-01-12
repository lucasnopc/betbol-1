import { useState } from "react"
import { BiUserCircle } from "react-icons/bi"
import LogInGoogle from "../../../logingoogle"
import Logo from "../logo"
import Link from 'next/link'
import { ImSpinner } from "react-icons/im"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Profile({ user }) {
    const [enterSis, setEnterSis] = useState(false)
    const [openSettings, setOpenSettings] = useState(false)
    const { register, handleSubmit, formState } = useForm();
    const [session] = useSession()
    const { isSubmitting } = formState

    const registerUser = async data => {
        await signIn('email', { email: data.email })
    }

  return <>
      {!session && <>
          <div>
              <div className={`${enterSis ? `block` : `hidden`} fixed bg-white w-screen p-4 h-screen left-0 top-0 z-40`}>
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
              <span className="cursor-pointer bg-primary hover:bg-primary-ligth p-2 uppercase font-medium text-white text-sm block mx-1" onClick={() => setEnterSis(!enterSis)}>Entrar</span>
          </div>
      </>}
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