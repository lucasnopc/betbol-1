import { connectToDatabase } from '../../../../utills/conectdb';

export default async function getPix(req, res) {
    let { db } = await connectToDatabase()
    const txid = req.query.txid
    const email = req.query.email

    if (req.method == "GET") {
        const payment = await db.collection("payment").findOne({ "pix.txid": txid })
        if (payment != null) {
            const update = await db.collection("payment").updateOne({ "pix.txid": txid }, { $set: { email } })
            res.status(200).json({ pix: payment })
        }else {
            res.status(200).json({ message: "Sem confirmação de pagamento" })
        }
    }
}