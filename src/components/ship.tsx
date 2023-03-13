

import { Ship as ShipInterface } from "../types.d"
import { FC } from "react";
import { colorToHex } from "../util";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setActivePiece } from "../store/actions";
import { ReactComponent as ShipVector} from '../assets/ship.svg'
const Ship: FC<{piece: ShipInterface}>= ({piece}) => {
    const dispatch = useDispatch()
    const {color, size} = piece
    const shipWidth = (size*20)+10
    const shipHeight = shipWidth*1.5;
    const  playerId = useSelector((state: RootState)=>{
        return state?.user?.id
    });
    //const transform = piece.owner !== playerId? `rotate(180 0 0)  translate(-${shipWidth} -${shipHeight})`:`rotate(0 0 0)  translate(0 0)`
    function toggleActive(evt: React.MouseEvent<HTMLElement>){
        console.log('clicked on piece', piece)
        if(piece?.metadata?.isActive === true){
            dispatch(setActivePiece(null))
        } else {
            dispatch(setActivePiece(piece))  
        }
    }
    //const stroke=piece?.metadata.isActive?'white':'black';
    //const isPulsing = piece?.metadata.isActive?"animate-pulse":"" }
    //const isEnemy
    return (<div onClick={toggleActive} className={piece.owner!==playerId ? "rotate-180" : "rotate-0"}>
        <ShipVector stroke={piece?.metadata?.isActive ? 'white':'black'} width={shipWidth} rotate="180" height={shipHeight} fill={colorToHex(color)}/>
    </div>)
}

export default Ship;