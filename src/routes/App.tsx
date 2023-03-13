import './App.css'
import { Board } from '../components/board'
import { Bank } from '../components/bank'
import { loadState } from '../store/actions'
import { useDispatch } from 'react-redux'
import { Actions } from '../components/actions'
import { testState } from '../mocks'

//const bank = (["RED","GREEN","BLUE","YELLOW"] as Array<Color>).reduce((bank, color)=>{
//  for(let size=1; size<=3; size++){
//    for(let count=0; count<3; count++){
//      bank.push({
//        id: nanoid(),
//        size: size as Size,
//        color
//      } as Piece)
//    }
//  }
//  return bank
//}, [] as Array<Piece>)

//console.log('zzz', JSON.stringify(bank, null, 2))
function App() {
  const dispatch = useDispatch()
  dispatch(loadState(testState))
  //dispatch(setPlayer('1'))
  //dispatch(initializeBank());
  //dispatch(loadState(testState))
  return (
    <div className="App">
      <Actions />
      <Board />
      <Bank />
    </div>
  )
}

export default App
