import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Color } from "../types";
import { colorToHex } from "../util";
import { ReactComponent as PieceVector} from '../assets/piece.svg'

export function Bank() {
    
  const bank = useSelector((state: RootState)=>state.bank)
  const colors: Color[]=['RED', 'YELLOW', 'GREEN','BLUE' ];
  const bankPieces = colors.map((color)=>{
  
    return <div key={color} className="flex space-x-1 items-center">{bank[color].map((count: number, idx: number)=>{
      return (
        <div key={idx}>
          <span className="absolute">{count}</span>
          <PieceVector width={(idx+1)*40} height={(idx+1)*40} fill={colorToHex(color)}/>
        </div>
        )
    })}</div>
  
  })
  
   return( <div className="border border-black flex flex-col">
      <pre>(bank)</pre>
      <div>{bankPieces}</div>
    </div>
  );
}