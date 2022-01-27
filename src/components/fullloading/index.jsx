import Image from 'next/image'

export default function FullLoading () {
    return <div className="w-screen h-screen bg-gray-50 text-center pt-20 fixed top-0 left-0 z-50">

                                <Image width="100" height="38" src="/logo2.png" className="hover:opacity-70 cursor-pointer mx-auto " />
                                <Image width="90" height="90" src="/ico.png" className="mt-16 hover:opacity-70 cursor-pointer mx-auto animate-spin" />
                                {/* <ImSpinner9 className="text-5xl animate-spin  mx-auto text-primary p-3" /> */}

    </div>
}