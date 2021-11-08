import { connectToDatabase } from '../../../utills/conectdb';

export default async function feedback(req, res) {
    //     console.log(req.query)
    const { db } = await connectToDatabase()
    
    if (req.method = "POST") {
        const values = { $set: { values: req.query } };
    await db.collection("payment").updateOne({id: req.query.preference_id}, values, function (err, resp) {
        if (err) console.log(err)
        res.status(200).json(
            {
                message: 'feedback cadastrado!',
            })
    })
};
}