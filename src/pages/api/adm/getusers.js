import { connectToDatabase } from '../../../utills/conectdb';

export default async function getUser(req, res) {
    if(req.method == "GET") {
        let find = {}
        if(req.query.email) {
            find = {email: req.query.email}
        }

        let { db } = await connectToDatabase()
        const response = await db
        .collection("users").find(find).toArray().then((accounts) => {
            res.status(200).json({accounts})
        })
    }
}