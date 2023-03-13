import { useDispatch, useSelector } from "react-redux";
import { mockSystem } from "../mocks";
import { RootState } from "../store";
import { catastrophe, createSystem } from "../store/actions";


export function Actions() {
    
  const dispatch = useDispatch()
  const availableActions = useSelector((state: RootState)=>{
    
    return state.activePlayer
    
  });

    return( <div className="border border-black flex flex-col">
      <pre>(actions)</pre>
        <button onClick={() => dispatch(createSystem(mockSystem()))}>create system</button>
     </div>
   );
 }