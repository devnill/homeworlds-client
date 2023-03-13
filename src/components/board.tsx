import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Constellation from './constellation';
import { Size, System as SystemInterface } from '../types';

import System from './system';
import intersection from 'lodash.intersection'
import difference from 'lodash.difference'

function getSizes(constellation: Array<SystemInterface>):Array<Size>{
  return constellation.reduce((acc, system)=>{
    const sizes = system.stars.map((star)=>star.size)
    acc.push(...sizes)
    return acc;
  },[] as Array<Size>)
}
function groupSystemsByConstellation(systems: SystemInterface[], user?: string): Array<SystemInterface[]>{
    let localPlayer = user
    const constellations = systems.reduce((acc, cur)=>{
      if(cur.isHomeworldFor){
        if(!localPlayer){
          localPlayer = cur.isHomeworldFor;
        }
        if (cur.isHomeworldFor === localPlayer){
          acc.player.push(cur);
        }
        else{
          acc.opponent.push(cur);
        }
        return acc;
      } 
      const constellationType = cur.stars.map((star)=>star.size).join('');
      acc[constellationType] = acc[constellationType] || []
      acc[constellationType].push(cur);
      return acc;
    }, {player:[], opponent:[], "1":[], "2":[], "3":[]} as Record<string, Array<SystemInterface>>)
    const playerSizes = getSizes(constellations.player)
    const opponentSizes = getSizes(constellations.opponent)
    const hwIntersection: Size[] = intersection(opponentSizes, playerSizes)
    // lodash.difference is asymmetric so we need to go both ways.
    const hwDifference: Size[]  = Array.from(new Set([...difference(opponentSizes, playerSizes), ...difference(playerSizes, opponentSizes)]))
    const hwSizes = [...opponentSizes, ...playerSizes]
    const hwNeither: Size[] = difference([1,2,3], hwSizes);
    let sorted = [...hwDifference].reverse();

    sorted.splice(1,0, ...hwIntersection, ...hwNeither)
    return [constellations.opponent, ...sorted.map((size): Array<SystemInterface>=>{
      return constellations[size.toString()] || null;      
    }).filter((size)=>size!==null), constellations.player ]
  }

export function Board() {
  const user = useSelector((state: RootState)=>state.user?.id)
  const rows = useSelector((state: RootState)=>{
    const {board} = state;
    return groupSystemsByConstellation(board, user).map((row, idx)=>{
        return (
          <Constellation 
            key={idx} 
            className="flex w-full justify-center my-1 rounded-xl"
          >
            {row.map((system)=><System key={system.id} config={system} />)}
          </Constellation>
        )
      })
  });


  //{rows}        
      
  return (
    <div className="flex flex-col">
      <pre>(board)</pre>
      {rows}
    </div>
  );
}