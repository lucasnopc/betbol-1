import LayoutAdmin from '../../../components/layouts/admin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import FullLoading from '../../../components/fullloading'

export default function config({config}) {
    const { register, handleSubmit } = useForm({
        defaultValues: config
    })
    if(!config) return <FullLoading />

    const handlerConfig = async data => {
        await axios.post(`/api/adm/config`, data).then(res => {
            toast.success('Configuraões Atualizadas'
                , {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            )
        })
    }
    return <>
        <LayoutAdmin>
            <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <h1 className='font-semibold text-lg'>Configurações</h1>
                <form onSubmit={handleSubmit(data => handlerConfig(data))} className='flex flex-col'>
                    <label>
                        Valor mínimo por aposta (R$):<br />
                        <input {...register("min_value")} className='p-1 bg-gray-100 focus:outline-none focus:border-2 border-gray-300' type="number" name="min_value" />
                    </label>
                    <label>
                        Valor máximo por aposta (R$):<br />
                        <input {...register("max_value")} className='p-1 bg-gray-100 focus:outline-none focus:border-2 border-gray-300' type="number" name="max_value" />
                    </label>
                    <label>
                        Premio Máximo (R$):<br />
                        <input {...register("max_return_ticket")} className='p-1 bg-gray-100 focus:outline-none focus:border-2 border-gray-300' type="number" name="max_return_ticket" />
                    </label>
                    <label>
                        Máximo de eventos por bilhete:<br />
                        <input {...register("max_events_ticket")} className='p-1 bg-gray-100 focus:outline-none focus:border-2 border-gray-300' type="number" name="max_events_ticket" />
                    </label>
                    <input type="submit" className='bg-primary font-semibold p-2 text-white w-min' value="Salvar Configurações" />
                </form>
            </div>
            <ToastContainer />

        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const config = await axios.get(`${process.env.NEXTAUTH_URL}/api/adm/config`)
    const data = config.data.config[0].config
    serverSidePropsAdmin(context)
    return {
        props:{
            config: data
        }
    }
}