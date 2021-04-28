export default function ValorFinal(listBetState) {
    let vf = 0
    for(let i = 0; i < listBetState.length; i++) {
        vf += Number(listBetState[i].value)
    }
    return vf
}