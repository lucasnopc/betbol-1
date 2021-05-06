import { connectToDatabase } from './conectdb';

export default async function getUser(email) {
    const { db } = await connectToDatabase();
    const response = await db
      .collection("users").findOne({email})
    return response
}