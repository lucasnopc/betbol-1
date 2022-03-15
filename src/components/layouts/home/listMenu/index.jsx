import Link from 'next/link'
import { BiFootball } from 'react-icons/bi'
import { useState } from 'react'
import { format } from 'date-fns'
import { bestLeagues } from '../bestLeagues'
import Search from './search'

export default function ListMenu(props) {
    const [toggle, setToggle] = useState(false)
    const today = format(new Date(), 'yyyy-MM-dd')
    const todayYear = new Date().getFullYear()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = format(tomorrow, 'yyyy-MM-dd')
    
    return <div>
        <div onClick={() => setToggle(!toggle)} className="p-1">
            <BiFootball className="inline-block" />
            <span className="inline-block text-xs ml-2 page-title">Buscar Jogos</span>
        </div>
        <div className="shadow-md" style={{
        height: toggle ? window.innerHeight - 50 : 0
    }}>
        
        <div className={`${toggle ? `block` : `hidden md:block`} bg-gray-50`}>
            <Search />
            <ul>
                {/* <li>
                    <Link className="inline-block" href="/">
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Ao Vivo</span>
                        </a>
                    </Link>
                </li> */}
                <li >
                    <Link className="inline-block" href={`/date/${today}`}>
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Próximos Jogos</span>
                        </a>
                    </Link>
                </li>
                <li >
                    <Link className="inline-block" href={`/date/${tomorrow}`}>
                        <a className="list-styles block pl-3">
                            <span className="inline-block font-medium">Jogos de Amanhã</span>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul>
                {bestLeagues.map(l => <li key={l.id}><Link href={`/league/${l.id}?year=${todayYear}&name=${l.name}`}><a className="list-styles block pl-3">{l.name}</a></Link></li>
                )}
            </ul>
        </div>
    </div>
    </div>
}