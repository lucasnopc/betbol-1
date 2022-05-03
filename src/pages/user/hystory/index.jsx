import Head from 'next/head'
import useFetch from '../../../utills/useFetch'
import FullLoading from '../../../components/fullloading'
import LayoutUser from '../../../components/layouts/user'
import { useEffect, useState } from 'react'
import ListBetsHistory from '../../../components/listBetsHistory'
import { useStore } from '../../../context/store'
import { DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/pt_BR'
const { RangePicker } = DatePicker;
import { format, compareAsc, compareDesc } from 'date-fns'
import serverSidePropsClient from '../../../utills/serverSitePropsClient'

export default function historyBets(props) {
  const { user } = useStore()
  const { data, error } = useFetch(`/api/user/betsHistory?email=${user.email}`)
  const [history, setHistory] = useState([]);
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState()
  const [value, setValue] = useState()
  const today = new Date()

  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return tooEarly || tooLate;
  }

  const onOpenChange = open => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  }


  if (error) return console.log(error)

  useEffect(() => {
    if (data && value) {
      if (data.betHistory.length > 0, value.length > 0) {
        const onlyChoiceDate = data.betHistory.reverse().filter(i => {
          const date = new Date(i.date)
          const firstChoiceDate = new Date(value[0]._d)
          const lastChoiceDate = new Date(value[1]._d)
          const desc = compareDesc(date, firstChoiceDate)
          const asc = compareAsc(date, lastChoiceDate)

          if (desc == -1 && asc == -1) {
            return true
          }
        })
      }
      setHistory(onlyChoiceDate)
    }
  }, [data, value])
  useEffect(() => {
    if (data) {
      if (data.betHistory.length > 0) {
        const onlyChoiceDate = data.betHistory.reverse().filter(i => {
          const date = new Date(i.date)
          if (format(date, "dd/MM/yyyy") == format(today, "dd/MM/yyyy")) {
            return true
          }
        })
        console.log('onlyChoiceDate ', onlyChoiceDate)
      }
    }
  }, [data])

  if (!data) return <FullLoading message='Buscando apostas...' />

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME} - Futebol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutUser>
        <div className="p-1">
          <h1 className="font-bold text-sm">Histórico de Apostas</h1>
          <div className='flex justify-between mb-2'>
            <RangePicker
              locale={locale}
              value={hackValue || value}
              disabledDate={disabledDate}
              onCalendarChange={val => setDates(val)}
              onChange={val => setValue(val)}
              onOpenChange={onOpenChange}
            />
          </div>
          <div className="bg-gray-100 flex justify-between px-2 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              Bilhetes
            </span>
            <span className="text-xs font-semibold text-gray-500 uppercase">
              Status
            </span>
          </div>
          <div className=" md:h-auto overflow-auto">
            {history.map((bi) => {
              return <ListBetsHistory bi={bi} key={bi._id} />
              // return <>{bi.date}</>
            })}
            <div className='flex items-center justify-center'>
              {history.length == 0 && <h2 className='text-gray-800 text-2xl p-2 font-semibold'>Não há apostas para esta data.</h2>}
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  )
}
export async function getServerSideProps(context) {
  const ret = serverSidePropsClient(context)
  return ret
}