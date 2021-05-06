import {useRouter} from 'next/router'
import axios from 'axios'
import useSWR from 'swr'
import Layout from '../../../components/layouts/home/layout'

export default function MoreOptions (props) {
    const router = useRouter()
    const id = router.query.fixture
    const url = `/api/betApi/fixture/${id}`
    const fetcher = axios.get(url)
    const { data, error } = useSWR(url, fetcher)
    
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)
  return<>
  <Layout>
  </Layout>
  </>
}