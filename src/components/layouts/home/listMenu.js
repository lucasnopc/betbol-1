import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect, useState } from 'react'

export default function ListMenu(props) {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const getCountries = async () => {
            const countriesLocal = JSON.parse(localStorage.getItem('betbol@countries'))
            if(countriesLocal.lengthv > 0) {
                setCountries(countriesLocal)
            }else {
                const urlGetCountries = `/api/getCountryes`
                const data = await axios.get(urlGetCountries)
                const countriesData = await data.data
                setCountries(countriesData.countries)
            }
        }
        getCountries()
    }, [])
    useEffect(() => {
        localStorage.setItem('betbol@countries', JSON.stringify(countries))
    }, [countries])
    return <div className="bg-white shadow-md">
        <h1 className="block-title">DESTAQUES</h1>
        <ul className="max-h-80 overflow-auto">
            <li >
                <Link href="/">
                    <a  className="p-1 hover:bg-gray-100 border-b hover:border-yellow-600 hover:text-yellow-600 cursor-pointer w-full block">AO VIVO </a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: `/country/BR`,
                        query: {name: `Brasil`},
                      }}>
                    <a className="p-1 font-normal hover:bg-gray-100 border-b hover:border-yellow-600 cursor-pointer w-full block">
                        <Image src="https://media.api-sports.io/flags/br.svg" width="15" height="15" className="p-1" />
                        <span className="ml-2">Brasil</span>
                    </a>
                </Link>
            </li>
            {countries && countries.map((coun => {
                return <li key={coun.name}>
                    {coun.code &&
                        <Link
                            href={{
                                pathname: `/country/${coun.code}`,
                                query: {name: coun.name},
                              }}>
                                <a className="p-1 font-normal hover:bg-gray-100 border-b hover:border-yellow-600 cursor-pointer w-full block">
                                {coun.flag && <Image src={coun.flag} width="15" height="15" className="p-1" />}
                                <span className="ml-2">{coun.name}</span>
                            </a></Link>}
                </li>
            }))}
        </ul>
    </div>
}