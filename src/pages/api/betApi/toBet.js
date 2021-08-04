import { connectToDatabase } from '../../../utills/conectdb';
import { getSession } from 'next-auth/client'

export default async function toBet(req, res) {
    if (req.method == "POST") {
        let { db } = await connectToDatabase()
        const points = req.body.points
        const email = req.body.email
        const bets = req.body.bets
        const date = new Date()
        var newvalues = { $set: { points } };
        const response = await db
            .collection("users").updateOne({ email }, newvalues, async function (err, resp) {
                    if(resp.result.nModified == 1) {
                        const createBet = await db
                        .collection("bets").insertOne({
                            email,
                            date,
                            bets
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