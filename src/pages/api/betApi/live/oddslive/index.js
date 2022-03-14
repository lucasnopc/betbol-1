export default async function oddsLive(req, res) {
  if (req.method == "GET") {
    const id = req.query.id
    const url = `${process.env.BETA_APISPORT}/odds/live?fixture=${id}`
    const odds_res = await fetch(url,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-apisports-key': process.env.BETA_APISPORT_KEY
        },
        method: 'GET'
      })
    const odds = await odds_res.json()
    console.log(odds)
    res.status(200).json({ odd: odds.response })
  }
}