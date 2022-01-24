import { ImSpinner9 } from 'react-icons/im'

export default function FullLoading () {
    return <div className="w-screen h-screen bg-gray-50 text-center pt-20 fixed top-0 left-0 z-50">

                                <img width="100" height="38" src="/logo.png" className="hover:opacity-70 cursor-pointer mx-auto " />
                                <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" />

    </div>
}