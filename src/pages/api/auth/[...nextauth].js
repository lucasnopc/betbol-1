import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import nodemailer from 'nodemailer'
import GoogleProvider from 'next-auth/providers/google'

import { HtmlEmailRequest , textEmailRequest } from '../../../utills/htmlEmailRequest'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
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
                    subject: `Faça login na Betbol`,
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
  },
  database: process.env.MONGODB_URI,
  callbacks: {
    async jwt(token, account) {
      if(account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },
    // redirect: async (url, _baseUrl) => {
    //     if(url === `/`)
    // }
  }
})
