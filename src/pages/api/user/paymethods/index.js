import { connectToDatabase } from '../../../../utills/conectdb';
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session) res.status(400).json({ message: `unauthenticated userd` });
  
  // CREATE Pay Method
  if (req.method === 'POST') {
    const email = session.user.email
    const { db } = await connectToDatabase();
    const { pix, name, chave } = req.body.data
    const response = await db
      .collection("users")
      .update(
        { email },
        {
          $set:
          {
            payment_method:
            {
              pix, name, chave
            }
          }
        }
      )

    res.status(203).json({ message: true });
  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
}