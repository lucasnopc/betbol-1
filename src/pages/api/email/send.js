import { getSession } from 'next-auth/client'
import nodemailer from 'nodemailer'

export default async function SendMail(req, res) {
    const session = await getSession({ req })
    const email = session.user.email
    const sendMailConfig = {
        to: email,
        from: process.env.EMAIL_USERNAME,
        ...req.body
    }
    nodemailer
        .createTransport(process.env.EMAIL_SERVER)
        .sendMail(sendMailConfig, 
            (err, info) => {
            console.log('infoEnvelope: ', info.envelope);
            console.log('infomessageID: ', info.messageId);
            res.status(200).json({
                sendStatus: true
            })
        })
}