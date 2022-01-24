import Translate from "../../../utills/translate";
import Status from './status'
import useFetch from "../../../utills/useFetch"
import FullLoading from "../../fullloading"
import calcStatusFix from "../../../utills/calcStatusFix";

export default function ItemListBetHistory(props) {
  const { choiceOdd, b } = props
  const urlFix = `/api/betApi/fixture/${props.b.fix.fixture.id}/`
  const { data, error } = useFetch(urlFix)
  if (error) return console.log(error)
  if (!data) return <FullLoading />

  const res = data.res_fixture.response[0]
  const calcStatus = calcStatusFix(res, choiceOdd, b)
  return <div className={`$ p-1 grid grid-cols-3 border-b border-gray-400 m-2`}>
    <div className="mr-1 block align-middle items-center">
      <span className={` ${res.teams.home.winner ? 'text-green-600' : 'text-red-600'} font-semibold`}>{res.score.fulltime.home} {b.fix.teams.home.name}</span>
      <span className={` ${res.teams.away.winner ? 'text-green-600' : 'text-red-600'} mr-1 fl block font-semibold`}>{res.score.fulltime.away} {b.fix.teams.away.name}</span>
    </div>
    <div className="mr-1 block bg-yellow-100 border border-yellow-200 p-1">
      <span className="mr-1 block text-xs">{choiceOdd.name}</span>
      <span className="mr-1 inline-block text-right font-normal">{b.choice.odd}</span>
      <span className="mr-1 inline-block">{Translate(b.choice.value)}</span>
    </div>
    <div>
      <span className="float-right"><Status res={res} calcStatus={calcStatus} /></span>
    </div>
  </div>
}