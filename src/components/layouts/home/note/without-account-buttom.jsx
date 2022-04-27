import { useState } from "react"
import { useStore } from "../../../../context/store"
import { ConfirmDialog } from '../../../confirm-dialog'
import ItemBetNote from "./item-bet-note"
import FullLoading from '../../../fullloading'
import axios from "axios"
import { useRouter } from 'next/router'

export default function WithoutAccountButtom({ setToggleNoteBets, toast, vf, setVf, retornoPotencial }) {
  const [cliente, setCliente] = useState()
  const [open, setOpen] = useState(false)
  const { note, clearNote } = useStore()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const betWithoutAccountBet = () => {
    setLoading(true)
    axios.post('/api/betApi/bet-without-account', {
      bets: note,
      potencialReturn: retornoPotencial,
      value: vf,
      cliente: cliente,
      valid:false
    })
      .then(function (response) {
        if (response.data.ops[0]?._id) {

          toast.success("PIM gerado!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          clearNote()
          setToggleNoteBets(false)
          setLoading(false)
          router.push(`/viewticket?b=${response.data.ops[0]._id}`)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return <div className="relative w-full bg-gray-100 border-t border-gray-200">
    <label className="font-semibold p-2 py-3">Cliente<input maxLength={15} minLength={4} onChange={e => setCliente(e.target.value)} type="text" placeholder="Nome" className="w-10/12 font-semibold focus:outline-none float-right bg-transparent" required /></label>
    <button onClick={() => { cliente && cliente.length >= 4 ? setOpen(true) : setOpen(false) }} className="w-full bg-primary font-semibold text-md text-white uppercase p-3">Fazer Aposta</button>
    <ConfirmDialog confirmText="GERAR PIM" open={open} setOpen={setOpen} onConfirm={() => betWithoutAccountBet()}>
      <h1 className="text-2xl font-bold text-gray-700 border-b border-gray-200">Revisar e Finalizar</h1>
      <div id="selected_games">
        <h2 className="text-lg text-gray-600 font-bold border-b border-gray-100">Jogos Selecionados <span className="font-semibold text-gray-800 text-sm">Cliente: {cliente}</span></h2>
        <div className="overflow-scroll max-h-64">
          {note.map((bet, indice) => {
            return <ItemBetNote setVf={setVf} key={bet.fix.fixture.id} bet={bet} indice={indice} vf={vf} />
          })}
        </div>
        <div id="betdata" className="bg-gray-200 p-1 text-sm uppercase">
          <span className="block font-bold">Valor Final: {vf}</span>
          <span className="block font-bold">Retorno Potencial: {retornoPotencial}</span>
          {/* <span className="block font-bold select-auto text-lg bg-primary hover:bg-primary-dark text-center cursor-pointer text-white p-1 m-1  rounded-md" onClick={copiedLinkBet}>Id da aposta: {id}</span> */}
        </div>
      </div>
    </ConfirmDialog>
    {loading && <FullLoading />}
  </div>
}