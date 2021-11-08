import { connectToDatabase } from '../../../utills/conectdb';
import { getSession } from 'next-auth/client'

export default async function getBetsHistory(req, res) {
    const session = await getSession({ req })
        if (!session) res.status('400').json({ message: 'usuário inválido' })
        const email = req.query.email
    if(req.method == "GET") {
        let { db } = await connectToDatabase()
        const response = await db
        .collection("payment").find({email}).toArray().then((payments) => {
            res.status(200).json({payments})
        })
    }
}