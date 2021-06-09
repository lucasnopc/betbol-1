export default async function Fixture(req, res) {
    if(req.method == "GET") {
        const { league, season } = req.query
        console.log(league, season)
        const fixture = await fetch(`${process.env.APISPORT}/fixtures?league=${league}&season=${season}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const res_fixture = await fixture.json()
        res.status(200).json({ res_fixture })
    }   
}