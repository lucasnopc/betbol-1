import axios from "axios"

export default async function Fixture(req, res) {
    if (req.method == "GET") {
        const { id } = req.query
        const fixture = await fetch(`${process.env.APISPORT}/fixtures?id=${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })

        const odds_res_two = await axios(`${process.env.NEXTAUTH_URL}/api/betApi/odds/${id}`)
        const odds_two = await odds_res_two
        const res_fixture = await fixture.json()
        res.status(200).json({ res_fixture, odds:odds_two.data.odd[0] })
    }
}