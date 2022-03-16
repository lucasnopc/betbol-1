import useFetch from "../../../../utills/useFetch"
import calcStatusFix from "../../../../utills/calcStatusFix";
import Image from 'next/image'

export default function ItemListBetHistory({ choiceOdd, b, toggle }) {
  const urlFix = `/api/betApi/fixture/${b.fix.fixture.id}/`
  const { data, error } = useFetch(urlFix)
  if (error) return console.log(error)
  if (!data) return <div className="bg-white absolute flex items-center justify-center top-0 left-0  p-2 w-full h-40 uppercase font-semibold text-center">
    <Image width="20" height="20" src="/ico.png" className="animate-spin" />
  </div>

  const res = data.res_fixture.response[0]
  const calcStatus = calcStatusFix(res, b)
  return <div className={`${toggle ? `block` : `hidden`} p-1 border-b border-gray-400 relative flex justify-between`}>
    <div className="mr-1 block">
      <span className=" text-xs block">Resultado {b.status}</span>
      {b.choice.value == 'Home' && <span className={` font-bold text-xs mr-1`}>{res.teams.home.name}</span>}
      {b.choice.value == 'Away' && <span className={` font-bold text-xs mr-1`}>{res.teams.away.name}</span>}
      {b.choice.value == 'Draw' && <span className={` font-bold text-xs mr-1`}>Empate</span>}
      <div>
        <span className="text-xs">{choiceOdd.name}</span><br />
        <span className={` text-xs mr-1`}>{res.teams.home.name}</span>
        <span className={` text-xs mr-1`}>{res.score.fulltime.home}</span>
        <span className={`font-bold text-xs mr-1`}>xs</span>
        <span className={` text-xs mr-1`}>{res.score.fulltime.away}</span>
        <span className={`text-xs mr-1`}>{res.teams.away.name}</span>
      </div>
    </div>
    <span className="mr-1 inline-block text-right font-normal">{b.choice.odd}</span>
  </div>
}