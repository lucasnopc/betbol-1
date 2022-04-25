import {  useState } from 'react'
import LayoutAdmin from '../../../../components/layouts/admin'
import serverSidePropsAdmin from '../../../../utills/serverSidePropsAdmin'

export default function Cambista() {
  const [idTicket ,setIdTicket] = useState()
  const handlersearchTicket = (e) => {
      e.preventDefault()

  }
    
  return <>
        <LayoutAdmin>
            <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <h1 className="font-semibold uppercase">Validar Bilhete</h1>
                <div id="add-cambista" className="p-2 border border-gray-200">
                    <p className="text-gray-600 font-semibold">
                        Insira o id do bilhete fornecido por um cliente.
                    </p>
                    <form onSubmit={e => handlersearchTicket(e)}>
                        <input className="input-all" type="text" onChange={e => setIdTicket(e.target.value)} />
                        <button className="input-button input-all" >Verificar Bilhete</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context , 3)
    return ret
}