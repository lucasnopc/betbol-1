export default async function Leagues(req, res) {
    if (req.method == "GET") {
        const atualYear = new Date().getFullYear()
        const leaguesQuery = await fetch(`${process.env.APISPORT}/leagues?season=${atualYear}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const leagues = await leaguesQuery.json()
        if(!leagues) res.status(300).json({error:   'error'})
        const leaguesWithOdds = leagues.response.filter((league) => {
            if( league.seasons[0].coverage.odds == true ) {
                return true
            }
            return false
        })
        res.status(200).json({ legues: leaguesWithOdds })

    }
}