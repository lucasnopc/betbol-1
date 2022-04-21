import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { ConfirmDialog } from '../../../components/confirm-dialog'
import FullLoading from '../../../components/fullloading'
import LayoutAdmin from '../../../components/layouts/admin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import useFetch from '../../../utills/useFetch'
import Link from 'next/link'

export default function Cambista() {
    const { data, error } = useFetch('/api/adm/cambista/get-all')
    const [loading, setLoading] = useState(false)
    const [toggleConfirm, setToggleConfirm] = useState(false)
    const [toggleConfirmDelete, setToggleConfirmDelete] = useState(false)
    const [email, setMail] = useState("")

    if (!data) return <FullLoading />
    const handlerCreateCambista = e => {
        e.preventDefault()
        setToggleConfirm(true)
    }
    const changeNivelCambistaForEmail = () => {
        setLoading(true)
        axios.post('/api/adm/cambista', { email }).then(res => {
            setLoading(false)
            const message = res.data.message
            if (res.status == 201) {
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            if (res.status == 203) {
                toast.warn(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        })
    }

    const removeCambistaPermission = (email) => {
        axios.delete(`/api/adm/cambista?email=${email}`).then((res) => {
            const message = res.data.message
            if (res.status == 201) {
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            if (res.status == 203) {
                toast.warn(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        })
    }
    return <>
        <LayoutAdmin>
            <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <h1 className="font-semibold uppercase">Gerenciar Cambistas</h1>
                <div id="add-cambista" className="p-2 border border-gray-200">
                    <p className="text-gray-600 font-semibold">
                        Insira o e-mail de um usuário cadastrado para transforma-lo em cambista.
                    </p>
                    <form onSubmit={e => handlerCreateCambista(e)}>
                        <input className="input-all" type="email" onChange={e => setMail(e.target.value)} />
                        <button className="input-button input-all" >Adicionar Cambista</button>
                    </form>
                </div>
                <div id="list-cambista" className="p-2 border border-gray-200">
                    {data.data.map(d => {
                        return <div key={d._id} className="p-2 border-2 border-gray-50 hover:bg-gray-100 flex justify-between" key={d.id}>
                            <span className="">{d.name}</span>
                            <div className="flex gap-2">

                                <span className="">{d.nivel == 3 && <>
                                    <button onClick={() => setToggleConfirmDelete(true)} className="bg-red-600 font-semibold p-2 text-white rounded-md hover:bg-red-500" >Remover permissão de cambista</button>
                                    <ConfirmDialog open={toggleConfirmDelete} setOpen={setToggleConfirmDelete} onConfirm={() => { removeCambistaPermission(d.email) }}>
                                        <h1 className="font-bold uppercase">Remover permissẽos de cambista para o email: {email} ?</h1>
                                    </ConfirmDialog>
                                </>}</span>
                                <Link href="/adm/cambista/relatorio"><a className="bg-yellow-600 font-semibold p-2 text-white rounded-md hover:bg-yellow-500">Relatório</a></Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </LayoutAdmin>
        <ConfirmDialog open={toggleConfirm} setOpen={setToggleConfirm} onConfirm={() => { changeNivelCambistaForEmail() }}>
            <h1 className="font-bold uppercase">Transformar conta de email: {email} em cambista ?</h1>
        </ConfirmDialog>
        <ToastContainer />
        {loading && <FullLoading />}
    </>
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context , 3)
    return ret
}