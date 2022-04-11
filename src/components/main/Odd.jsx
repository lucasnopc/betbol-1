import Button from "./Button"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Odd({ bets, fix, odds, nVals = null }) {
    const id = fix.fixture.id
    const [values, setValues] = useState([])
    useEffect(() => setValues(odds?.values), [odds])
    return <>
        <div className={`flex flex-nowrap md:flex-none h-full border-l border-gray-200 divide-x divide-white`}>
            {values && values.length <= 3 && <>
                {values.map((val, i) => {
                    return <div key={val.value} className="flex-1 gap-0 h-full">
                        <Button key={i} val={val} fix={fix} bets={bets} />
                    </div>
                })}
                {nVals && <div className="md:w-20 flex-1 gap-0 h-full">
                    <Link href={`/fix/${id}`} ><a className=" pr-1 hover:bg-gray-200 rounded-lg text-blue-600 px-1.5 py-3 cursor-pointer active:outline-none focus:outline-none flex items-center justify-center min-w-full h-full text-base font-bold">+{nVals}</a></Link>
                </div>}
            </>
            }

            {values && values.length >= 4 &&
                <div className="w-full flex items-center justify-center">
                    <Link href={`/fix/${id}`} >
                        <a className="bg-primary hover:bg-primary-ligth p-2 mx-3 font-semibold text-white text-xs uppercase align-middle">
                            Todas Opções {nVals && <>+{nVals}</>}
                        </a>
                    </Link>
                </div>
            }
            {!values &&
                <div className="w-full flex items-center justify-center">
                    <span className="text-center text-gray-300 uppercase font-semibold">Indisponível</span>
                </div>
            }
        </div>
    </>
}