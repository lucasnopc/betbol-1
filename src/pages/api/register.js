import { connectToDatabase } from '../../utills/conectdb';
import EmailIsExists from '../../utills/emailisExist'

export default async (req, res) => {
  // CREATE USER
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const { email, username, tel } = req.body
    const emailisexists = EmailIsExists(email)
    
    if (emailisexists) {
      res.status(409).json({ 'error': `Já existe uma conta criada com o e-mail ${email}` });
    }
    res.status(200).json({ 'message': `não existe conta com esse e-mail`});
  }else {
    res.status(400).json({ message: 'Wrong request method' });
  }
};