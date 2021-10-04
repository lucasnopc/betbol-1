import { useStore } from '../../../context/store'
import getLeagues from '../../../utills/getLeagues'
import Link from 'next/link'

export default function ListMenu(props) {

    return <div className="bg-white shadow-md">
        <h1 className="block-title">DESTAQUES</h1>
        <ul>
            <li className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
            <Link href="/"> AO VIVO</Link>
            </li>
            <li className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
                <Link href="/country/BR"> BRASIL</Link>
            </li>
            <li className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
            <Link href="/country/world"> INTERNACIONAL</Link> 
            </li>
            <li className="p-1 font-normal hover:bg-gray-200  cursor-pointer">
            <Link href="/country/US"> AMERICANO</Link> 
                
            </li>
            {/* <li  onClick={() => { ChangeLeagues() }}  className="p-1 font-normal bg-gray-100 hover:bg-blue-100 hover:text-blue-700 cursor-pointer">OUTROS</li> */}
        </ul>
    </div>
}