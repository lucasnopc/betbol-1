export default async function SoccerLive(req, res) {
    if (req.method == "GET") {
        const url = `${process.env.APISPORT}/fixtures?live=all&timezone=${req.query.tzid}`
        const soccer_res = await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const soccer = await soccer_res.json()
        res.status(200).json({ soccer })
            
    } else {
        res.status(400).json({ 'message': 'method request not exist' })
    }
}