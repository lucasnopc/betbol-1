export default async function odds(req, res) {
    if (req.method == "GET") {
        // const { id, book } = req.query
        const rotas = { ...req.query }
        const [id, book] = rotas.params
        const link = (book) => {
            if (!book) {
                return `${process.env.APISPORT}/odds?fixture=${id}&bookmaker=6`
            }
            return `${process.env.APISPORT}/odds?fixture=${id}&bookmaker=${book}`
        }
        const odds_res = await fetch(link(book),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const odds = await odds_res.json()
        if (odds.response[0]) {
            odds.response[0].bookmakers[0].bets.map((betItem, betIndex) => {
                betItem.values.map((val, valIndex) => {
                    if(val.odd > 15) {
                        odds.response[0].bookmakers[0].bets[betIndex].values[valIndex].odd = 15.00
                        // console.log('odds val', odds.response[0].bookmakers[0].bets[betIndex].values[valIndex].odd)
                        } 
                    })
            })
        }
        res.status(200).json({ odd: odds.response })
    }
}