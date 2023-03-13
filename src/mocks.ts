import { nanoid } from "@reduxjs/toolkit";
import { Piece, System, Color, Size, State, Bank, Star, Ship, HistoryItem, Board } from "./types";
import shuffle from "lodash.shuffle";

export const randomColor = (): Color => {
  return ["RED", "GREEN", "YELLOW", "BLUE"][
    Math.floor(Math.random() * 4)
  ] as Color;
};
export const randomSize = (): Size => {
  return (Math.floor(Math.random() * 3) + 1) as Size;
};

export const mockPiece = (): Piece => ({
  id: nanoid(),
  size: randomSize(),
  color: randomColor(),
  metadata: {
    isActive: false,
  },
});

export const mockSystem = (config?: { owner?: string }): System => {
  const { owner } = config || {};
  const stars =[mockPiece(), owner ? mockPiece() : null].filter(
    (n) => n !== null
  ) as Star[];
  
  const ships = [
    {
      ...mockPiece(),
      owner: owner ? owner : (Math.floor(Math.random() * 2) + 1).toString(),
    },
  ] as Ship[]

  const isHomeworldFor=  owner ? owner : undefined
  
  return {
    id: nanoid(),
    isHomeworldFor,
    stars,
    ships,
    name: "asdasdjlk"
  };
};

export const mockBank = (): Bank => {
  return {
    RED: [3, 3, 3],
    BLUE: [2, 2, 1],
    GREEN: [0, 1, 2],
    YELLOW: [1, 0, 0],
  };
};
export const mockState = (): State => {
  return {
    bank: mockBank(),
    board: [
      mockSystem({ owner: "1" }),
      mockSystem({ owner: "2" }),
      mockSystem(),
    ],
    players: ["1", "2"],
    activePlayer: 0,
    history: [] as HistoryItem[]
  } as State;
};

export function mockStar(params: { size: 1 | 2 | 3; color: Color }): Piece {
  const { color, size } = params;
  return {
    id: nanoid(),
    size,
    color,
  };
}
export function mockShip(params: {
  size: 1 | 2 | 3;
  color: Color;
  owner: string;
}): Ship {
  const { color, size, owner } = params;
  return {
    id: nanoid(),
    size,
    color,
    owner,
  };
}
const board:Board = [
  {
    id: "IPdoZY4MAn8lV8OLUvGWJ",
    name:"dasjkdasd",
    isHomeworldFor: "1",
    stars: [
      mockStar({ color: "RED", size: 1 }),
      mockStar({ color: "BLUE", size: 2 }),
    ],
    ships: [
      {
        id: "aD2XOFRHSTLprEEtdLlg3",
        color: "GREEN",
        owner: "1",
        size: 3,
      },
    ],
  },
  {
    id: "kVB0cNVlt2E4fbjSp7ZRU",
    name:"asdalk",
    isHomeworldFor: "2",
    stars: [
      {
        id: "sYr36nNKMIJ1A_ZuiTU0F",
        color: "YELLOW",
        size: 1,
      },
      {
        id: "2YEayZkC6RBnZTcQSUkwh",
        color: "GREEN",
        size: 3,
      },
    ],
    ships: [
      {
        id: "VD_XxDD7HemdL-L9aQFr6",
        color: "BLUE",
        owner: "2",
        size: 3,
      },
    ],
  },
  {
    id: "hY6GTsVlt2E4fbj6T4RFv",
    name:"asd98iodk",
    stars: [
      {
        id: "6XsjfuNKMIJ1A_hSyfP9N",
        color: "GREEN",
        size: 2,
      },
    ],
    ships: [
      {
        id: "91s61o3KD_WoLb-KuihKd",
        color: "BLUE",
        owner: "2",
        size: 1,
      },
    ],
  },
  {
    id: nanoid(),
    name:"jasdklajslkd",
    stars: [mockStar({ color: "GREEN", size: 1 })],
    ships: [mockShip({ color: "BLUE", owner: "2", size: 1 })],
  },
  {
    name:"JKdfklsj",
    id: nanoid(),
    stars: [mockStar({ color: "RED", size: 1 })],
    ships: [mockShip({ color: "YELLOW", owner: "1", size: 1 })],
  },
  {
    name:",asdasdasd",
    id: nanoid(),
    stars: [mockStar({ color: "BLUE", size: 3 })],
    ships: [mockShip({ color: "GREEN", owner: "2", size: 2 })],
  },
];
export const testState: State = {
  bank: {
    RED: [3, 3, 3],
    GREEN: [3, 3, 3],
    BLUE: [3, 3, 3],
    YELLOW: [3, 3, 3],
  },
  board: shuffle(board),
  players: ["1", "2"],
  activePlayer: 0,
  user: {
    id: "1",
    name: "dan",
  },
  history: [] as HistoryItem[]
};


export const mockGameList: Array<{
  opponent: string,
  id: string,
  canPlay?: boolean,
  timeRemaining?: number
}> = [
  {
    opponent: 'curly',
    id: '123abc',
    canPlay: true,
    timeRemaining: 12*60*60*1000
  },{
    opponent: 'moe',
    id: '234bcd',
    timeRemaining: 16*60*60*1000
  },{
    opponent: 'larry',
    id: '432srg'
  },
];

//{
//  id: string,
//  color: Color,
//  owner?: Player,
//  size: 1|2|3,
//  metadata: {
//    isActive?: boolean
//  }
//}

//  {"id": "5_2WUimfoVoZdo3Et35Hx",
//  {"id": "YLiD_leE7akDF5T6pBKz2",
//  {"id": "vHdbITwvLQsISlVUelEmf",
//  {"id": "TxpfdW6xhB0-KnYDIlUJg",
//  {"id": "Qlm-4YG9H-T4ZwYUnr9RO",
//  {"id": "yHGNM74VcvC9xom5fNe9X",
//  {"id": "ZcObavZL6tHCZteql-HMv",
//  {"id": "",
//  {"id": "ffj6geI_HatrOvOXGPNf6",
//  {"id": "5PbBHUn572AlPEazw2CTr",
//  {"id": "fDZUDRLn7umb4og1YAEgk",
//  {"id": "A4d7m-KD7gpxPTp9rloA6",
//  {"id": "_YmcCwV-Q5WOBJOQ6faS_",
//  {"id": "cgmXp2exR6Rwo-8ca0Xld",
//  {"id": "Bq6ea6M_Pa1nCxBcDLMTN",
//  {"id": "yKdkkt_844FG2r3HK11A-",
//  {"id": "0QUZQngPtHU0FR0w5R9iG",
//  {"id": "vs-93cV4Y14v4FVUJh68a",
//  {"id": "SahIGvMSbpkYRr8wesCXU",
//  {"id": "FcSDcgoPi05QvzbNVtqKM",
//  {"id": "NnILnJqNuWHeI5DW7zXFv",
//  {"id": "4aALVMQdb3qUbk_A-JsdA",
