export default async function Leagues(req, res) {
    if (req.method == "GET") {
        const code = req.query.code
        const leaguesQuery = await fetch(`${process.env.APISPORT}/leagues?code=${code}&current=true&type=cup`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const leagues = await leaguesQuery.json()
        // const leaguesWithOdds = leagues.response.filter((val) => {
        //     return leagues.response[0].seasons[0].coverage.fixtures.statistics_fixtures == true
        // })
        res.status(200).json({ legues: leagues.response })

    }
}