import mercadopago from 'mercadopago'
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../utills/conectdb';

export default async function SetPay(req, res) {
  let { db } = await connectToDatabase()
  const session = await getSession({ req })
  const email = session.user.email

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
        "failure": `${process.env.NEXTAUTH_URL}/feedback`,
        "pending": `${process.env.NEXTAUTH_URL}/feedback`,
      }
    };

    mercadopago.preferences.create(preference)
      .then(async function (response) {
        if (response.body.id) {
          const resp = await db.collection("payment").insertOne({
              email,
              id: response.body.id,
              points: 10
            }, function (err, resp) {
              if (resp) {
                console.log(resp)
                res.json({
                  id: response.body.id,
                  resp
                })
              }
            })
        }
        res.json({
          id: resp.body.id
        })
      }).catch(function (error) {
        console.log(error);
      });
  }
}