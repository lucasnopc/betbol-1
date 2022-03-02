import axios from "axios"

export default async function reqQQRCode(req, res) {
  const reqQr = await axios.get(`https://api-betbol.herokuapp.com/?value=${req.query.value}`)
  res.send(reqQr.data)
}