export default async function Fixture(req, res) {
    if(req.method == "GET") {
        const { id } = req.query
        const fixture = await fetch(`${process.env.APISPORT}/fixtures?id=${id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${id}&bookmaker=6`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
            const odds = await odds_res.json()
        const res_fixture = await fixture.json()
        res.status(200).json({ res_fixture, odds })
    }
}