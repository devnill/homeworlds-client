import { Piece} from "../types.d"
import { FC } from "react";
import Circle  from '../assets/star.svg'
const Star: FC<{piece: Piece}>= (piece) => {

  return (
    <div className="bg-slate-100">
        (star)
        {JSON.stringify(piece, null, 2)}
        
<svg>   <circle
        style={{
            "fill":"#ff0000"
        }}
       
       cx="50"
       cy="50"
       r="50"/>
</svg>
    </div>)
}

export default Star;