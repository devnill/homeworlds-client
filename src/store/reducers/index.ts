import { createReducer } from '@reduxjs/toolkit'
import { Piece, State } from '../../types'
import { loadState, createSystem, setPlayer, setActivePiece, testAction} from '../actions'
import { mockState } from '../../mocks'

//const systems = createReducer([] as Array<System>, (builder) => {
//   
//      
//})


function createState(): State { 
 return mockState();
}

const gameState = createReducer(createState(), (builder) => {
    builder

    .addCase(testAction, (state, action)=>{
      console.log('loading state')
      const metadata = state.metadata
      const activePiece = metadata?.activePiece?  metadata.activePiece as Piece : {color: "GREEN"} as Piece;
      const newPiece = {
        ...activePiece,
        color: activePiece?.color === "GREEN"? "BLUE":"GREEN" 
      }
      
      state = {
        ...state,
        metadata: {
          ...metadata,
          activePiece: newPiece
        }
      }
      return state
    })
      .addCase(loadState, (state, action)=>{
        console.log('loading state')
        state = action.payload
        return state
      })
      .addCase(createSystem, (state: State, action) => {
        console.log('create system?', state, action)
        const {board} = state;
        const updatedBoard = board.concat(action.payload);
        return Object.assign({}, state, {board: updatedBoard}) 
      })
      .addCase(setPlayer, (state, action)=>{
        state.activePlayer = state.players.indexOf(action.payload);
        return state
      })
      .addCase(setActivePiece, (state, action)=>{
        console.log('set active piece action: ',action, state)
        state.metadata = state.metadata || {};
        state.metadata.activePiece = action.payload;
        //state.metadata.activePiece = action.payload?.id
        //const {board} = state;
        //const selectedPiece = action.payload?.id || null;
        //const updatedBoard = board.map((system)=>{
        //  const updatedShips = system.ships.map((ship)=>{
        //    //console.log(ship.id)
        //    ship.metadata = ship.metadata||{};
        //    if(ship.id === selectedPiece){
        //      ship.metadata.isActive=true;
        //    } else{
        //      ship.metadata.isActive=false
        //    }
        //    return ship;
        //  }); 
        //  return Object.assign({}, system, {ships: updatedShips})
        //})
        //state.board = updatedBoard;
      })
//      .addCase(destroySystem, (state, action) => {
  //      return state.filter((system)=>{system.id!==action.payload.id})
    //  })
      //.addCase(moveSystem, (state, action)=>{
        //console.log('movingSystem', action)
        //return state
      //})
    
})



//  const bank = createReducer({
//    red: [],
//    green: [],
//    blue: [],
//    yellow:[]
//  } as Bank, (builder) => {
//    builder
//      .addCase(takeFromBank, (state, action) => {
//        return state
//      })
//      .addCase(returnToBank, (state, action) => {
//        return state
//      })
//})
//
//const player = createReducer({
//  id: '123'
//} as Player, (builder)=>{
//  builder.addCase(setPlayer, (state, action)=>{
//    state.id = action.payload;
//    return state
//  })
//})

export default  gameState
