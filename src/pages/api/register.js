import { connectToDatabase } from '../../utills/conectdb';
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session) res.status(400).json({ message: `unauthenticated userd` });

  // CREATE USER
  if (req.method === 'POST') {
    const email = session.user.email
    const { db } = await connectToDatabase();
    const { name, lastname, tel, cpf, cep, numhouse, logradouro, bairro, localidade, uf } = req.body.data
    const points = 10
    const response = await db
      .collection("users")
      .update(
        { email },
        {
          $set:
          {
            points: {$sum: 0},
            user:
            {
              name, lastname, tel, cpf, cep, numhouse, logradouro, bairro, localidade, uf
            }
          }
        }
      )

    res.status(203).json({ message: true });
  } else {
    res.status(400).json({ message: 'Wrong request method' });
  }
};