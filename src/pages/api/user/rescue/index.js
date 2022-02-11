// import { connectToDatabase } from '../../../../utills/conectdb';
import { getSession } from 'next-auth/client'
import { connectToDatabase } from '../../../../utills/conectdb'

export default async function setRescue(req, res) {
  const session = await getSession({req, res})
  const email = "lucasnopc@gmail.com"
  if (req.method == "POST") {
    let { db } = await connectToDatabase()
    const email = session.user.email
  const _id = req.body._id
  const method = req.body.method
    const status = {
      date: new Date(),
      method: method,
      state: 'request'
    }
    
    var newvalues = { $set: { status } };
    
    await db.collection("bets").updateOne({ _id }, newvalues, function (err, resp) {
                res.status(200).json(
                    { 
                        message: 'ok'
                    })
            })
    }

}