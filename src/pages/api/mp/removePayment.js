import { connectToDatabase } from '../../../utills/conectdb';

export default async function removePayment(req, res) {
    const pay = req.query.preference_id ? req.query : req.body
    const { db } = await connectToDatabase()
    if (req.method = "DELETE") {
    await db.collection("payment").deleteOne({id: pay.preference_id}, function (err, resp) {
        if (err) console.log(err)
        res.status(200).json(
            {
                message: 'payment deleted!',
            })
    })
};
}