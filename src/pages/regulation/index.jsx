import Head from 'next/head'
import Layout from '../../components/layouts/home/layout'
import useUser from '../../utills/hooks/useUser'
import serverSidePropsClientNotRedirect from '../../utills/serverSitePRopsClientNotRedirect'

export default function RegulationPage(props) {
    const user = useUser(props.userString)

    return (
        <>
            <Head>
                <title>Betbol - Regulamento</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout userString={user}>
               <h1 className='font-semibold text-xl p-2'>Regulamento</h1>
               <p className='font-semibold p-2'>NÃO PAGAREMOS JOGOS: JÁ REALIZADOS E QUE POR FALHA, CONTINUEM NO SISTEMA, POR ERRO DE HORA OU POR JOGOS ANTECIPADOS. NO CASO DE CASADINHAS, SERÃO CALCULADOS OS VALORES, E O JOGO NÃO REALIZADO SERÁ DEVOLVIDO O VALOR PAGO, SENDO PAGOS APENAS OS JOGOS REALIZADOS COM SUCESSO.</p>
              <ul>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>COMBINAÇÕES COM DOIS JOGOS OU MAIS, SE FOREM ADIADOS OU CANCELADOS, RECEBERÁ O VALOR DOS JOGOS.</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>NAS DEMAIS OPÇÕES DE APOSTA, JOGOS ADIADOS OU CANCELADOS SÃO ESPERADOS ATÉ 48 HS</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'> TODOS OS JOGOS SÃO DEFINIDOS AO FINAL DOS 90 MINUTOS DE JOGO, INCLUINDO ACRÉSCIMOS DEFINIDOS PELO ÁRBITRO.</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>NÃO VALERÁ PRORROGAÇÃO, NEM DISPUTA DE PÊNALTIS</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>QUANDO O JOGO NÃO ALCANÇAR O FINAL DO TEMPO REGULAMENTAR, INDEPENDENTE DO TEMPO TRANSCORRIDO SERÁ CONSIDERADO O JOGO ADIADO E CANCELADA A COTAÇÃO AUTOMATICAMENTE</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>UMA APOSTA SERÁ CANCELADA SE A PARTIDA NÃO FOR CONCLUÍDA. COM RESSALVA DA FEDERAÇÃO RESPONSÁVEL SE PRONUNCIAR EM ATÉ 24HS. OS VALORES APOSTADOS SERÃO DEVOLVIDOS COM DECRESCIMO DA COMISSÃO CAMBISTA</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>QUANDO A INTEGRIDADE DE UM EVENTO ESPORTIVO FOR COMPROMETIDA. A EMPRESA RESERVA O DIREITO DE ANULAR QUALQUER APOSTA (INCLUIDAS APOSTAS MULTIPLAS) ASSOCIADA A ESTE EVENTO OS VALORES APOSTADOS SERÃO DEVOLVIDOS COM DECRESCIMO DA COMISSÃO DO CAMBISTA.</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>OS CLIENTES NÃO PODEM CANCELAR OU MUDAR UMA APOSTA UMA VEZ QUE TENHA SIDO EFETUADA E ACEITAÇÃO CONFIRMADA.</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'> TODAS AS COTAÇÕES ESTÃO SUJEITAS A VARIAÇÃO E SERÁO FIXADAS NO MOMENTO EM QUE UMA APOSTA FOR FEITA. A EMPRESA NÃO É RESPONSÁVEL POR NENHUM TIPO DE ERRO HUMANO QUE NOS LEVE A ERROS OU OMISSÕES INCLUINDO ANUNCIOS, PUBLICACÃO, MERCADO DE COTAÇÕES OU RESULTADOS DIFERENTES DOS CORRETOS OU AINDA A ACEITAÇÃO DE APOSTAS QUE CONTRARIEM AS REGRAS. CADO UMA APOSTA TENHA SIDO ACEITA COM UMA COTAÇÃO INCORRETA, A EMPRESA RESERVA O DIREITO DE ANULAR ESTÁ APOSTA.</li>
                <li className='pt-3 pl-5 lowercase first-letter:uppercase text-gray-700'>A EMPRESA NÃO PODE SER RESPONSABILIZADA POR QUALQUER ERRO DE DIGITAÇÃO HUMANO DE TERCEIROS (MERCADO DE COTAÇÃO) OU QUALQUER ERRO TANGIVEL EM RELAÇÃO A QUALQUER PRODUTO OU INFORMAÇÃO DISPONIBILIZADA. A EMPRESA RESERVA O DIREITO DE ANULAR QUALQUER APOSTA QUE TENHA ACONTECIDO SOB AS CIRCUNSTANCIA QUE EM CONSIDERE ELEITAS AO SEU JULGAMENTO QUE TAIS ERROS TENHAM ACONTECIDO.</li>
              </ul>
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const ret = serverSidePropsClientNotRedirect(context)
    return ret
}