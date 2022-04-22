import { signIn, useSession } from "next-auth/client"
import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Logo from "../logo"
import LogInGoogle from "../../../logingoogle"
import { ImSpinner } from "react-icons/im"
import { useForm } from "react-hook-form"
import LogInFacebook from "../../../loginfacebook"

export default function SignInButton () {
  const [session] = useSession()
  const [enterSis, setEnterSis] = useState(false)
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState

  const registerUser = async data => {
    await signIn('email', { email: data.email })
}

  return <>
  {!session && <>
          <div>
              <div className={`${enterSis ? `block` : `hidden`} fixed bg-white w-screen p-4 h-screen left-0 top-0 z-40`}>
                  <span className="absolute top-3 right-2 md:right-8 font-bold text-2xl cursor-pointer" onClick={() => setEnterSis(!enterSis)}><AiOutlineCloseCircle className="text-red-500" /></span>
                  <div className="p-3 table mx-auto"><Logo theme={`dark`} /></div>
                  <h3 className="font-semibold text-xl text-center mt-5">ENTRAR</h3>
                  <p className="font-medium mt-5 mb-3 text-center text-gray-900">Escolha se deseja entrar a partir de <br /> um e-mail ou de uma conta Google.</p>
                  <form onSubmit={handleSubmit(registerUser)} className="flex">
                      <div className="flex-auto"><input {...register('email', { required: true })} type="email" name="email" placeholder="exemplo@hotmail.com" className="inline-block p-1.5 focus:outline-none bg-gray-200 h-10 float-right" required /></div>
                      <div className="flex-auto"> <button disabled={isSubmitting} type="submit" className="bg-primary hover:bg-primary-ligth p-2 font-medium inline-block text-white"><ImSpinner className={`${isSubmitting ? `inline-block` : `hidden`} animate-spin`} /> Acessar</button></div>
                  </form>
                  <div className='mx-auto table'>
                  <LogInGoogle />
                  {/* <LogInFacebook /> */}

                  </div>
              </div>
              <span className="cursor-pointer p-1 uppercase font-semibold transition-colors hover:text-secundary-dark text-primary bg-white text-sm block-inline mx-1" onClick={() => setEnterSis(!enterSis)}>Entrar</span>
              <span className="cursor-pointer p-1 uppercase font-semibold transition-colors hover:text-secundary-dark text-primary bg-white text-sm block-inline mx-1" onClick={() => setEnterSis(!enterSis)}>Cadastrar</span>
          </div>
      </>}
  </>
}