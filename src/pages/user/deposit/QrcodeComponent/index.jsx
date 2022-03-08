import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useCopyClipboard from 'react-use-clipboard';
import useFetch from '../../../../utills/useFetch';
import axios from 'axios';

export default function QrcodeComponent({ qrCode, valueDeposit, setQrCode, txid, user }) {
  const [isCopied, setCopied] = useCopyClipboard(qrCode?.qrcode);
  const [confirmationPix, setConfirmationPix] = useState(null)
  const { data, error } = useFetch(`/api/pix/getpix?txid=${txid}&email=${user?.email}`, { refreshInterval: 1000 });
  if (error) console.log(error)
  console.log(user)
  useEffect(() => {
    if (data?.pix) {
      setConfirmationPix(data.pix)
    }
  }, [data])

  useEffect(() => {
    const fetchConfirmationPIx = async () => {
      if (confirmationPix?.pix.endToEndId) {
        const points = Number(user.points) + Number(confirmationPix.pix.valor)
        const updatePoints = await axios.post('/api/adm/updatePoints', {
          points: points,
          email: user.email
        })
        toast.success('PIX efeituado com sucesso! Atualize a página para visualizar seus novos pontos!', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setQrCode({})
        console.log(updatePoints)
      }
    }
    fetchConfirmationPIx()
  }, [confirmationPix])
  console.log(confirmationPix)
  const copiedPix = () => {
    if(qrCode.qrcode) {
      setCopied(qrCode?.qrcode)
      toast.success('PIX Copiado', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const verifyPayment = () => {
    console.log('verify')
  }

  return <div id="qrcode" className='bg-black bg-opacity-70 absolute flex items-center justify-center w-full h-full top-0 left-0 z-40'>
    <div className='w-3/5 h-3/5 p-2 bg-white flex flex-col'>
      <h2 className='font-semibold text-base text-center'>Faça o pagamento de R$ {Number(valueDeposit).toFixed(2)} via Pix com o qrcode abaixo</h2>
      <span className='w-full text-center font-semibold text-primary cursor-pointer' onClick={() => copiedPix()}>Clique para copiar o código de pagamento pix</span>
      <div className='flex justify-center items-center'>
        <span onClick={() => copiedPix()} className="cursor-pointer"><img src={qrCode?.imagemQrcode} className="min-h-full" /></span>
      </div>
      <span className='text-center'>Após realizar o pix, clique em <span className='text-blue-600 hover:text-blue-700 font-semibold cursor-pointer' onClick={() => verifyPayment()}>Verificar Pagamento</span></span>
      <span className='text-red-600 hover:text-red-700 text-center font-semibold cursor-pointer' onClick={() => setQrCode({})}>[x] fechar</span>
    </div>
  </div>
}