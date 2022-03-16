import LayoutAdmin from '../../../components/layouts/admin/'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import useFetch from '../../../utills/useFetch'
import FullLoading from '../../../components/fullloading'
import { format } from 'date-fns'

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
        console.log(bets_for_mail)
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
                        {filteredBets.length > 0 && filteredBets.map(f => {
                            const date = format(new Date(f.date), "dd/MM | mm:dd")
                            return <div key={f._id} className="w-full p-1 text-xs flex justify-between bg-gray-50 mx-1">
                                <div>{date}</div>
                                <div>R$ {Number(f.value).toFixed(2)}</div>
                                <div>R$ {Number(f.potencialReturn).toFixed(2)}</div>
                            </div>
                        })}
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