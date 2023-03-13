

import {FC, ReactNode}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { testAction } from '../store/actions';
import { Piece } from '../types';

type Props = {
  className?: string,
};
const Metadata: FC<Props> = ({className=''}) => {
    
    const activePiece = useSelector((state: RootState)=>{
    return state.metadata?.activePiece || null
  }, (l,r)=>{
    return JSON.stringify(l)  === JSON.stringify(r)
  });
  console.log('stateChange')
  
  return( 
  <pre>Selection:
    {JSON.stringify(activePiece, null, 2)}
  </pre>)
}

export default Metadata