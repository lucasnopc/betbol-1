import { connectToDatabase } from '../../../../utills/conectdb';
import shortid from 'shortid'

export default async function WithoutAccounttoBet(req, res) {
  if (req.method == "POST") {
    let { db } = await connectToDatabase()

    const dataBet = {
      _id: shortid.generate(),
      date:new Date(),
      ...req.body,
    }
    await db.collection("bets").insertOne(dataBet, function (err, resp) {
      if(resp) res.status(203).json(resp)
    })
  }
}