
export default function Status(props) {
  if (props.res.fixture.status.short != 'FT') {
    return <>Espere o jogo acabar</>
  }
  return <>
{props.calcStatus &&
  <span className=" font-bold">
    Ganhou
  </span>
}
{!props.calcStatus &&
  <span className="font-bold">
    Perdeu
  </span>
}
  </>
}