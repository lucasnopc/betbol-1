import Link from 'next/link'

export default function Logo () {
    return <div id="logo" className="mt-1 p-1">
                <Link href="/">
                    <a>
                        <img width="150" height="50" src="/logo2.png" className="hover:opacity-70 cursor-pointer" />
                    </a>
                </Link>
            </div>
}