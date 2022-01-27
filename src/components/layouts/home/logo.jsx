import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return <div id="logo" className="mt-1 p-1">
        <Link href="/">
            <a>
                <span className=''><Image width="150" height="35" src="/logo.png" className="hover:opacity-70 cursor-pointer" /></span>
                {/* <span className='hidden md:inline-block'><Image width="150" height="35" src="/logo2.png" className="hover:opacity-70 cursor-pointer" /></span> */}
            </a>
        </Link>
    </div>
}