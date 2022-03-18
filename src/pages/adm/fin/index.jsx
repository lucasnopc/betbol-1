import { useEffect, useState } from 'react'
import FullLoading from '../../../components/fullloading'
import LayoutAdmin from '../../../components/layouts/admin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import useFetch from '../../../utills/useFetch'
import RescueItem from '../../../components/rescueitem'

export default function fin() {
    const [rescues, setRescues] = useState(false)
    const { data, error } = useFetch('/api/adm/getRescue')
    if (!data) <FullLoading />
    useEffect(() => {
        if (data) {
            setRescues(data.rescue)
        }
    }, [data])
    return <>
        <LayoutAdmin>
            <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <h1 className="font-semibold uppercase ">Resgates solicitados</h1>
                {rescues && rescues.map(r => <RescueItem key={r._id} r={r} />)}
                {rescues && rescues.length == 0 && <span className="py-2">Não há solicitações de depósitos!</span>}
            </div>
        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context)
    return ret
}