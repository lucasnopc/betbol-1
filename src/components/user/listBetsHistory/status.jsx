
export default function Status(props) {
  const short = props.res.fixture.status.short
  if (short != 'FT' && short != 'PEN' && short != 'AET') {
    return <>Espere o jogo acabar</>
  }
  return <>
  {props.calcStatus}
{props.calcStatus === true &&
  <span className=" font-bold">
    Ganhou
  </span>
}
{props.calcStatus === false &&
  <span className="font-bold">
    Perdeu 
  </span>
}
  </>
}