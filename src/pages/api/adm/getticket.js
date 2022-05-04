import { connectToDatabase } from '../../../utills/conectdb';

export default async function getTickers(req, res) {
    if(req.method == "GET") {
        const find = req.query.id ? {_id: req.query.id} : {}
        let { db } = await connectToDatabase()
        const response = await db
        .collection("bets").find(find).toArray().then((bilhete) => {
            res.status(200).json({bilhete})
        })
    }
}