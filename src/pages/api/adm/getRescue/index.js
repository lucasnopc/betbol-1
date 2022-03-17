import { connectToDatabase } from '../../../../utills/conectdb';

export default async function getTicketRescue(req, res) {
    if(req.method == "GET") {
        let { db } = await connectToDatabase()
        const response = await db
        .collection("bets").find({status: { $exists: true }}).toArray().then((rescue) => {
            res.status(200).json({rescue})
        })
    }
}