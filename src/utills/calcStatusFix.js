export default function calcStatusFix(atualFix, bet) {
    // console.log('calc status fix ', atualFix, choice, bet)
    const choiceId = bet.choice.id
    let status
    let winner
    switch (choiceId) {
        case 3:
            const scoreSegoundTimeHome = atualFix.score.fulltime.home - atualFix.score.halftime.home
            const scoreSegoundTimeAway = atualFix.score.fulltime.away - atualFix.score.halftime.away
            if (scoreSegoundTimeHome > scoreSegoundTimeAway) {
                winner = "Home"
            } else {
                winner = "Away"
            }
            if (bet.choice.value == winner) {
                status = true
            } else {
                status = false
            }
            break
        default:
            if (atualFix.teams.home) {
                winner = "Home"
            }
            if (atualFix.teams.away) {
                winner = "Away"
            }
            if (!atualFix.teams.home && !atualFix.teams.away) {
                winner = "Draw"
            }
            if (bet.choice.value == winner) {
                status = true
            } else {
                status = false
            }
            break
    }
    // console.log(status, winner, bet.choice.value, atualFix.score.fulltime, atualFix.teams)
    return status
}