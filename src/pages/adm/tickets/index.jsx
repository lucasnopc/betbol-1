import LayoutAdmin from '../../../components/layouts/layoutAdmin/layoutAdmin'
import serverSidePropsAdmin from '../../../utills/serverSidePropsAdmin'

export default function tickets() {
    return <>
        <LayoutAdmin>

        <div className="mt-5 border border-gray-100 p-2 shadow-xl rounded-md flex-auto w-lg bg-white">
                <div>
                <form></form>
                </div>
            </div>

        </LayoutAdmin>
    </>
}

export async function getServerSideProps(context) {
    const ret = serverSidePropsAdmin(context)
    return ret
}