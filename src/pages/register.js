import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InputMask from "react-input-mask"
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/client'

export default function register() {
  const [popularForm, setPopularForm] = useState(false)
  useEffect(() => {
    setPopularForm(true)
  })
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async data => {
      await signIn('email', { email: data.email })
    }
  const FormRegister = () => {
    if(popularForm) {
      return (
        <form  onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="text-sm font-semibold text-gray-700 tracking-wide">Insira seu E-mail</div>
                  <input
                    {...register('email', { required: true})} 
                    name="email"
                    type="email"
                    placeholder="mike@gmail.com"
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                  />
                </div>
                {/* <div>
                  <div className="text-sm font-semibold text-gray-700 tracking-wide">Nome</div>
                  <input
                  {...register('name', { required: true})} 
                    name="name"
                    type="text"
                    placeholder="Mike"
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 tracking-wide">Sobrenome</div>
                  <input
                  {...register('lastname', { required: true})} 
                    name="lastname"
                    type="text"
                    placeholder="Adams Silva"
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 tracking-wide">Telefone</div>
                  <InputMask  
                  mask="\+\5\5 (99) 99999-9999" 
                  {...register('tel', { required: true})} 
                  placeholder="+55 (99) 99999-9999"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                  />
                </div> */}
                <div className="mt-10">
                  <button className="btn p-4 w-full">
                    Cadastrar
                                </button>
                </div>
              </form>
      )
    }
    return ""
  }
  return (
    <>
      <Head>
        <title>Cadastre-se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="pt-10 bg-yellow-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
              <Link href="/">
                <a>
                    <Image width="100" height="38" src="/logoblack.png" className="hover:opacity-70 cursor-pointer" />
                </a>
            </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-gray-600 font-display lg:text-left xl:text-5xl">Cadastre-se</h2>
            <div className="mt-12">
              <FormRegister />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-center bg-register flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">

          </div>
        </div>
      </div>
    </>
  )
}
