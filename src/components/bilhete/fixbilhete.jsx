import calcStatusFix from "../../utills/calcStatusFix"
import { oddBets } from "../../utills/oddBets"
import useFetch from "../../utills/useFetch"
import FullLoading from "../fullloading"

export default function FixBilhete( { m }) {
  const urlFix = `/api/betApi/fixture/${m.fix.fixture.id}/`
  const { data, error } = useFetch(urlFix)
  if (error) return console.log(error)
  if (!data) return <FullLoading />
  const atualfix = data.res_fixture.response[0]
  const oddb = oddBets.find(o => o.id == m.choice.betsChoice)
  const calcStatus = calcStatusFix(atualfix, m)

  return <div className='text-sm border-t border-gray-500 flex flex-col'>
    <span><span className='font-semibold'>Jogo: </span>{m.fix.teams.home.name} x {m.fix.teams.away.name}</span>
    <span><span className='font-semibold'>Escolha: </span>{m.choice.value}</span>
    <span><span className='font-semibold'>Cotação: </span>{m.choice.odd}</span>
    <span><span className='font-semibold'>Tipo :</span>{oddb.name}</span>
  </div>
}