export default async function Leagues(req, res) {
    if (req.method == "GET") {
        const atualYear = new Date().getFullYear()
        const leaguesQuery = await fetch(`${process.env.APISPORT}/leagues?current=true&season=${atualYear}&code=BR`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const leagues = await leaguesQuery.json()
        const leaguesWithOdds = leagues.response.filter((league) => {
            if( league.seasons[0].coverage.odds == true ) {
                return true
            }
            return false
        })
        res.status(200).json({ legues: leaguesWithOdds })

    }
}