import compareAsc from 'date-fns/compareAsc'

export default async function Fixture(req, res) {
    if(req.method == "GET") {
        const { league, season } = req.query
        const fixture = await fetch(`${process.env.APISPORT}/fixtures?league=${league}&season=${season}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': process.env.APISPORT_KEY
            },
            method: 'GET'
        })
        const res_fixture = await fixture.json()
        const res_filter = res_fixture.response.filter((res) => {
            const date = new Date(res.fixture.date)
            const fiveDaysInFuture = new Date()
            fiveDaysInFuture.setDate(fiveDaysInFuture.getDate() + 5)
            const compareifDateIsFuture = compareAsc(date, new Date())
            const compareIfDateIsFiveDaysInFuture = compareAsc(date, fiveDaysInFuture)
            if (compareifDateIsFuture >= 0 && compareIfDateIsFiveDaysInFuture <= 0) {
                return true
            } else {
                return false

            }
        })
        res.status(200).json({ res_filter })
    }   
}