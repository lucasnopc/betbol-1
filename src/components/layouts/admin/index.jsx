import { useStore } from '../../../context/store'
import HeaderAdmin from '../admin/headeradmin'

export default function LayoutAdmin(props) {
    const { user } = useStore()

    return <>
        <HeaderAdmin user={user} /> 
            <main className="col-span-4 p-2 bg-gray-200 h-full">
                {props.children}
            </main>
    </>
}