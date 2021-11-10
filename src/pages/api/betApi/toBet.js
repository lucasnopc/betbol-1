import { connectToDatabase } from '../../../utills/conectdb';

export default async function toBet(req, res) {
    if (req.method == "POST") {
        let { db } = await connectToDatabase()
        const email = req.body.email
        const bets = req.body.bets
        const value = req.body.value
        const date = new Date()
        const points = Number(req.body.points) - Number(value)
        var newvalues = { $set: { points } };

        const response = await db
            .collection("users")
            .updateOne({ email }, newvalues, async function (err, resp) {
                if(resp.result.nModified == 1) {
                    await db.collection("bets").insertOne({
                        email,
                        date,
                        bets,
                        value
                    }, function (err, resp) {
                        console.log('toBet.js:21 ERROR: ', err, resp)
                    })
                }
                res.status(200).json(
                    { 
                        message: 'Pontos Atualizados com Sucesso!',
                    })
            })
    }
}