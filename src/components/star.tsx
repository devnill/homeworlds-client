import { Piece } from "../types.d"
import { FC } from "react";
import { colorToHex } from "../util";

const Star: FC<{piece: Piece}>= ({piece}) => {
    const {color, size} = piece
    const starSize = (size*30)+10
    return (<div>
        <svg height={starSize} width={starSize}>
            <circle cx={starSize/2} cy={starSize/2} r={starSize/2} fill={colorToHex(color)} />
        </svg> 
    </div>)
}

export default Star;