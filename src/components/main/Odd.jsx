import Button from "./Button"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Odd({ bets, fix, odds, nVals = null, orientation = "right", squadWidth }) {

    const id = fix.fixture.id
    const [values, setValues] = useState([])
    useEffect(() => setValues(odds?.values), [odds])
    return <>
        <div className={`text-${orientation} h-full border-gray-200 divide-x-2 py-1 mr-2 divide-white`}>
            {values && values.length <= 3 && <>
                {values.map((val, i) => {
                    return <div key={val.value} className="inline-block">
                        <Button key={i} val={val} fix={fix} bets={bets} squadWidth={squadWidth} />
                    </div>
                })}
                {nVals && <div className="inline-block">
                    <Link href={`/fix/${id}`} ><a className=" rounded-lg w-12 h-12 pr-1 text-primary cursor-pointer active:outline-none focus:outline-none flex items-center justify-center min-w-full bg-gray-200 hover:bg-gray-300 text-xs font-normal">+{nVals}</a></Link>
                </div>}
            </>
            }

            {values && values.length >= 4 &&
                <div className="w-full flex items-center justify-center">
                    <Link href={`/fix/${id}`} >
                        <a className="bg-primary hover:bg-primary-ligth p-2 mx-3 font-normal text-white text-xs uppercase align-middle">
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