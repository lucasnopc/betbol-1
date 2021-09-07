export default async function Soccer(req, res) {
    
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
        res.status(200).json({ soccer })
        
    }else {
        res.status(400).json({'message': 'method request not exist'})
    }
}