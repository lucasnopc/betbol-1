import LayoutAdmin from '../../../components/layouts/admin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'

export default function fin() {
    return <>
        <LayoutAdmin>

        <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">

        </div>

        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context)
    return ret
}