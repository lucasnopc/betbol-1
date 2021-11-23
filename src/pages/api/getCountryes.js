export default async function GetCountryes(req, res) {
    if(req.method == "GET") {
        const countries = await fetch(`${process.env.APISPORT}/countries`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const resCountries = await countries.json()

        res.status(200).json({ countries : resCountries.response })
    }
}