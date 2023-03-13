import { index, Piece, System, Bank, ActionAttack, ActionBuild, ActionCatastrophy, ActionChooseHomeworld, ActionConcede, ActionEndTurn, ActionMove, ActionSacrificeStart, ActionSacrificeContinue, ActionTransform, State} from "../types"
import { createAction } from '@reduxjs/toolkit'

export const loadState = createAction<State>('state/load')

export const initializeBank = createAction<Bank|undefined>('bank/init')

export const createSystem = createAction<System>('system/create')
export const destroySystem = createAction<System>('system/destroy')
export const moveSystem = createAction<{id: string, row:index, col:index}>('system/move')

export const returnToBank = createAction<Piece>('bank/return')
export const takeFromBank = createAction<Piece>('bank/take')

export const setPlayer = createAction<string>('player/set')


export const attack = createAction<ActionAttack>('action/attack')
export const build = createAction<ActionBuild>('action/build')
export const catastrophe = createAction<ActionCatastrophy>('action/catastrophy')
export const chooseHomeworld = createAction<ActionChooseHomeworld>('action/choose_homeworld')
export const concede = createAction<ActionConcede>('action/concede')
export const endTurn = createAction<ActionEndTurn>('action/end_turn')
export const move = createAction<ActionMove>('action/move')
export const sacrificeStart = createAction<ActionSacrificeStart>('action/sacrifice_start')
export const sacrificeAction = createAction<ActionSacrificeContinue>('action/sacrifice_continue')
export const transform = createAction<ActionTransform>('action/transform')

export const setActivePiece = createAction<Piece|null>('ui/set_active')

export const testAction = createAction('test/action')