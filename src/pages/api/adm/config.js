import { connectToDatabase } from '../../../utills/conectdb';
import isAdmin from '../../../utills/isAdmin'
import { getSession } from "next-auth/client"

export default async function setconfig(req, res) {
  if (req.method == "POST") {
    const session = await getSession({ req, res })
    const email = session.user.email
    const thisIsAdmin = await isAdmin(email)
    if (thisIsAdmin) {
      const config = req.body
      const name = 'config'
      let { db } = await connectToDatabase()
      var newvalues = { $set: { config } };
      const response = await db
        .collection("config").updateOne({ name }, newvalues, function (err, resp) {
          if (resp) {
            res.status(200).json(
              {
                message: 'Configurações atualizadas!',
              })
          }
          if (err) console.log('err ', err)
        })
    }

  }
  if (req.method == "GET") {
      let { db } = await connectToDatabase()
        await db.collection("config").find({}).toArray().then((config) => {
          res.status(200).json({ config })
        })
    }
}