import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Bilhete from '../bilhete/index'
import FullLoading from '../fullloading'
import { toast, ToastContainer } from 'react-toastify'

export default function RescueItem({ r }) {
  const [toggleTicket, setToggleTicket] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const ri = r ? r : null
  const openPayment = async () => {
    setLoading(true)
    const user = await axios.get(`/api/adm/getusers?email=${ri.email}`)
    setUser(user.data.accounts[0])
    setLoading(false)
  }
  const onSubmit = async data => {
    const body = {_id: ri._id, code: data.code, state: "payment_made"}
    await axios.post('/api/adm/change_payment_status', body)
    toast.success("Pagamento realizado!",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
    setUser(false)
  }
  if(errors != {}) console.log('err ', errors)
  return <><div className="bg-gray-100 flex divide-x-2 justify-between text-gray-700 p-1 m-0.5 shadow-md" key={ri._id}>
    <div>
      <span  onClick={() => { setToggleTicket(true) }} className="hover:text-primary cursor-pointer"><span className="font-semibold">bilhete:</span> {ri._id}</span><br />
      <span className="font-semibold">Email: </span>{ri.email}
    </div>
    <div>
      <span className="font-semibold">Valor do retorno: </span>R$ {Number(r.potencialReturn).toFixed(2)}<br />
      <span className="font-semibold">Método: </span>{ri.status.method}
    </div>
    <div className="flex items-center">
      <span onClick={() => openPayment()} className="bg-primary text-white mx-1 cursor-pointer hover:bg-primary-ligth font-semibold p-1">Realizar pagamento</span>
    </div>
  </div>
    <div>
      {r && toggleTicket && <div onClick={() => {setToggleTicket(false)}} className="bg-black bg-opacity-60 absolute flex items-center justify-center top-0 left-0 w-full h-full">
        <Bilhete bilhete={r} />
      </div>}
      {user && <div className="absolute bg-black bg-opacity-70 flex items-center justify-center top-0 left-0 w-full h-full">
            <div className="relative bg-white shadow-md rounded-md p-2">
               {user.payment_method && <><span onClick={()=>{setUser(false)}} className="text-red-300 hover:text-red-500 cursor-pointer font-semibold absolute right-0 -top-5">[x] fechar</span>
                <p>Faça o pagamento de R$ {Number(ri.potencialReturn).toFixed(2)} para o pix {user.payment_method.chave} de chave <span className="semibold">{user.payment_method.pix}</span></p>
                <p>Insira o comprovante abaixo</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("code", { required: true })} type="text" placeholder="Nº comprovante da transação!" className="w-full border outline-none p-1" />
                  <input type="submit" value="Clique aqui após fazer o pagamento pix" className="bg-primary text-white mx-1 cursor-pointer hover:bg-primary-ligth font-semibold p-1 w-full" />
                </form></>}
                {!user.payment_method && <span>Dados pix não unformados pelo usuário.</span>}
            </div>
        </div>}
    </div>
    {loading && <FullLoading />}
 <ToastContainer />
  </>
}