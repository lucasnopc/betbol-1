export default async function helloAPI(req, res) {
    if(req.method == "GET") {

        const soccer_res = await fetch(`${process.env.APISPORT}/fixtures?live=all`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const soccer = await soccer_res.json()
        
        for(let i = 0; i < soccer.response.length; i++) {
            const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${soccer.response[i].fixture.id}&bookmaker=6&bet=1`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
            const odds = await odds_res.json()
            soccer.response[i].odds = odds
        }
        res.status(200).json({ soccer })
        
    }else {
        res.status(400).json({'message': 'method request not exist'})
    }
}