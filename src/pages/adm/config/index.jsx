import LayoutAdmin from '../../../components/layoutAdmin/layoutAdmin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import { useForm } from "react-hook-form"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function config() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            min_value: 10,
            max_value: 2000,
            max_return_ticket: 50000,
            max_events_ticket: 20
        }
    });

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
    const ret = serverSidePropsAdmin(context)
    return ret
}