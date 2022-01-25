import { connectToDatabase } from '../../../utills/conectdb';

export default async function feedback(req, res) {
    const pay = req.query.preference_id ? req.query : req.body
    const { db } = await connectToDatabase()
    if (req.method = "POST") {
        const values = { $set: { values: pay } };
    await db.collection("payment").updateOne({id: pay.preference_id}, values, function (err, resp) {
        if (err) {
            res.status(400).json(
                {
                    message: 'feedback - pagamento não encontrado!',
                })
        }
        res.status(200).json(
            {
                message: 'feedback cadastrado!',
            })
    })
};
}