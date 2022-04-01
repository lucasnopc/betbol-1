import { AiFillFacebook } from 'react-icons/ai'
import { signIn } from 'next-auth/client'

export default function LogInFacebook() {
  return <div className="group cursor-pointer p-1.5 mt-2 bg-gray-200 hover:bg-gray-600 table md:transform md:-translate-y-3.5" onClick={() => signIn('facebook')}>
    <AiFillFacebook className="text-2xl md:text-4xl inline text-blue-700 group-hover:text-white" />
    {/* <span className="font-bold text-blue-700 group-hover:text-white align-middle text-lg md:text-xl p-2">Entre com seu Facebook</span> */}
  </div>
}