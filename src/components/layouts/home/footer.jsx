import { format } from 'date-fns'
import Link from 'next/link'
import SignInButton from './header/signIn'


export default function Footer() {
    const today = format(new Date(), 'yyyy-MM-dd')
    const fullYear = new Date().getFullYear()
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow = format(tomorrow, 'yyyy-MM-dd')

    return <div className="absolute bottom-0 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 pt-5">
            <div>
                <h4 className="font-normal uppercase">Apostas Esportivas</h4>
                <ol className="text-gray-500">
                    <li><Link href="/viewticket"><a>Conferir bilhete</a></Link></li>
                    <li><Link href={`/date/${today}`}><a>Próximos jogos</a></Link></li>
                    <li><Link href={`/date/${tomorrow}`}><a>Jogos de amanha</a></Link></li>
                </ol>
            </div>
            <div>
                <h4 className="font-normal uppercase">BetBol</h4>
                <ol className="text-gray-500">
                    <li><Link href="/about"><a>A Betbol</a></Link></li>
                    <li><SignInButton /></li>
                </ol>
            </div>        <div>
                <h4 className="font-normal uppercase">Suporte e Regulamentos</h4>
                <ol className="text-gray-500">
                    <li><Link href="/contact"><a>Suporte</a></Link></li>
                    <li><Link href="/regulation"><a>Regulamento</a></Link></li>
                </ol>
            </div>
            <div>
                <h4 className="font-normal uppercase">Fale Conosco</h4>
                <ol className="text-gray-500">
                    <li><Link href="/contact"><a>Contato</a></Link></li>
                    <li><a href="https://www.instagram.com/sports_game.club/">Instagram</a></li>
                </ol>
            </div>
        </div>
        <div className="p-2 bg-white text-center font-semibold text-gray-400 text-sm pb-10 md:pb-0">© {fullYear} - Betbol.io / Todos os direitos reservados.</div>
    </div>
}