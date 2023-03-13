import { Piece, Ship as ShipInterface, System as SystemProps  } from "../types.d"
import Star  from "./star"
import Ship  from "./ship"
import { FC } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const System: FC<{config: SystemProps}>= ({config}) => {

  const playerId = useSelector((state: RootState)=>{
    return state.user?.id
  });

  const {stars} = config;
  const {friendlyShips, enemyShips} = config.ships.reduce((acc, cur)=>{
    if(cur.owner===playerId){
      acc.friendlyShips.push(cur)
    } 
    else{
      acc.enemyShips.push(cur);
    }
    return acc;
  }, {friendlyShips:[], enemyShips:[] } as {friendlyShips: ShipInterface[], enemyShips: ShipInterface[]})
     
  const baseStyle = `border w-min border-black bg-gray-900 m-1 h-48}`


  return (
    <div className={`${baseStyle}`}>
      <pre>{JSON.stringify(config.id)}</pre>
      <div className="flex justify-center">
      <div>{enemyShips.map((piece, idx)=><Ship key={idx} piece={piece}/>)}</div>
      <div className={stars.length>1? 'binary-star' : ''}>
        {stars.map((piece, idx)=><Star key={idx} piece={piece}/>)}
      </div>
      <div>{friendlyShips.map((piece, idx)=><Ship key={idx} piece={piece}/>)}</div>
      </div>
    </div>)
}

export default System;