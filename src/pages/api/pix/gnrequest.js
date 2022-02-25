import fs from 'fs'
import path from 'path'
import https from 'https'
import axios from 'axios'

  const certs = fs.readFileSync(
    path.resolve(__dirname, `../../../../../src/certs/${process.env.P12_GN}`)
  )

  const agent = new https.Agent({
    pfx: certs,
    passphrase: ''
  })

  const credentials = Buffer.from(
    `${process.env.CLIENT_ID_GN}:${process.env.CLIENT_SECRET_GN}`
  ).toString('base64')

  const authenticate = () => {
  return axios({
    method: 'POST',
    url: `${process.env.HOST_GN}/oauth/token`,
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json'
    },
    httpsAgent: agent,
    data: {
      grant_type: 'client_credentials'
    }
  })
}


const GNRequest = async () => {
  const authResponse = await authenticate()
  const accessToken = await authResponse.data?.access_token

  return axios.create({
    baseURL: process.env.HOST_GN,
    httpsAgent: agent,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json'
    }
  })
}

module.exports = GNRequest