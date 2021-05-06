export default async function odds(req, res) {
    if(req.method == "GET") {
        const { id } = req.query
            const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${id}&bookmaker=6&bet=1`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
            const odds = await odds_res.json()
            res.status(200).json({ odds })
        }
    }