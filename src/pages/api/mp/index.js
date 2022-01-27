import mercadopago from 'mercadopago'
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../utills/conectdb';

export default async function SetPay(req, res) {
  let { db } = await connectToDatabase()
  const session = await getSession({ req })
  const email = session.user.email
  const today = new Date()
  if (req.method == "POST") {

    mercadopago.configure({
      access_token: process.env.MP_PRO_ACESS_TOKEN
    })
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        }
      ],
      back_urls:
      {
        "success": `${process.env.NEXTAUTH_URL}/feedback`,
        "failure": `${process.env.NEXTAUTH_URL}/finances`,
        "pending": `${process.env.NEXTAUTH_URL}/finances`,
      }
    };

    mercadopago.preferences.create(preference)
      .then(async function (response) {
        if (response.body.id) {
          await db.collection("payment").insertOne({
            date: today,
            email,
            id: response.body.id,
            points: Number(req.body.quantity)
          }, function (err, resp) {
            if(err) console.log('err, ', err)
            if (resp) {
              res.status(200).json({
                id: response.body.id,
              })
            }
          })
        }
      }).catch(function (error) {
        console.log(`error 52 mp`, error);
      });
  }
  if (req.method == "DELETE") {
    const id = req.query.id
    await db.collection("payment").remove({ id }, function (err, resp) {
      if(err) console.log('err, ', err)
      if (resp) {
        console.log('cheguei aqui')
        res.status(200).json({
          id: req.query,
        })
      }
    })
  }
}