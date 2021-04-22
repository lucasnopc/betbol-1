import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import nodemailer from 'nodemailer'

import { HtmlEmailRequest , textEmailRequest } from '../../../utills/htmlEmailRequest'

export default NextAuth({
  providers: [
    Providers.Email({
        server: process.env.EMAIL_SERVER, 
        from: process.env.EMAIL_FROM,
        sendVerificationRequest: ({ identifier: email, url, token, baseUrl, provider }) => {
            return new Promise((resolve, reject) => {
                const { server, from } = provider
                const site = baseUrl.replace(/^https?:\/\//, '')
            
                nodemailer
                  .createTransport(server)
                  .sendMail({
                    to: email,
                    from,
                    subject: `Sign in to ${site}`,
                    text: textEmailRequest({ url, site, email }),
                    html: HtmlEmailRequest({ url, site, email })
                  }, (error) => {
                    if (error) {
                      logger.error('SEND_VERIFICATION_EMAIL_ERROR', email, error)
                      return reject(new Error('SEND_VERIFICATION_EMAIL_ERROR', error))
                    }
                    return resolve()
                  })
              })
        }
      }),
  ],
  pages: {
    verifyRequest: '/verify-request',
    newUser: 'first-access' 
  },
  database: process.env.MONGODB_URI,
})
