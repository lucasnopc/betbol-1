import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ theme }) {
    return <div id="logo" className="mt-1 p-1">
        <Link href="/">
            <a>
                
                {!theme && <span className=''><Image width="150" height="35" src="/logo.png" className="hover:opacity-70 cursor-pointer" /></span>}
                {theme == 'dark' &&
                <span className=''><Image width="150" height="35" src="/logo2.png" className="hover:opacity-70 cursor-pointer" /></span>        
                }
            </a>
        </Link>
    </div>
}