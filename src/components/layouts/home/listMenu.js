import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import Select from 'react-select'

import { useEffect, useState } from 'react'

export default function ListMenu(props) {
    const [countries, setCountries] = useState([])
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const getCountries = async () => {
            const countriesLocal = JSON.parse(localStorage.getItem('betbol@countries'))
            if (countriesLocal) {
                if (countriesLocal.length > 0) {
                    setCountries(countriesLocal)
                }
            } else {
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
    console.log(countries)
    return <div className="bg-white shadow-md">
        <h1 onClick={e => setToggle(!toggle)} className="block-title">MENU</h1>
        <ul className={`${toggle ? `block` : `hidden md:block`} max-h-32 md:max-h-80 overflow-auto`}>
            <li >
                <Link className="inline-block" href="/">
                    <a className="p-1 hover:bg-gray-100 border-b text-green-700 font-normal hover:border-yellow-600 hover:text-yellow-600 cursor-pointer w-full block">
                        <span className="animate-ping inline-block rounded-full h-1 w-1 bg-green-700 mr-2 mb-1"></span>

                        AO VIVO
                    </a>
                </Link>
            </li>
            <li>
                <Link
                    href={{
                        pathname: `/country/BR`,
                        query: { name: `Brasil` },
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
                                query: { name: coun.name },
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