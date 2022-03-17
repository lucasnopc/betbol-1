import { RiArrowGoBackFill } from 'react-icons/ri'
import { SiCashapp } from 'react-icons/si'
import { getSession } from 'next-auth/client'
import getUser from '../../../utills/getUser'
import LayoutAdmin from '../../../components/layouts/admin'
import { useRouter } from 'next/router'
import isAdmin from '../../../utills/isAdmin'
import axios from 'axios'
import { useForm } from "react-hook-form";
import ListBetsHistory from '../../../components/listBetsHistory'
import useFetch from '../../../utills/useFetch'
import FullLoading from '../../../components/fullloading'

export default function user(props) {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const user = JSON.parse(props.user_string)
    const { data:dataHistory, error:errorHistory } = useFetch(`/api/user/betsHistory?email=${user.email}`)
    if (errorHistory) return console.log(error)
    if (!dataHistory) return <FullLoading />
    const CleanPoints = e => {
        e.preventDefault()
        const email = user.email
        axios.post('/api/adm/updatePoints', {
            points: 0,
            email
          })
          .then(function (response) {
           alert('pontos zerados!')
            location.reload()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const alterPoints = data => {
        const firstPoints = user.points
        const morePoints = data.morePoints
        const email = user.email
        const points = Number(firstPoints) + Number(morePoints)
        axios.post('/api/adm/updatePoints', {
            points,
            email
          })
          .then(function (response) {
            alert('pontos Alterados!')
            location.reload()
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    if(user.points == 0) {
        user.points = null
    }
    return <>
        <LayoutAdmin>
            <div className="flex justify-between bg-gray-50 w-full p-3 border-b-2 border-gray-200">
                <div>
                    <a className="cursor-pointer text-gray-600 hover:text-blue-700 mr-3" onClick={() => router.back()}><RiArrowGoBackFill className="inline-block" /> Voltar</a>
                    {user.email}
                </div>
                <div>{user.user ? `Cadstro Completo` : `Cadastro Incompleto`}</div>
                <div>R$ {user.points ? user.points.toFixed(2) : `0.00`}</div>
            </div>
            <main>
                <form onSubmit={handleSubmit(alterPoints)} className="m-3 inline-block">
                    <div className="border border-gray-400 inline-block p-2 rounded-l-md">
                        <label htmlFor="points">R$ </label>
                        <input {...register("morePoints", { required: true })} 
                            className="focus:outline-none" 
                            type="text"
                            id="points" />
                    </div>
                        <input type="submit" className="border border-blue-500 p-2 bg-blue-600 hover:bg-blue-400 hover:shadow-md font-normal text-white rounded-r-md" value="Adicionar Pontos" />
                </form>
                <button onClick={CleanPoints} className="border border-red-500 p-2 bg-red-600 hover:bg-red-400 hover:shadow-md font-normal text-white rounded-md"><SiCashapp className="inline-block mr-2" />Zerar Pontos</button>
                <div id="apostas-user" className="bg-gray-100 p-3 border border-gray-200 rounded-md">
                    <h3 className="uppercase font-normal ">Apostas do usuário</h3>
                    {dataHistory.betHistory.reverse().map((r) => {
              return <ListBetsHistory key={r._id} data={r}  />
            })}
                </div>
            </main>
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
    const userIsdmin = await isAdmin(session.user.email)
    if (userIsdmin == false) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    
    const email = context.query.email
    const user = await getUser(email)
    const user_string = JSON.stringify(user)
    return {
        props: { user_string },
    }
}