import { getSession } from 'next-auth/client'
import AllTickets from '../../../components/altickets'
import LayoutAdmin from '../../../components/layoutAdmin/layoutAdmin'
import isAdmin from '../../../utills/isAdmin'

export default function tickets() {
    return <>
        <LayoutAdmin>

        <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <div>
                    <AllTickets />
                </div>
            </div>

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