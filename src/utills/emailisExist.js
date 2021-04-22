import { connectToDatabase } from './conectdb';

export default async function EmailIsExists(email) {
    const { db } = await connectToDatabase();
    const response = await db
      .collection("users").findOne({email}, (err, re) => {
       try {
         if(re) {
           return true
          }else {
            console.log('no exists')
          return false
          }
        }catch(error) {
          console.log('error', error)
        }
      })
}