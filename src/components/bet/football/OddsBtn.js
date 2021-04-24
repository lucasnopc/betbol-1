import { FcLock } from 'react-icons/fc'

export default function OddsBtn (props) {

    const onSubmit = data => {
        const betsOn = { 
          bet: JSON.parse(data.target.value),
          buttonId: data.target.id
        }
        if(data.target.checked == true) {
          
        }
        if(props.listBetState.length == 0) {
            props.setListBetState([betsOn])
            return ''
        }
        for(let i = 0; i < props.listBetState.length; i ++) {
            if(props.listBetState[i].bet.id == betsOn.bet.id) {
                const ListBetStateDuplicate = [...props.listBetState]
                ListBetStateDuplicate[i] = betsOn
                props.setListBetState(ListBetStateDuplicate)
                return ''
          }
        }
        props.setListBetState([...props.listBetState, betsOn])
      }


    const game = props.game
    if (typeof game.odds == 'undefined' || typeof game.odds[0] == 'undefined') {
      return <>
        <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
        <div className="inline-block p-2 mx-2 text-md text-gray-700 cursor-not-allowed border-2 border-gray-300 font-normal rounded-md bg-white"><FcLock /></div>
      </>
    } else {
      const gameText = JSON.stringify(game)
      return <>
        <form>
          <div className="inline-block">
            <input 
              type="radio" 
              id={`bethome-${game.id}`} 
              name={`bet-${game.id}`}
              value={gameText}
              // checked={radioisChecked('o')}
              onChange={onSubmit}
              className="hidden" />
            <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`bethome-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[0].odd}</label>
          </div>
          <div className="inline-block">
            <input 
              type="radio" 
              id={`betdraw-${game.id}`} 
              name={`bet-${game.id}`}
              value={gameText}
              onChange={onSubmit}
              className="hidden" />
            <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`betdraw-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[1].odd}</label>
          </div>
          <div className="inline-block">
            <input 
              type="radio" 
              id={`betaway-${game.id}`} 
              name={`bet-${game.id}`} 
              value={gameText}
              onChange={onSubmit}
              className="hidden" />
            <label className="inline-block p-2 mx-2 text-xs text-gray-700 cursor-pointer hover:bg-blue-200 label-checked:bg-blue-600 label-checked:text-white border-2 border-gray-300 font-normal rounded-md bg-white" htmlFor={`betaway-${game.id}`}>{game.odds[0].bookmakers[0].bets[0].values[2].odd}</label>
          </div>
        </form>
      </>
    }

  }