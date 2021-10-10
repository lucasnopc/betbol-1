import useFetch from "../../utills/useFetch"
import Button from "./Button"

export default function Odd(props) {
    let odd = {}
    const id = props.fixId

    const { data, error } = useFetch(`/api/betApi/odds/${id}`)
    if (error) console.log(error)
    if (!data) <p> Carregando...</p>
    if (data) odd = data
    const bets = props.bets
    let values = []
    if (odd.hasOwnProperty(`odds`)) {
        if (odd.odds.results > 0) {

            const oddsBets = (bets) => {
                const book =  odd.odds.response[0].bookmakers.find((book) => {
                    return book.id == 1
                })
                const bet = book ? book.bets : null
                const values = bet ? bet.find(val => {
                    return val.id == bets 
                }) : null
                return values
            }
            values = oddsBets(bets) ? oddsBets(bets).values : []
        }
    }
    return <>

        <div className="float-right">
            {!data &&
                <>Carregando...</>
            }
            {values &&
                values.map((val, i) => {
                    return <Button key={i} odNumber={val.odd} val={val} />
                })
            }
            {!values &&
                <span className="text-gray-500">Odds indisponíveis para este jogo</span>
            }
        </div>
    </>
}