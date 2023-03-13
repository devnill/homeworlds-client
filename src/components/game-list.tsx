
import { Link } from "react-router-dom";
import {mockGameList} from '../mocks'
export default function GameList() {
  const games = mockGameList;

  
  return (
        <ul className="flex-grow w-auto border border-black">
          {games.map((game) => (<li className={`${game.canPlay?'':''} flex-grow b`} key={game.id}>
            <Link className="h-48 my-8 bg-gray-600 block" to={`game/${game.id}`}>
              {game.opponent}
            </Link>
          </li>))}
        </ul>
    );
  }
  