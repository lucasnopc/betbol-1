import { connectToDatabase } from '../../../utills/conectdb';

export default async function getUser(req, res) {
    if(req.method == "GET") {
        let { db } = await connectToDatabase()
        const response = await db
        .collection("users").find({}).toArray().then((accounts) => {
            res.status(200).json({accounts})
        })
    }
}