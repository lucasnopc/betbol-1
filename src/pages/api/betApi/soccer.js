import { format } from 'date-fns'

export default async function Soccer(req, res) {
    const todayDate = format(new Date(), "yyyy-MM-dd")
    
    if(req.method == "GET") {
        const fixtureId = req.body
        const soccer_res = await fetch(`${process.env.APISPORT}/fixtures?live=all`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const soccer = await soccer_res.json()
        
        // for(let i = 0; i < soccer.response.length; i++) {
        //     const odds_res = await fetch(`${process.env.APISPORT}/odds?fixture=${soccer.response[i].fixture.id}&bookmaker=6&bet=1`, 
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'x-apisports-key': process.env.APISPORT_KEY
        //         },
        //         method: 'GET'
        //     })
        //     const odds = await odds_res.json()
        //     soccer.response[i].odds = odds
        //     if(soccer.response[i].odds.results == 0){
        //         delete soccer.response[i]
        //     }
        // }
        res.status(200).json({ soccer })
        
    }else {
        res.status(400).json({'message': 'method request not exist'})
    }
}