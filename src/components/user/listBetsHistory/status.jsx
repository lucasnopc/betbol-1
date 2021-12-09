
export default function Status(props) {
  if ('res', props.res.fixture.status.short != 'FT') {
    return <>Espere o jogo acabar</>
  }
  return <div>
{props.calcStatus &&
  <span className="bg-green-500 text-white font-bold p-2">
    Ganhou
  </span>
}
{!props.calcStatus &&
  <span className="bg-gray-500 p-2">
    Não foi desta vez, tente novamente.
  </span>
}
  </div>
}