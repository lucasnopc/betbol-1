import { connectToDatabase } from '../../../../utills/conectdb';

export default async function webhook (req, res) {

  // CREATE PAYMENT PIX
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const { pix } = req.body

    await db.collection("payment").insertOne({"pix": pix[0]}, (err, resp) => {
      if(err) console.log('err ', err)
      if(resp) {
        res.status(203).json({ "pay": true });
      }
    })
  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
}