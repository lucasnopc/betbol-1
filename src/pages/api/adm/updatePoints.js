import { connectToDatabase } from '../../../utills/conectdb';
import isAdmin from '../../../utills/isAdmin'
import { getSession } from 'next-auth/client'

export default async function getUser(req, res) {
    if (req.method == "POST") {
        let { db } = await connectToDatabase()
        const email = req.body.email  || req.query.email
        const points = Number(req.body.points) || Number(req.query.points)
        var newvalues = { $set: { points } };
        const response = await db
            .collection("users").updateOne({ email }, newvalues, function (err, resp) {
                res.status(200).json(
                    { 
                        message: 'Pontos Atualizados com Sucesso!',
                    })
            })
    }
}