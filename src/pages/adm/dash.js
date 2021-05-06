import { signOut, getSession } from 'next-auth/client'
import getUser from '../../utills/getUser'
import useSWR from 'swr'
import axios from 'axios'
import { BsTrash } from 'react-icons/bs'
import { ConfirmDialog, IconButton } from '../../components/confirm-dialog'
import { useState } from 'react';
import Link from 'next/link'
import LayoutAdmin from '../../components/layoutAdmin/layoutAdmin'

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
                return (
                        <Link href={`/adm/user/${user.email}`}> 
                    <div className="bg-gray-100 cursor-pointer hover:bg-white flex justify-between p-2 border-2 border-gray-200 m-1 rounded-md" key={user.id}>
                        <div>
                            <div className="inline-block mr-3 text-gray-700">
                                {user.email}
                            </div>
                            <div id="points" className="inline-block">R$ 0.00</div>
                        </div>
                        <div id="buttons" className="mt-1">
                            <IconButton className="float-right" aria-label="delete" onClick={() => setConfirmOpen(true)}>
                                <button className="mx-2"><BsTrash className="text-red-800 hover:text-red-400" /></button>
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
                    </Link>
                )
            })}
        </>
    }

    return <>
        <LayoutAdmin>

            <div className="border border-gray-400 rounded-md flex-auto w-lg">
                <h2 className="font-normal uppercase m-2">Usuários</h2>
                <UsersList />
            </div>
        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const user = await getUser(session.user.email)
    if (user.nivel != 5) {
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