// import { connectToDatabase } from '../../../../utills/conectdb';
import axios from 'axios'
import { getSession } from 'next-auth/client'
import { connectToDatabase } from '../../../../utills/conectdb'

export default async function setRescue(req, res) {
  const session = await getSession({ req, res })
  const email = "lucasnopc@gmail.com"
  if (req.method == "POST") {
    let { db } = await connectToDatabase()
    const email = session.user.email
    const _id = req.body._id
    const method = req.body.method
    const points = req.body.points
    const status = {
      date: new Date(),
      method: method,
      state: 'request'
    }

    var newvalues = { $set: { status } };
    if (method == 'bonus') {
      newvalues.$set.status.state = 'success'
      console.log('new values ', newvalues)
      axios.post(`${process.env.NEXTAUTH_URL}/api/adm/updatePoints`, {
        points,
        email
      }).then(async () => {
        await db.collection("bets").updateOne({ _id }, newvalues, function (err, resp) {
          if(err) console.log('err', err)
          if(resp) res.status(200).json({message: 'Bonus Atualizados com sucesso'})})
      })
    }
    if (method == 'pix') {
      await db.collection("bets").updateOne({ _id }, newvalues, function (err, resp) {
        res.status(200).json(
          {
            message: 'ok'
          })
      })
    }
  }

}