import Layout from '../../../components/layouts/home/layout'
import { useRouter } from 'next/router'
import axios from 'axios'
import ListMenu from '../../../components/layouts/home/listMenu'

export default function League() {
    const router = useRouter()
    // console.log(router.query)
    // const id = router.query.id[0]
    // const season = router.query.id[1]
    return <>
        <Layout>
        <div className="page grid grid-cols-7">
          <div className="col-span-1 mt-3 ml-3 border border-gray-200 rounded-md">
             <ListMenu />
          </div>
          <div className="col-span-6">
            <div className="flex flex-col md:flex-row px-4 select-none">
              {/* <SoccerLive getTimeBet={getTimeBet} setTimeBet={setTimeBet} setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} />
              <NoteBets setListBetState={setListBetState} listBetState={listBetState} getValorFinal={getValorFinal} setValorFinal={setValorFinal} /> */}
            </div>
          </div>
        </div>
        </Layout>
    </>
}