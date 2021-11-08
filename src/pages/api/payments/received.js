import axios from "axios"
import { getSession } from "next-auth/client"
import { connectToDatabase } from "../../../utills/conectdb"

export default async function received(req, res) {
    if (req.method = "POST") {
        const pay = req.body.pay
        let { db } = await connectToDatabase()
        const session = await getSession({ req })
        const email = session.user.email
        const points = Number(pay.points) + Number(req.body.points)
        var receivedValue = { $set: { received: true } };
        const dataPost = {
            "points": points,
            "email": email
        }
        console.log(dataPost)
        await axios.post(`${process.env.NEXTAUTH_URL}/api/adm/updatePoints`, dataPost)
            .then(() => {
                db.collection("payment").updateOne({ id: pay.id }, receivedValue, function (err, resp) {
                    if (err) console.log(err)
                    res.status(200).json({json: `ok`})
                })
            })
            .catch(err => console.log(err))

    }
}