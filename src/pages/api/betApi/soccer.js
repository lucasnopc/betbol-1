export default async function Soccer(req, res) {
        if (req.method == "GET") {
            const url = req.query.date ? `${process.env.APISPORT}/fixtures?date=${req.query.date}&status=NS&timezone=${req.query.tzid}` : `${process.env.APISPORT}/fixtures?live=all&timezone=${req.query.tzid}`
            const soccer_res = await fetch(url,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-apisports-key': process.env.APISPORT_KEY
                    },
                    method: 'GET'
                })
            const soccer = await soccer_res.json()

            // if(page > pageNumber) page = pageNumber
            // const n_slice_one = page == 1 ? 0 : Number(`${page - 1}0`) / 2
            // const n_slice_two = Number(`${page}0`) / 2
            // let n_fail_odds = 0
            // const responseWithOdds = []
            // for (let fix of soccer.response) {
            //     if(responseWithOdds.length < 5) {
            //         const config = {
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 'x-apisports-key': process.env.APISPORT_KEY
            //             }
            //         }
            //         const odd = await axios.get(`${process.env.APISPORT}/odds?fixture=${fix.fixture.id}`, config)
            //         if(odd.data.results >= 1) {
            //             const new_fix = {...fix, odds:odd.data.response}
            //             responseWithOdds.push(new_fix)
            //         }else {
            //             n_fail_odds++
            //             console.log('fail ', n_fail_odds)
            //         }
            //     }else break
            // }
            // const response_soccer = {
            //     results: soccer.results,
            //     page_number: pageNumber,
            //     page,
            //     n_slice_one,
            //     n_slice_two,
            //     n_fail_odds
            //     // responseWithOdds             
            // }
            // console.log(response_soccer)
            res.status(200).json({ soccer })
        } else {
            res.status(400).json({ 'message': 'method request not exist' })
        }
}