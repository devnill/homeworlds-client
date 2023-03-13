import { useParams } from "react-router-dom";
import { Actions } from "../components/actions";
import { Bank } from "../components/bank";
import { Board } from "../components/board";

import { testState } from '../mocks'
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../store/actions";
import Header from "../components/header";
import { RootState } from "../store";
import Metadata from "../components/metadata";


export default function Game() {
  const dispatch = useDispatch()
  const { gameId } = useParams();
  //todo testState should come from gameId
  console.log('loading state???')
  dispatch(loadState(testState))
  return (
    <div>
    <Header />
    {gameId}
    <div className="flex">
      <div className='flex-grow w-auto border border-black'>
        <Board />
      </div>
      <div className="w-72 border border-black">
        <Bank />
        <div>
          <Metadata />          
        </div>
      </div>     
    </div>
    <Actions />
  </div>
  );
}