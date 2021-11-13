import { FcSynchronize } from 'react-icons/fc'

export default function FullLoading () {
    return <div className="w-screen h-screen bg-yellow-50 text-center pt-20">

                                <img width="100" height="38" src="/logoblack.png" className="hover:opacity-70 cursor-pointer mx-auto " />
                                <FcSynchronize className="text-5xl animate-spin  mx-auto text-yellow-400 p-3" />

    </div>
}