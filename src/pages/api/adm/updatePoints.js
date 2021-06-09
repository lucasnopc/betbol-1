import { connectToDatabase } from '../../../utills/conectdb';
import isAdmin from '../../../utills/isAdmin'
import { getSession } from 'next-auth/client'

export default async function getUser(req, res) {
    if (req.method == "POST") {
        // const session = await getSession({ req })
        // if (!session) res.status('400').json({ message: 'usuário inválido' })
        // const AdminValid = isAdmin(session.email)
        // if (AdminValid != true) res.status('400').json({ message: 'usuário não é admin' })
        // console.log(req.body) 
        // if(!req.query.points && !req.query.email) res.status('400').json({ message: 'campos inválidos' })
        let { db } = await connectToDatabase()
        const email = req.body.email
        const points = req.body.points
        var newvalues = { $set: { points } };
        const response = await db
            .collection("users").updateOne({ email }, newvalues, function (err, resp) {
                res.status(200).json(
                    { 
                        message: 'Pontos Atualizados com Sucesso!',
                        email,
                        points,
                        resp
                    })
            })
    }
}