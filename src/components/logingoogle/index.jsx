import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/client'

export default function LogInGoogle() {
  return <div className="group cursor-pointer p-1.5 mt-5 bg-gray-200 hover:bg-gray-600 table md:transform md:-translate-y-3.5" onClick={() => signIn('google')}>
    <FcGoogle className="text-2xl md:text-4xl inline" />
    <span className="font-bold text-gray-600 group-hover:text-white align-middle text-lg md:text-xl p-2">Entre com sua conta Google</span>

  </div>
}