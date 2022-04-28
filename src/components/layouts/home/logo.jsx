import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ theme }) {
    return <div id="logo" className="p-2">
        <Link href="/">
            <a className="flex justify-center">
                {!theme && <Image width="150" height="17" src="/logo.png" className="hover:opacity-70 cursor-pointer" />}
                {theme == 'dark' &&
                <Image width="150" height="17" src="/logo2.png" className="hover:opacity-70 cursor-pointer" />      
                }
            </a>
        </Link>
    </div>
}