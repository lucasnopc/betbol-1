
export default function Status(props) {
  if (props.res.fixture.status.short != 'FT') {
    return <>Espere o jogo acabar</>
  }
  return <>
{props.calcStatus &&
  <span className="text-green-500 font-bold">
    Ganhou
  </span>
}
{!props.calcStatus &&
  <span className="text-red-500 font-bold">
    Perdeu
  </span>
}
  </>
}