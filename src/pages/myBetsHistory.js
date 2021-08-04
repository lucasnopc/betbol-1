import Layout from '../components/layouts/home/layout'
import getUser from '../utills/getUser.js'
import { getSession } from 'next-auth/client'
import BlockBet from '../components/BlockBet'
import ListBetsHistory from '../components/user/listBetsHistory'

export default function myBetsHistory(props) {
    const user = JSON.parse(props.userString)
    return <>
        <Layout userString={props.userString}>
            <div className="p-3">
                <BlockBet title="Histórico de Apostas">
                    <ListBetsHistory email={user.email} />
                </BlockBet>
            </div>
        </Layout>
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
    if (session) {
        const user = await getUser(session.user.email)
        const userString = JSON.stringify(user)
        if (typeof user.user == 'undefined') {
            return {
                redirect: {
                    destination: '/register',
                    permanent: false,
                },
            }
        } if (user.nivel == 5) {
            return {
                redirect: {
                    destination: '/adm/dash',
                    permanent: false,
                },
            }
        }
        return {
            props: { userString },
        }
    }
    return {
        props: {},
    }
}