import LayoutAdmin from '../../../components/layouts/admin/'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import useFetch from '../../../utills/useFetch'
import FullLoading from '../../../components/fullloading'
import TicketItem from './ticketitem'

export default function tickets() {
    const [bets, setBets] = useState([])
    const [filteredBets, setFilteredBets] = useState([])
    const { data, error } = useFetch('/api/adm/getticket')
    useEffect(() => {
        if (data) {
            setBets(data.bilhete)
        }
    }, [data])

    if (bets.length == 0) return <FullLoading />
    const allMails = bets.map(b => b.email)
    const mails = [...new Set(allMails)]
    const optionsMails = mails.map(e => {
        return {
            value: { email: e },
            label: e
        }
    })
    const changeSelectEmailFilter = (e) => {
        const bets_for_mail = bets.filter(b => b.email == e.value.email)
        setFilteredBets(bets_for_mail)
    }

    return <>
        <LayoutAdmin>
            <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <div>
                    <form>
                        <Select options={optionsMails} instanceId="2" placeholder="E-mail" onChange={e => changeSelectEmailFilter(e)} />
                    </form>
                    <div className="flex flex-col divide divide-y divide-gray-400">
                        {filteredBets.length > 0 && filteredBets.map(f => <TicketItem key={f._id} f={f} />)}
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    </>
}

export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context)
    return ret
}