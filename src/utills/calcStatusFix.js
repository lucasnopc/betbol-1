export default function calcStatusFix(atualFix, choice, bet) {
    // console.log('calc status fix ', atualFix, choice, bet)
    const choiceId = choice.id
    let status
    switch (choiceId) {
        case 1:
            let winner
            if (atualFix.teams.home) {
                winner = "Home"
            }
            if (atualFix.teams.away) {
                winner = "Away"
            }
            console.log(winner, bet.choice.value)
            if (bet.choice.value == winner) {
                return true
            } else return false
            break
        default:
            status = false
            break
    }







    // let choiceName
    // if (score.fulltime.home > score.fulltime.away) {
    //     choiceName = "Home"
    // } else {
    //     if (score.fulltime.home == score.fulltime.away) {
    //         choiceName = "Empate"
    //     } else {
    //         choiceName = "Draw"
    //     }
    // }
    // if (choiceOdd.id == 1) {
    //     return true
    // }
    return false
}