import { useEffect, useState } from "react"
import translateBetsName from "../../utills/translates/translate-bets-name"
import Button from "../main/Button"

export default function MultipleBetsBlock({ oddList = [], arrayIds = [], title = "", fix }) {
  const [bets, setBets] = useState(false)
  const [values, setValues] = useState(false)
  const [number_max_list_odds, set_number_max_list_odds] = useState(5)
  useEffect(() => {
    const oddListOnlyArrayIds = []
    for (let odd of oddList) {
      for (let id of arrayIds) {
        if (odd.id == id) {
          oddListOnlyArrayIds.push(odd)
        }
      }
    }
    if(oddListOnlyArrayIds.length > 0) {
      setBets(oddListOnlyArrayIds)
      setValues(oddListOnlyArrayIds[0])
    }
  }, [])
  console.log('values', values)
  if(!bets) return <></>
  return <div className="border border-gray-300 bg-gray-50 m-3 mr-4 shadow-lg">
    {bets && <>
      {bets.length > 1 && <h1 className="font-semibold text-center p-1 uppercase">{translateBetsName(bets[0].id)}</h1>}
      <div className="flex justify-between divide-x divide-gray-300">
        {bets.map((b, i) => {
          return <div key={b.id} onClick={() => {
            setValues(b) 
            set_number_max_list_odds(5)
          }} className={`${b.id == values.id ? `bg-primary text-white` : ` bg-gray-200 text-gray-700`} p-1 text-center font-semibold uppercase w-full text-xs`}>{translateBetsName(b.id)}</div>
        })}
      </div>
      <div>
        {values && <>
          <div className="flex flex-col divide-y flex-wrap">
            {values.values.slice(0, number_max_list_odds).map((val, i) => {
              return <div key={val.value + val.odd} className="gap-0 h-full">
                <Button val={val} fix={fix} bets={values.id} value={true} />
              </div>
            })}
            {values.values.length > number_max_list_odds && <div onClick={()=> set_number_max_list_odds(number_max_list_odds + 5)} className="gap-0 h-full text-gray-700 uppercase bg-gray-200 hover:bg-primary hover:text-white cursor-pointer text-center font-semibold p-1">Ver mais</div>}
          </div>
        </>}
      </div>
    </>}
  </div>
}