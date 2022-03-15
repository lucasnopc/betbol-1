import { getSession } from 'next-auth/client'
import useSWR from 'swr'
import axios from 'axios'
import { BsTrash } from 'react-icons/bs'
import { ConfirmDialog, IconButton } from '../../components/confirm-dialog'
import { useState } from 'react';
import Link from 'next/link'
import LayoutAdmin from '../../components/layouts/admin'
import isAdmin from '../../utills/isAdmin'

export default function dash() {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const deleteUser = () => {
        console.log('delete')
    }
    const UsersList = () => {
        const urlSoccerApi = '/api/adm/getusers'
        const fetcher = async () => {
            const data = await axios.get(urlSoccerApi)
            return data
        }
        const { data, error } = useSWR(urlSoccerApi, fetcher)
        if (!data) {
            return <>
                Loading
            </>
        }
        const accounts = data.data.accounts
        return <>
            {accounts.map((user) => {
                if(user.points == 0) {
                    user.points = null
                }
                return (
                    <div id={user.email} className="flex justify-between p-2 border-2 border-gray-200 m-1 rounded-md" key={user.id}>
                        <Link href={`/adm/user/${user.email}`}>
                            <div className="group cursor-pointer">
                                <div className="group-hover:font-normal inline-block mr-3 text-gray-700">
                                    {user.email}
                                </div>
                                <div id="points" className="group-hover:font-normal inline-block">R$ {user.points ? user.points.toFixed(2) : `0.00`}</div>
                            </div>
                        </Link>

                        <div id="buttons" className="mt-1">
                            <IconButton className="float-right" aria-label="delete" onClick={() => setConfirmOpen(true)}>
                                <a className="inline-block mx-2"><BsTrash className="text-red-800 hover:text-red-400" /></a>
                            </IconButton>
                            <ConfirmDialog
                                title="Deletar Receita?"
                                open={confirmOpen}
                                onClose={() => setConfirmOpen(false)}
                                onConfirm={deleteUser}
                            >
                                Tem certeza que deseja excluir ?
                                </ConfirmDialog>
                        </div>
                    </div>
                )
            })}
        </>
    }

    return <>
        <LayoutAdmin>

        <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <div>
                </div>
            </div>
            {/* <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <div>
                    <UsersList />
                </div>
            </div> */}
        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const userIsdmin = await isAdmin(session.user.email)
    if (userIsdmin == false) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    
    return {
        props: {},
    }
}