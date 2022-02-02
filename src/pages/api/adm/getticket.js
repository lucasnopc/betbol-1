import { connectToDatabase } from '../../../utills/conectdb';

export default async function getTickers(req, res) {
    if(req.method == "GET") {
        let { db } = await connectToDatabase()
        const response = await db
        .collection("bets").find({}).toArray().then((bilhete) => {
            res.status(200).json({bilhete})
        })
    }
}