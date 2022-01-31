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
  return <div className={`$ p-1 border-b border-gray-400 m-2 relative`}>
    <div className="mr-1 block">
      {b.choice.value == 'Home' && <span className={` font-bold text-xs`}>{res.teams.home.name}</span>}
      {b.choice.value == 'Away' && <span className={` font-bold text-xs`}>{res.teams.away.name}</span>}
      {b.choice.value == 'Draw' && <span className={` font-bold text-xs`}>Empate</span>}
    <span className="text-xs">{choiceOdd.name}</span>
    </div>
      <span className=" text-xs">Resultado <Status res={res} calcStatus={calcStatus} /></span>
    <span className="mr-1 inline-block text-right font-normal absolute top-0 right-0">{b.choice.odd}</span>
  </div>
}