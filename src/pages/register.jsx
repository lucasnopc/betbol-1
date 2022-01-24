import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InputMask from "react-input-mask"
import { useForm } from "react-hook-form"
import { useState, useEffect } from 'react'
import { getSession, } from 'next-auth/client'
import axios from 'axios'
import getUser from '../utills/getUser'
import { useRouter } from 'next/router'


export default function register(props) {
  const [popularForm, setPopularForm] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const router = useRouter()
  const [getStateRegister, setStateRegister] = useState({
    name: "",
    lastname: "",
    tel: "",
    cpf: "",
    cep: "",
    andress: "",
    numhouse: "",
  })

  useEffect(() => {
    setPopularForm(true)
    setValue('cep', getStateRegister.cep)
    if (props.profile) {
      setStateRegister(props.profile)
    }
  })

  const Andress = () => {
    if (getStateRegister.andress != "") return <>
      <div>
        <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Logradouro</div>
        <input
          {...register('logradouro', { required: true })}
          name="logradouro"
          type="text"
          placeholder="Mike"
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
          defaultValue={getStateRegister.andress.logradouro}
        />
      </div>

      <div>
        <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Bairro</div>
        <input
          {...register('bairro', { required: true })}
          name="bairro"
          type="text"
          placeholder="Mike"
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
          defaultValue={getStateRegister.andress.bairro}
        />
      </div>

      <div>
        <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Localidade</div>
        <input
          {...register('localidade', { required: true })}
          name="localidade"
          type="text"
          placeholder="Mike"
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
          defaultValue={getStateRegister.andress.localidade}
        />
      </div>

      <div>
        <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Estado</div>
        <input
          {...register('uf', { required: true })}
          name="uf"
          type="text"
          placeholder="Mike"
          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
          defaultValue={getStateRegister.andress.uf}
        />
      </div>
    </>
    return ""
  }
  const getAndress = async (data) => {
    const cep = data.target.value.replace(/\D/g, '')
    if (cep.length == 8) {
      const andress = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      if (andress.data.erro == true) {
        data.target.value = null
        data.target.blur()
        return
      }
      const duplicateDataDefault = { ...getStateRegister }
      duplicateDataDefault.andress = andress.data
      duplicateDataDefault.cep = cep
      setStateRegister(duplicateDataDefault)
    }
  }

  const onSubmit = async data => {
    const sendData = await axios.post('/api/register', { data })
    if(sendData.status == 203) {
      alert('Dados Atualizados com Sucesso')
      router.push('/')
    }
  }
  const FormRegister = () => {
    if (popularForm) {
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-sm font-semibold text-gray-700 tracking-wide">Insira seu E-mail</div>
                  email: {props.session.user.email}
          </div>
          <div>
            <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Nome</div>
            <input
              {...register('name', { required: true })}
              name="name"
              type="text"
              placeholder="Mike"
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.name}
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700 tracking-wide">Sobrenome</div>
            <input
              {...register('lastname', { required: true })}
              name="lastname"
              type="text"
              placeholder="Adams Silva"
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.lastname}
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700 tracking-wide">Telefone</div>
            <InputMask
              mask="\+\5\5 (99) 99999-9999"
              {...register('tel', { required: true })}
              placeholder="+55 (99) 99999-9999"
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.tel}
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700 tracking-wide">CPF</div>
            <InputMask
              mask="999.999.999-99"
              {...register('cpf', { required: true })}
              placeholder="123.456.789-10"
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.cpf}
            />
          </div>
          <div>
            <h2 className="mt-5 font-semibold uppercase text-gray-400">Endereço</h2>
            <div className="text-sm font-semibold text-gray-700 tracking-wide">CEP</div>
            <InputMask
              mask="99999-999"
              {...register('cep', { required: true })}
              placeholder="12345-678"
              onChange={getAndress}
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.cep}
            />
          </div>
          <Andress />
          <div>
            <div className="mt-2 text-sm font-semibold text-gray-700 tracking-wide">Numero</div>
            <input
              {...register('numhouse', { required: true })}
              name="numhouse"
              type="number"
              placeholder="30"
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-primary-ligth"
              defaultValue={getStateRegister.numhouse}
            />
          </div>
          <div>
          </div>
          <div className="mt-10">
            <button className="btn p-4 w-full">
              Atualizar Dados
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
        <title>Atualize seus dados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:h-screen p b-5 overflow-scroll">
          <div className="pt-10 bg-gray-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <div>
                <Link href="/">
                  <a>
                    <Image width="100" height="100" src="/logo.png" className="hover:opacity-70 cursor-pointer" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-lg font-semibold text-gray-600 font-display lg:text-left xl:text-2xl">Atualizar dados</h2>
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
export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const user = await getUser(session.user.email)
  if (user.user) {
    const profile = {
      name: user.user.name,
      lastname: user.user.lastname,
      tel: user.user.tel,
      cpf: user.user.cpf,
      cep: user.user.cep,
      andress: {
        logradouro: user.user.logradouro,
        bairro: user.user.bairro,
        localidade: user.user.localidade,
        uf: user.user.uf
      },
      numhouse: user.user.numhouse,
    }


    return {
      props: { session, profile }
    }
  }
  return {
    props: { session }
  }
}