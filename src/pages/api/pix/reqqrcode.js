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
    chave: "d98cc64b-64fa-401d-b488-c295d9b57958",
    solicitacaoPagador: "Informe o número ou identificador do pedido."
  }

  const cobResponse = await reqGN.post('/v2/cob', dataCob)
  const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`)
  res.send(qrcodeResponse.data)
}