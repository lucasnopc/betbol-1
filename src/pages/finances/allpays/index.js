import useFetch from '../../../utills/useFetch'

export default function AllPays () {
    const url = `${process.env.NEXTAUTH_URL}/api/payments/getpayments`
    console.log(url)
    // const { data, error } = useFetch(url)
    // if(error) return `ERROR`
    // if(!data) return `Nenhum pagamento foi efeituado.`
    // console.log(data)
    return <>all pays </>
}