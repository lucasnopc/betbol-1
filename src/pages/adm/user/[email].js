import { RiArrowGoBackFill } from 'react-icons/ri'
import { SiCashapp } from 'react-icons/si'

import getUser from '../../../utills/getUser'
import LayoutAdmin from '../../../components/layoutAdmin/layoutAdmin'
import { useRouter } from 'next/router'

export default function user(props) {
    const router = useRouter()
    const user = JSON.parse(props.user_string)
    console.log(user)
    return <>
        <LayoutAdmin>
            <div className="flex justify-between bg-gray-50 w-full p-3 border-b-2 border-gray-200">
                <div>
                    <a className="cursor-pointer text-gray-600 hover:text-blue-700 mr-3" onClick={() => router.back()}><RiArrowGoBackFill className="inline-block" /> Voltar</a>
                    {user.email}
                </div>
                <div>{user.user ? `Cadstro Completo` : `Cadastro Incompleto`}</div>
                <div>R$ {user.points ? user.points : `00,00`}</div>
            </div>
            <main>
                <form className="m-3">
                    <div className="border border-gray-400 inline-block p-2 rounded-l-md">
                        <label htmlFor="points">R$ </label><input className="focus:outline-none" type="number" name="points" id="points" />
                    </div>
                        <button className="border border-blue-500 p-2 bg-blue-600 hover:bg-blue-400 hover:shadow-md font-normal text-white rounded-r-md"><SiCashapp className="inline-block mr-2" />Adicionar Pontos</button>
                </form>
            </main>
        </LayoutAdmin>
    </>
}
export async function getServerSideProps(context) {
    const email = context.query.email
    const user = await getUser(email)
    const user_string = JSON.stringify(user)
    return {
        props: { user_string },
    }
}