export default async function odds(req, res) {
    if (req.method == "GET") {
        // const { id, book } = req.query
        const rotas = { ...req.query }
        const [id, book] = rotas.params
        const link = (book) => {
            if (!book) {
                return `${process.env.APISPORT}/odds?fixture=${id}`
            }
            return `${process.env.APISPORT}/odds?fixture=${id}`
        }
        const odds_res = await fetch(link(book),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-apisports-key': process.env.APISPORT_KEY
                },
                method: 'GET'
            })
        const odds = await odds_res.json()
        res.status(200).json({ odd: odds.response })
    }
}