import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/client'

export default function LogInGoogle() {
  return <div className="group cursor-pointer p-1.5 mt-5 bg-gray-200 hover:bg-gray-100 table md:transform md:-translate-y-3.5" onClick={() => signIn('google')}>
    <FcGoogle className="text-2xl inline" />
    <span className="font-medium text-gray-900 p-2">Entre conta sua conta Google</span>

  </div>
}