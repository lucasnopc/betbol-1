import { getSession } from 'next-auth/client'
import getUser from '../../utills/getUser'

export default async (req, res) => {
  const session = await getSession({ req })
  const user = await getUser('lucasnopc@gmail.com')

  res.status(200).json({ 'mess': 'user', user });
}