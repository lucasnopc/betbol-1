import { connectToDatabase } from '../../../utills/conectdb';

export default async function setPoint(req, res) {
    if (req.method == "POST") {
        let { db } = await connectToDatabase()
        console.log('body setPoint ', req.body)
        const email = req.body.email || req.query.email
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