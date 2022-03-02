import GNRequest from './gnrequest'

const reqGNAlready = GNRequest()
export default async function reqQQRCode(req, res) {
  const value = String(Number(req.body.value).toFixed(2))
  console.log(value)
  const reqGN = await reqGNAlready

  const dataCob = {
    calendario: {
      expiracao: 3600
    },
    valor: {
      original: value
    },
    chave: "f54efa19-a7cb-427c-8e3c-63504f506ed3",
    solicitacaoPagador: "Informe o número ou identificador do pedido."
  }

  const cobResponse = await reqGN.post('/v2/cob', dataCob)
  const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`)
  res.send(qrcodeResponse.data)
}