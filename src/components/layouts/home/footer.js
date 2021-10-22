import Link from 'next/link'


export default function Footer() {
    return <div className="hidden md:grid grid-cols-4 gap-4 p-3 pt-5">
        <div>
            <h4 className="font-normal">Apostas Esportivas</h4>
            <ol className="text-gray-500">
                <li><Link href="/"><a>Futebol</a></Link></li>
                <li><Link href="/"><a>Basquete</a></Link></li>
            </ol>
        </div>
        <div>
            <h4 className="font-normal">Sobre a BetBol</h4>
            <ol className="text-gray-500">
                <li><Link href="/"><a>A Betbol</a></Link></li>
                <li><Link href="/"><a>Parceiros</a></Link></li>
            </ol>
        </div>
        <div>
            <h4 className="font-normal">Suporte</h4>
            <ol className="text-gray-500">
                <li><Link href="/"><a>Fale Conosco</a></Link></li>
                <li><Link href="/"><a>Regras de Apostas</a></Link></li>
            </ol>
        </div>
        <div><h4  className="font-normal">Redes Sociais</h4>
            <ol className="text-gray-500">
                <li><Link href="/"><a>Instagram</a></Link></li>
                <li><Link href="/"><a>Facebook</a></Link></li>
            </ol>
        </div>
    </div>
}