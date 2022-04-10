import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ theme }) {
    return <div id="logo" className="mt-1 p-1">
        <Link href="/">
            <a className="flex justify-center">
                {!theme && <Image width="120" height="28" src="/logo.png" className="hover:opacity-70 cursor-pointer" />}
                {theme == 'dark' &&
                <Image width="120" height="28" src="/logo2.png" className="hover:opacity-70 cursor-pointer" />      
                }
            </a>
        </Link>
    </div>
}