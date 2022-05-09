import { connectToDatabase } from '../../../../utills/conectdb';

export default async function validaTicket(req, res) {
  if (req.method == "POST") {
    const idTicket = req.body.id
      let { db } = await connectToDatabase()
      await db
        .collection("bets").updateOne({_id:idTicket}).toArray().then(function (resp) {
            res.status(201).json({data:resp})
        })
  }
}