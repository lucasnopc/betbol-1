import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../../utills/conectdb';

export default async function getPix(req, res) {
    let { db } = await connectToDatabase()
    const txid = req.query.txid

    if (req.method == "GET") {
        const session = await getSession({ req, res })
        if (session) {
            const email = session.user.email

            const payment = await db.collection("payment").findOne({ "pix.txid": txid })
            if (payment != null) {
                await db.collection("payment").update({ "pix.txid": txid }, { $set: { email } })
                res.status(200).json({ pix: payment })
            }
            res.status(200).json({ message: "Sem confirmação de pagamento" })
        }
    }
}