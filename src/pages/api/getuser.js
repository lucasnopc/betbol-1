import { connectToDatabase } from '../../utills/conectdb';
import { getSession } from 'next-auth/client'

export default async (req, res) => {
    if (req.method === 'GET') {
        const email = session.user.email
        const { db } = await connectToDatabase();
        const response = await db
        .collection("users")
        .findOne({ email },(error, result) => {
            if(result) res.status(203).json({ result})
            if(error) res.status(400).json({ error })
        })
    }
}