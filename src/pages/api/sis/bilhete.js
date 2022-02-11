import { connectToDatabase } from '../../../utills/conectdb';

export default async (req, res) => {
    if (req.method === 'GET') {
        const id = req.query.id
        const { db } = await connectToDatabase();
        db.collection("bets").findOne({ '_id': id },(error, result) => {
          if(result) res.status(203).json({ result})
          if(error) res.status(400).json({ error })
        })
      }else {
        res.status(400).json({'message': 'invalid Method'})
      }
}