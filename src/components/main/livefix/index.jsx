import { useEffect, useState } from "react"
import SelectOddsBets from "../SelectOddsBets"
import FixLive from "./fixlive"

export default function LiveFix({ live }) {
  const [bets, setBets] = useState(1)
  return <>
    <div className="flex justify-between p-2 border-b border-gray-200">
      <h2 className="page-title p-2 inline-block">Ao vivo</h2>
      <SelectOddsBets setBets={setBets} bets={bets} />
    </div>

    {live.length > 0 && live.slice(0,10).map((f, indexFix) => {
      return  <FixLive key={f.fixture.id} fix={f} bets={bets} indexFix={indexFix} />
    })}
  </>
}