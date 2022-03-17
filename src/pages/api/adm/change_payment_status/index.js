import { connectToDatabase } from '../../../../utills/conectdb'
import { getSession } from 'next-auth/client'
import isAdmin from '../../../../utills/isAdmin';

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session) res.status(400).json({ message: `unauthenticated userd` });
  const userIsdmin = await isAdmin(session.user.email)

  // CREATE Pay Method
  if (req.method === 'POST' && userIsdmin) {
    const { db } = await connectToDatabase()
    const date = new Date()
    const { _id, code, state } = req.body
    const update = await db
      .collection("bets")
      .updateOne({ _id },
        {$set: {"status.date":date, "status.state":state, "status.code":code }}, {upsert: true})
        console.log('update', update)
        res.status(203).json({ message: true });
  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
}