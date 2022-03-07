import axios from "axios"

export default async function reqQQRCode(req, res) {
  const reqQr = await axios.get(`https://gn.w3mind.com.br/?value=${req.query.value}`)
  res.send(reqQr.data)
}