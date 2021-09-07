export default async function searchLeaguesForCountry(req, res) {
    if (req.method == "GET") {
        const { query } = req.query
        const date = new Date()
        const urlFind = (country) => {
            if (country == `world`) {
                return `/leagues?country=world&current=true&season=${date.getFullYear()}`
            }
            else {
                return `/leagues?code=${country}&current=true&season=${date.getFullYear()}`
            }
        }
        const leagues = await fetch(`${process.env.APISPORT}/${urlFind(query)}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const resLeagues = await leagues.json()
        res.status(200).json({ leagues: resLeagues.response })
    }
}