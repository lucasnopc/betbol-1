import { connectToDatabase } from '../../../../utills/conectdb';
import isAdmin from '../../../../utills/isAdmin'
import { getSession } from "next-auth/client"

export default async function setCambista(req, res) {
  const cambista_email = req.body.email
  if (req.method == "POST") {
    const session = await getSession({ req, res })
    const email = session.user.email
    const thisIsAdmin = await isAdmin(email)
    if (thisIsAdmin) {
      let { db } = await connectToDatabase()
      var newvalues = { $set: { nivel:3 } };
        await db.collection("users").updateOne({ $and:[ {email: cambista_email}, { $or: [{ nivel: {$lt:3 }}, { nivel: { $exists: false} } ]}] }, newvalues, function (err, resp) {
          if (resp.result.nModified > 0) {
            res.status(201).json(
              {
                message: `${cambista_email} agora tem acesso ao sistema de cambistas!`
              })
          }else {
            res.status(203).json(
              {
                message: `${cambista_email} não existe ou não pode ser cambista!`
              })
          }
          if (err) console.log('err cambista', err)
        })
    }
  }
  if (req.method == "DELETE") {
    const session = await getSession({ req, res })
    const email = session.user.email
    const thisIsAdmin = await isAdmin(email)
    if (thisIsAdmin) {
      let { db } = await connectToDatabase()
      var newvalues = { $set: { nivel:0 } };
      await db.collection("users").updateOne({email:req.query.email}, newvalues, function (err, resp) {
        if (resp.result.nModified > 0) {
          res.status(201).json(
            {
              message: `${req.query.email} agora não tem mais acesso ao sistema de cambistas!`
            })
        }else {
          res.status(203).json(
            {
              message: `Não foi possível mudar permissões de ${req.query.email}!`
            })
        }
        if (err) console.log('err cambista', err)
      })
    }
  }
}