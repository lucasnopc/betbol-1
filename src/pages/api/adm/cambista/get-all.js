import { connectToDatabase } from '../../../../utills/conectdb';

export default async function getAll(req, res) {
  if (req.method == "GET") {

      let { db } = await connectToDatabase()
      await db
        .collection("users").find({ nivel: { $gte: 3} }).toArray().then(function (resp) {
            res.status(201).json({data:resp})
        })
  }
}