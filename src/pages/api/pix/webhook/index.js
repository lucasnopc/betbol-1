import { connectToDatabase } from '../../utills/conectdb';

export default async (req, res) => {

    console.log(req.body)
    res.send('ok')
  // CREATE PAYMENT PIX
  // if (req.method === 'POST') {
  //   const { db } = await connectToDatabase();
  //   const { pix } = req.body.data
  //   const response = await db.collection("payments").update({ email } , set)
  //   res.status(203).json({ message: true });
  // } else {
  //   res.status(400).json({ message: 'Wrong request method' });
  // }
}