import Link from 'next/link'

export default function Logo () {
    return <div id="logo" className="mt-1 p-1">
                <Link href="/">
                    <a>
                        <img width="100" height="38" src="/logoblack.png" className="hover:opacity-70 cursor-pointer" />
                    </a>
                </Link>
            </div>
}